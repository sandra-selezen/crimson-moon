"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { Field, Form, Formik } from "formik";
import { RiGoogleFill } from "@remixicon/react";

import { signUpSchema } from "@/schemas";

import { Separator } from "@/components/Separator/Separator";
import style from "../../../styles/pages/AuthPage.module.scss";

export const SignupForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: ""
  }

  const onGoogleSignup = async () => {
    await signIn("google");
  }

  const handleSubmit = () => {};

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values }) => (
          <Form className={style.form}>
            <div className={style.fieldWrapper}>
              <label htmlFor='name'>Full name</label>
              <Field required id='name' name='name' type='text' placeholder='Enter your full name' className={style.field} />
            </div>
            <div className={style.fieldWrapper}>
              <label htmlFor='email'>Email address</label>
              <Field required id='email' name='email' type='email' placeholder='Enter your email address' className={style.field} />
            </div>
            <div className={style.fieldWrapper}>
              <label htmlFor='password'>Password</label>
              <Field required id='password' name='password' type='password' placeholder='Enter password' className={style.field} />
            </div>

            <div className={style.submitBox}>
              <button type="submit" className={style.signupBtn}>Sign up</button>
              <p>Have an account? <Link href="/login" className={style.loginLink}>Login</Link></p>
            </div>
            <Separator label="or" />
          </Form>
        )}
      </Formik>

      <div className={style.socialAuthBox}>
        <button type="submit" onClick={onGoogleSignup} className={style.socialBtn}>
          <RiGoogleFill size={"1.5rem"} />
          <span>Signup with Google</span>
        </button>
      </div>
    </>
  )
}
