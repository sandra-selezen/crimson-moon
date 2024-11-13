import mongoose, { Document, Model, Schema, model } from "mongoose";

export interface IUser extends Document {
  _id: string;
  email: string;
  password?: string;
  name: string;
}


export interface UserDocument {
  _id: string;
  email: string;
  password: string;
  name: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  token: string;
}

const UserSchema: Schema<IUser> = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User: Model<IUser> = mongoose.models?.User || mongoose.model<IUser>('User', UserSchema);

export default User;
