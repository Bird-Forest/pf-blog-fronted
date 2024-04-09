import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormName from 'components/Auth/FormName';
// import Spinner from 'components/Helper/Spinner';
import { BtnUdate, WrapUpdateName } from './User.styled';

const validationSchema = Yup.object({
  name: Yup.string().min(2, 'Too Short!').max(7, 'Too Long!'),
});
const initialValues = {
  name: '',
};

export default function UserName() {
  return (
    <WrapUpdateName>
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
            <BtnUdate type="submit">
              update name
              {/* {props.isSubmitting ? <Spinner /> : 'save'} */}
            </BtnUdate>
          </Form>
        )}
      </Formik>
    </WrapUpdateName>
  );
}
