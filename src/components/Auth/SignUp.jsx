import { Formik, Form } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { BtnAuth, WrapForm } from './Enter.styled';
import FormName from './FormName';
import FormPass from './FormPass';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('This field is required'),
  email: Yup.string().email('Invalid email').required('This field is required'),
  password: Yup.string().required('This field is required'),
  agreement: Yup.boolean().required('This field is required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
  agreement: false,
};

export default function SignUp() {
  return (
    <WrapForm>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(true);
            console.log(values);
            resetForm();
          }, 400);
        }}
      >
        {props => (
          <Form className="form-up" autoComplete="off">
            <FormName label="Name*" name="name" type="text" />
            <FormName label="Email*" name="email" type="email" />
            <FormPass label="Password*" name="password" type="password" />
            <BtnAuth type="submit">
              {props.isSubmitting ? 'loading...' : 'save'}
            </BtnAuth>
          </Form>
        )}
      </Formik>
    </WrapForm>
  );
}
