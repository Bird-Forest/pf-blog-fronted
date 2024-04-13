import Auth from '../components/Auth/Auth';
import Wellcom from '../components/Auth/Wellcom';
import React from 'react';
import { WrapEnter } from '../components/Auth/Enter.styled';

export default function EnterPage() {
  return (
    <WrapEnter>
      <Wellcom />
      <Auth />
    </WrapEnter>
  );
}
