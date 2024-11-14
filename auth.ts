import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import client from "@/lib/mongodb";
import User from "@/models/User";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { mongooseConnect } from "@/lib/mongoose";

const AUTH_GOOGLE_ID = process.env.AUTH_GOOGLE_ID;
const AUTH_GOOGLE_SECRET = process.env.AUTH_GOOGLE_SECRET;

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(client),
  providers: [
    credentials({
      name: "Credentials",
      id: "credentials",
      credentials: {},
      async authorize(credentials: any) {
        try {
          await mongooseConnect();
          const user = await User.findOne({ email: credentials?.email });
          if (!user) throw new Error("Incorrect email or password");
          const isValidPassword = await bcrypt.compare(
            credentials?.password ?? "", user.password as string
          ); 
          if (!isValidPassword) throw new Error("Incorrect email or password");
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
    Google({
      clientId: AUTH_GOOGLE_ID,
      clientSecret: AUTH_GOOGLE_SECRET,
    }),
  ],
  session: {
    strategy: 'jwt',
  },

  callbacks: {
    async signIn({ account, profile, credentials, user }) {
      console.log("profile", profile);
      console.log("account", account);
      console.log("credentials", credentials);
      console.log("user", user);

      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }

      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id as string,
          email: token.email ?? "",
          name: token.name ?? "",
          image: token.picture ?? "",
          emailVerified: null,
        }
      }

      return session;
    }
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXT_AUTH_SECRET as string,
});
