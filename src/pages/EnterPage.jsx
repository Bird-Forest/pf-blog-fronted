import Auth from '../components/Auth/Auth';
// import Wellcom from '../components/Auth/Wellcom';
import React from 'react';
import { WrapEnter, WrapOutlet } from '../components/Auth/Enter.styled';
import { Outlet } from 'react-router-dom';

export default function EnterPage() {
  return (
    <WrapEnter>
      <Auth />
      <WrapOutlet>
        <Outlet />
      </WrapOutlet>
    </WrapEnter>
  );
}
