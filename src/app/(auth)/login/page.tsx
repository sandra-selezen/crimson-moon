import { LoginForm } from "@/components/Forms/LoginForm/LoginForm";

import style from "../../../styles/pages/AuthPage.module.scss";

const Login = () => {
  return (
    <main className="container">
      <h1 className={style.pageTitle}>Login to your account</h1>
      <LoginForm />
    </main>
  )
}

export default Login;
