import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { BtnAuth, WrapForm, WrapSign } from './Enter.styled';
import FormName from './FormName';
import FormPass from './FormPass';
import Spinner from 'components/Helper/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import NotifPositive from 'components/Helper/NotifPositive';
import NotifNegative from 'components/Helper/NotifNegative';
import { signUpUser } from '../../redux/servise';
import { selectErrorUser, selectLoading } from '../../redux/selectors';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('This field is required'),
  email: Yup.string().email('Invalid email').required('This field is required'),
  password: Yup.string().required('This field is required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export default function SignUp() {
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();
  const isError = useSelector(selectErrorUser);
  const isLoading = useSelector(selectLoading);

  return (
    <WrapSign>
      <WrapForm>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            console.log(values);
            dispatch(signUpUser(values));
            setIsShow(true);
            resetForm();
          }}
        >
          {props => (
            <Form className="form-up" autoComplete="off">
              <FormName label="Name*" name="name" type="text" />
              <FormName label="Email*" name="email" type="email" />
              <FormPass label="Password*" name="password" type="password" />
              <BtnAuth type="submit">
                {isLoading ? <Spinner /> : 'save'}
              </BtnAuth>
            </Form>
          )}
        </Formik>
      </WrapForm>
      {isShow && <NotifPositive onClose={() => setIsShow(false)} />}
      {isError && (
        <NotifNegative
          message={isError.message}
          onClose={() => setIsShow(false)}
        />
      )}
    </WrapSign>
  );
}
