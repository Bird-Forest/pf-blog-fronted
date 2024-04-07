import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { WrapAuth, WrapNav, WrapOutlet } from './Enter.styled';

export default function Auth() {
  return (
    <WrapAuth>
      <WrapNav>
        <NavLink className="navigate left" to="sign-up">
          sign Up
        </NavLink>
        <NavLink className="navigate right" to="sign-in">
          sign In
        </NavLink>
      </WrapNav>
      <WrapOutlet>
        <Outlet />
      </WrapOutlet>
    </WrapAuth>
  );
}
