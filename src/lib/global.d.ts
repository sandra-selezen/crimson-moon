import mongoose from "mongoose";
import NextAuth from "next-auth";

declare global {
  var mongoose: {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Connection> | null;
  };
}

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}
