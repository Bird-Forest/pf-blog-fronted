import { useField } from 'formik';
import React, { useState } from 'react';
import { MessError, WrapInputPass } from './Enter.styled';
import { PiEyeLight } from 'react-icons/pi';

export default function FormPass({ label, ...props }) {
  const [field, meta] = useField(props);
  const errorClass = meta.touched && meta.error ? 'error' : '';
  const [showPassword, setShowPassword] = useState(false);
  return (
    <WrapInputPass>
      <label
        htmlFor={props.id || props.name}
        className={`label-input ${errorClass}`}
      >
        {label}
      </label>
      <input
        className={`pass-input ${errorClass}`}
        {...field}
        {...props}
        type={showPassword ? 'text' : 'password'}
      />
      <button
        onClick={() => setShowPassword(!showPassword)}
        className="btn-eye"
      >
        <PiEyeLight className="icon-eye" />
      </button>
      {meta.touched && meta.error ? <MessError>{meta.error}</MessError> : null}
    </WrapInputPass>
  );
}
