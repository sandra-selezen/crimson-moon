import * as yup from 'yup';
import { nameRegExp, emailRegExp } from '@/lib/regexes';

export const signUpSchema = yup.object().shape({
  name: yup
    .string()
    .matches(nameRegExp, 'Name may contain only letters, apostrophe, dash and spaces')
    .min(2, 'Must be at least 2 characters long')
    .required('Name is required'),
  email: yup
    .string()
    .email('Email address must contain an "@" sign')
    .matches(emailRegExp, 'Must be a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Must be at least 7 characters long')
    .max(32, "Password must be less than 32 characters")
    .required('Password is required'),
});

export const logInSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email address must contain an "@" sign')
    .matches(emailRegExp, 'Must be a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required'),
});
