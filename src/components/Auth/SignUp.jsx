import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { BtnAuth, WrapForm, WrapOutlet } from './Enter.styled';
import FormName from './FormName';
import FormPass from './FormPass';
import Spinner from 'components/Helper/Spinner';
import { useSignUpUserMutation } from '../../redux/UserSlice';
// import { useSelector } from 'react-redux';
// import { selectUserId } from '../../redux/UserSlice';
import NotifPositive from 'components/Helper/NotifPositive';
import NotifNegative from 'components/Helper/NotifNegative';
// import useLocalStorage from '../../hook/useLocalStorage';

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
  // const [user, setUser] = useLocalStorage('user', '');
  // console.log(user);
  const [signUpUser, { data, isError, isSuccess, isLoading }] =
    useSignUpUserMutation();
  console.log('DATA', data);
  // setUser(data);
  // localStorage.setItem('user', JSON.stringify(user));
  // window.localStorage.setItem('user', JSON.stringify(user));

  // const userLS = JSON.parse(window.localStorage.getItem('user', user));
  // console.log(userLS);

  // console.log('isError', isError);
  // console.log('isSuccess', isSuccess);

  // const item = useSelector(selectUserId);
  // console.log(item);

  // const state = item.mutation;
  // console.log('MUTAT', state);
  // const newUser = data.user;
  // console.log(newUser);

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
            signUpUser(values);
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
      {showSuccess && <NotifPositive onClose={() => setIsShow(false)} />}
      {showError && (
        <NotifNegative
          message={isError.message}
          onClose={() => setIsShow(false)}
        />
      )}
    </WrapOutlet>
  );
}
