import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const AUTH_GOOGLE_ID = process.env.AUTH_GOOGLE_ID;
const AUTH_GOOGLE_SECRET = process.env.AUTH_GOOGLE_SECRET;

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google({
    clientId: AUTH_GOOGLE_ID,
    clientSecret: AUTH_GOOGLE_SECRET,
  })],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ account, profile }) {
      if (!profile?.email) {
        throw new Error('No profile')
      }

      console.log("profile", profile);
      return true;
    },
    async jwt({ token, user, account, profile }) {
      if (profile) {
        console.log("profile", profile);
      }
      return token
    },
  },
});
