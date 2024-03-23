import { ErrorMessage } from 'formik';
import React from 'react';
import { ErrorText } from './posts.styled';

export default function CreateError({ name }) {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
}
