import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { BtnAuth, WrapForm, WrapSign } from './Enter.styled';
import FormName from './FormName';
import FormPass from './FormPass';
import Spinner from 'components/Helper/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { selectErrorUser } from '../../redux/selectors';
import NotifPositive from 'components/Helper/NotifPositive';
import NotifNegative from 'components/Helper/NotifNegative';
import { signInUser } from '../../redux/servise';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('This field is required'),
  password: Yup.string().required('This field is required'),
});

const initialValues = {
  email: '',
  password: '',
};

export default function SignIn() {
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();
  const isError = useSelector(selectErrorUser);

  return (
    <WrapSign>
      <WrapForm>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            dispatch(signInUser(values));
            console.log(values);
            resetForm();
            setIsShow(true);
          }}
        >
          {props => (
            <Form className="form-in" autoComplete="off">
              <FormName label="Email*" name="email" type="email" />
              <FormPass label="Password*" name="password" type="password" />
              <BtnAuth type="submit">
                {props.isSubmitting ? <Spinner /> : 'save'}
              </BtnAuth>
            </Form>
          )}
        </Formik>
      </WrapForm>
      {isShow && (
        <NotifPositive message={'Success'} onClose={() => setIsShow(false)} />
      )}
      {isError !== null && (
        <NotifNegative
          message={isError.message}
          onClose={() => setIsShow(false)}
        />
      )}
    </WrapSign>
  );
}
