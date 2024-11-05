"use client";

import Link from "next/link";
import { Field, Form, Formik } from "formik";

import { logInSchema } from "@/schemas";

export const LoginForm = () => {
  const initialValues = {
    email: "",
    password: ""
  }

  const handleSubmit = () => {};

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={logInSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values }) => (
        <Form>
          <div>
            <label htmlFor='email'>Email address</label>
            <Field id='email' name='email' type='email' placeholder='Enter your email address' />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <Field id='password' name='password' type='password' placeholder='Enter password' />
          </div>

          <div>
            <button type="submit">Login</button>
            <p>Don't have an account? <Link href="/signup">Sign up</Link></p>
          </div>
        </Form>
      )}
    </Formik>
  )
}
