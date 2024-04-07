import { useField } from 'formik';
import React from 'react';
import { MessError, WrapInputName } from './Enter.styled';

export default function FormName({ label, ...props }) {
  const [field, meta] = useField(props);
  const errorClass = meta.touched && meta.error ? 'error' : '';
  return (
    <WrapInputName>
      <label
        htmlFor={props.id || props.name}
        className={`label-input ${errorClass}`}
      >
        {label}
      </label>
      <input className={`name-input ${errorClass}`} {...field} {...props} />
      {meta.touched && meta.error ? <MessError>{meta.error}</MessError> : null}
    </WrapInputName>
  );
}
