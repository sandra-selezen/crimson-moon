"use client";

import React from 'react';
import { signIn } from 'next-auth/react';
import { SignupForm } from '@/components/Forms/SignupForm/SignupForm';

const Signup = () => {

  const onSignup = async () => {
    await signIn("google");
  }

  return (
    <main className="container">
      <h1>Create your account</h1>
      <SignupForm />
      <button type="submit" onClick={onSignup}>Signup with Google</button>
    </main>
  )
}

export default Signup;
