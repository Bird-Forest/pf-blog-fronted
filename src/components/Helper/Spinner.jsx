import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

export default function Spinner() {
  return (
    <ThreeDots
      visible={true}
      height="60"
      width="60"
      color="#ffffff"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}
