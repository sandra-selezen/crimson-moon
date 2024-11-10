import bcrypt from "bcryptjs";

import User from "@/models/User";
import { mongooseConnect } from "@/lib/mongoose";

export const register = async (values: any) => {
  const { email, password, name } = values;
  try {
    await mongooseConnect();
    const userFound = await User.findOne({ email });
    if(userFound){
      return {
        error: 'Email already exists!'
      }
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();
  } catch (e) {
    console.log(e);
  }
}
