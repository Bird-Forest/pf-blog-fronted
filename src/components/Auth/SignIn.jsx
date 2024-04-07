import { Formik, Form } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { BtnAuth, WrapForm } from './Enter.styled';
import FormName from './FormName';
import FormPass from './FormPass';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('This field is required'),
  password: Yup.string().required('This field is required'),
});

const initialValues = {
  email: '',
  password: '',
};

export default function SignIn() {
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
          <Form className="form-in" autoComplete="off">
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
