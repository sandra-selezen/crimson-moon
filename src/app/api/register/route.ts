import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { mongooseConnect } from "@/lib/mongoose";
import User from "@/models/User";

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function POST(req: Request): Promise<Response> {
  const { name, email, password } = await req.json();

  try {
    await mongooseConnect();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "Email already exists!" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      JWT_SECRET,
      { expiresIn: "23h" }
    );

    return NextResponse.json({ message: "User registered successfully!", token }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
