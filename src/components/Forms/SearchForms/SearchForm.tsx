"use client";

import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { RiSearchLine } from "@remixicon/react";

import style from "./SearchForm.module.scss";

interface IValue {
  query: string;
}

interface ISearchForm  {
  className?: string;
}

export const SearchForm = ({ className }: ISearchForm) => {
  const router = useRouter();

  const initialValues = {
    query: "",
  }
  const validationSchema = Yup.object({
    query: Yup.string()
      .min(2, 'Search term must be at least 2 characters')
      .required('Please enter a search term'),
  });

  const handleSubmit = (values: IValue, formikHelpers: FormikHelpers<IValue> ) => {
    const { query } = values;
    const formattedQuery = query.replace(/\s+/g, "+");
    router.push(`/search/books?query=${formattedQuery}`);
    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values }) => (
        <Form className={`${style.form} ${className}`} autoComplete="off">
          <Field
            type="text"
            name="query"
            placeholder="Search for books..."
            className={style.field}
          />

          <button type="submit" disabled={isSubmitting && !values.query} className={style.searchButton}>
            <RiSearchLine />
          </button>
        </Form>
      )}
    </Formik>
  );
};
