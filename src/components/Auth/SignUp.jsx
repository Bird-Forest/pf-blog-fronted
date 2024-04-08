import { Formik, Form } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { BtnAuth, WrapForm } from './Enter.styled';
import FormName from './FormName';
import FormPass from './FormPass';
import Spinner from 'components/Helper/Spinner';
import { useSignUpUserMutation } from '../../redux/UserSlice';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('This field is required'),
  email: Yup.string().email('Invalid email').required('This field is required'),
  password: Yup.string().required('This field is required'),
  // agreement: Yup.boolean().required('This field is required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
  // agreement: false,
};

export default function SignUp() {
  const [signUpUser, { data, isError, isSuccess, isLoading }] =
    useSignUpUserMutation();
  console.log('DATA', data);
  console.log('isError', isError);
  console.log('isSuccess', isSuccess);
  return (
    <WrapForm>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(true);
          //   console.log(values);
          //   resetForm();
          // }, 400);
          setSubmitting(true);
          console.log(values);
          signUpUser(values);
          resetForm();
        }}
      >
        {props => (
          <Form className="form-up" autoComplete="off">
            <FormName label="Name*" name="name" type="text" />
            <FormName label="Email*" name="email" type="email" />
            <FormPass label="Password*" name="password" type="password" />
            <BtnAuth type="submit">{isLoading ? <Spinner /> : 'save'}</BtnAuth>
          </Form>
        )}
      </Formik>
    </WrapForm>
  );
}
