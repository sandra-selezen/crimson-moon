"use client";

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { fetchBooks } from "@/lib/google-api";

interface IValue {
  query: string;
}

export const SearchForm = () => {
  const initialValues = {
    query: '',
  }
  const validationSchema = Yup.object({
    query: Yup.string()
      .min(2, 'Search term must be at least 2 characters')
      .required('Please enter a search term'),
  });

  const handleSubmit = (values: IValue, formikHelpers: FormikHelpers<IValue> ) => {
    const { query } = values;
    const books = fetchBooks(query);
    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Field
              type="text"
              name="query"
              placeholder="Search for books..."
            />
            <ErrorMessage name="query" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};
