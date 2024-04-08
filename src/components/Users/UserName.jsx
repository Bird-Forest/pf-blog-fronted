import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormName from 'components/Auth/FormName';
import { BtnAuth } from 'components/Auth/Enter.styled';
import Spinner from 'components/Helper/Spinner';

const validationSchema = Yup.object({
  name: Yup.string().min(2, 'Too Short!').max(7, 'Too Long!'),
});
const initialValues = {
  name: '',
};

export default function UserName() {
  return (
    // <WrapForm>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        console.log(values);
        // signUpUser(values);
        resetForm();
      }}
    >
      {props => (
        <Form className="form-up" autoComplete="off">
          <FormName label="Name*" name="name" type="text" />
          <BtnAuth type="submit">
            {props.isSubmitting ? <Spinner /> : 'save'}
          </BtnAuth>
        </Form>
      )}
    </Formik>
    // </WrapForm>
  );
}
