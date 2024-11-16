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

          if (!user) {
            throw new Error("CredentialsSignin");
          }

          const isValidPassword = await bcrypt.compare(
            credentials?.password ?? "",
            user.password as string
          );

          if (!isValidPassword) {
            throw new Error("CredentialsSignin");
          }

          return {
            id: user._id,
            email: user.email,
            name: user.name,
          };
        } catch (error: any) {
          console.error("Error in authorize:", error?.message);
          throw new Error("CredentialsSignin");
        }
      },
    }),
    Google({
      clientId: AUTH_GOOGLE_ID,
      clientSecret: AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          scope: "openid email profile https://www.googleapis.com/auth/books",
        },
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user, profile, account }) {
      if (account?.provider === "google" && account.access_token) {
        token.accessToken = account.access_token;
      }
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
        };
        session.accessToken = token.accessToken as string | undefined;
      }
      return session;
    },
  },

  pages: {
    signIn: "/login",
    error: "/error",
  },

  secret: process.env.NEXT_AUTH_SECRET as string,
});
