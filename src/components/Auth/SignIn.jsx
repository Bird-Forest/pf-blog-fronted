import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { BtnAuth, WrapForm, WrapOutlet } from './Enter.styled';
import FormName from './FormName';
import FormPass from './FormPass';
import Spinner from 'components/Helper/Spinner';
import { useSignInUserMutation } from '../../redux/UserSlice';
import NotifPositive from 'components/Helper/NotifPositive';
import NotifNegative from 'components/Helper/NotifNegative';
// import useLocalStorage from '../../hook/useLocalStorage';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('This field is required'),
  password: Yup.string().required('This field is required'),
});

const initialValues = {
  email: '',
  password: '',
};

export default function SignIn() {
  // const [user, setUser] = useLocalStorage('user', '');
  // console.log(user);
  const [signInUser, { data: user, isError, isLoading, isSuccess }] =
    useSignInUserMutation();
  console.log(user);
  // setUser(data);
  // localStorage.setItem('user', JSON.stringify(user));
  // localStorage.setItem('user', JSON.stringify(user));
  // console.log(user);
  const [isShow, setIsShow] = useState(false);
  const showSuccess = isShow && isSuccess;
  const showError = isShow && isError;
  return (
    <WrapOutlet>
      <WrapForm>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            console.log(values);
            signInUser(values);
            resetForm();
            setIsShow(true);
          }}
        >
          {props => (
            <Form className="form-in" autoComplete="off">
              <FormName label="Email*" name="email" type="email" />
              <FormPass label="Password*" name="password" type="password" />
              <BtnAuth type="submit">
                {isLoading ? <Spinner /> : 'save'}
              </BtnAuth>
            </Form>
          )}
        </Formik>
      </WrapForm>
      {showSuccess && (
        <NotifPositive message={'Success'} onClose={() => setIsShow(false)} />
      )}
      {showError && (
        <NotifNegative
          message={isError.message}
          onClose={() => setIsShow(false)}
        />
      )}
    </WrapOutlet>
  );
}
