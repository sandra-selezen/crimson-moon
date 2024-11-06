import { SignupForm } from "@/components/Forms/SignupForm/SignupForm";

import style from "../../../styles/pages/AuthPage.module.scss";

const Signup = () => {

  return (
    <main className="container">
      <h1 className={style.pageTitle}>Create your account</h1>
      <SignupForm />
    </main>
  )
}

export default Signup;
