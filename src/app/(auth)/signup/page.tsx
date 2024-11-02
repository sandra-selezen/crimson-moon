"use client";

import React from 'react';
import { signIn } from 'next-auth/react';

const Signup = () => {

  const onSignup = async () => {
    await signIn("google");
  }

  return (
    <main>
      <div>Signup page</div>
      <button type="submit" onClick={onSignup}>Signup with Google</button>
    </main>
  )
}

export default Signup;
