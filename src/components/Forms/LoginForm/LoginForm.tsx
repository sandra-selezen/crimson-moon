"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { Field, Form, Formik } from "formik";
import { RiGoogleFill } from "@remixicon/react";

import { logInSchema } from "@/schemas";

import { Separator } from "@/components/Separator/Separator";
import style from "../../../styles/pages/AuthPage.module.scss";

export const LoginForm = () => {
  const initialValues = {
    email: "",
    password: ""
  }

  const onGoogleSignup = async () => {
    await signIn("google");
  }

  const handleSubmit = async (values: any) => {
    try {
      const response = await signIn("credentials", {
        email: values.email,
        password: values.password,
      });
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={logInSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values }) => (
          <Form className={style.form}>
            <div className={style.fieldWrapper}>
              <label htmlFor='email'>Email address</label>
              <Field required id='email' name='email' type='email' placeholder='Enter your email address' className={style.field} />
            </div>
            <div className={style.fieldWrapper}>
              <label htmlFor='password'>Password</label>
              <Field required id='password' name='password' type='password' placeholder='Enter password' className={style.field} />
            </div>

            <div className={style.submitBox}>
              <button type="submit" className={style.signupBtn}>Login</button>
              <p>Don't have an account? <Link href="/signup" className={style.loginLink}>Sign up</Link></p>
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