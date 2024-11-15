"use client";

import { useSearchParams } from "next/navigation";

enum Error {
  Configuration = "Configuration",
  CredentialsSignin = "CredentialsSignin",
}

const errorMap = {
  [Error.Configuration]: "There was a problem with the authentication configuration.",
  [Error.CredentialsSignin]: "Invalid username or password. Please try again.",
};

export default function AuthErrorPage() {
  const search = useSearchParams();
  const error = search.get("error") as Error;

  return (
    <main className="container">
      <h1>Authentication Error</h1>
      <p>
        {errorMap[error] || "An unexpected error occurred. Please try again later."}
      </p>
      <a
        href="/login"
      >
        Go to Login
      </a>
    </main>
  )
}
