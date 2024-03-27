import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { WrapLoad } from './Loading.styled';

export default function Loading() {
  return (
    <WrapLoad>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </WrapLoad>
  );
}
