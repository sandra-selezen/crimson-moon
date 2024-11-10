import  mongoose, { Schema, model } from  "mongoose";

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

const UserSchema = new Schema<UserDocument>(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    token: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models?.User || model<UserDocument>('User', UserSchema);
export default User;
