import Auth from '../components/Auth/Auth';
import Wellcom from '../components/Auth/Wellcom';
import React from 'react';
import { WrapRender } from './Page.styled';
import { WrapEnter } from '../components/Auth/Enter.styled';

export default function EnterPage() {
  return (
    <WrapRender>
      <WrapEnter>
        <Wellcom />
        <Auth />
      </WrapEnter>
    </WrapRender>
  );
}
