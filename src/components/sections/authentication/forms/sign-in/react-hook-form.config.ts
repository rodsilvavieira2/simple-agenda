import * as yup from 'yup'

export type SignInFormData = {
  email: string;
  password: string;
};

export const SignInSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .required('Your must enter a email'),
  password: yup
    .string()
    .required('Your must enter password')
    .min(6, 'Your password must be at least 6 characters long')
})
