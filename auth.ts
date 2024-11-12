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
        console.log("заходить в authorize")
        const { email, password } = credentials;
        await mongooseConnect();

        const user = await User.findOne({ email: email });
        console.log("user", user)

        if (!user) throw new Error("Wrong Email");

        const passwordMatch = await bcrypt.compare(
          password,
          user.password,
        );

        if (!passwordMatch) throw new Error("Wrong Password");
        return user;
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
  secret: process.env.NEXT_AUTH_SECRET,
  callbacks: {
    async signIn({ account, profile }) {
      console.log("заходить в signIn")
      if (!profile?.email) {
        throw new Error('No profile')
      }

      console.log("profile", profile);
      console.log("account", account);
      return true;
    },
    async jwt({ token, user, account, profile }) {
      console.log("заходить в jwt")
      if (profile) {
        console.log("profile", profile);
      }
      if (account) {
        console.log("account", account);
      }
      return token;
    },
  },
});
