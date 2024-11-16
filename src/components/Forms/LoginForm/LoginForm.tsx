"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import classNames from "classnames";
import { RiGoogleFill } from "@remixicon/react";

import { logInSchema } from "@/schemas";
import { ILoginValues } from "@/lib/types";

import { Separator } from "@/components/Separator/Separator";
import style from "../../../styles/pages/AuthPage.module.scss";

export const LoginForm = () => {
  const initialValues = {
    email: "",
    password: ""
  }

  const onGoogleSignup = async () => {
    await signIn("google", { callbackUrl: "/" });
  }

  const handleSubmit = async (values: ILoginValues, formikHelpers: FormikHelpers<ILoginValues>) => {
    try {
      const result = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirectTo: "/",
      });

      if (result?.error) {
        console.error("Login error:", result.error);
        alert("Invalid credentials. Please try again.");
      }

    } catch (error: any) {
      console.error("Unexpected error during login:", error.message);
    } finally {
      formikHelpers.resetForm();
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={logInSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, errors, touched }) => (
          <Form className={style.form}>
            <div className={style.fieldWrapper}>
              <label htmlFor='email'>Email address</label>
              <Field required id='email' name='email' type='email' placeholder='Enter your email address' className={classNames(style.field, { [style.isError]: errors.email && touched.email })} />
              <ErrorMessage name="email" component="div" className={style.error} />
            </div>
            <div className={style.fieldWrapper}>
              <label htmlFor='password'>Password</label>
              <Field required id='password' name='password' type='password' placeholder='Enter password' className={classNames(style.field, { [style.isError]: errors.password && touched.password })} />
              <ErrorMessage name="password" component="div" className={style.error} />
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
