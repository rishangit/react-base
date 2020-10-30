import * as Yup from 'yup';

export const validation = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  password: Yup.string().required('Password is required'),
});

export const formElement = ({ register, errors }) => ({
  email: {
    placeholder: 'email',
    name: 'email',
    ref: register,
    error: errors['email'],
  },
  password: {
    placeholder: 'Password',
    name: 'password',
    type: 'password',
    ref: register,
    error: errors['password'],
  },
});
