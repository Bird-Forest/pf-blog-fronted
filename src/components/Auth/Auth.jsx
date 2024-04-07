import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { WrapAuth, WrapNav, WrapOutlet } from './Enter.styled';
import { GiShamrock } from 'react-icons/gi';

export default function Auth() {
  return (
    <WrapAuth>
      <WrapNav>
        <NavLink className="navigate left" to="sign-up">
          Sign Up
        </NavLink>
        <div className="wrap-center">
          <GiShamrock className="icon-notif" />
        </div>
        <NavLink className="navigate right" to="sign-in">
          Sign In
        </NavLink>
      </WrapNav>
      <WrapOutlet>
        <Outlet />
      </WrapOutlet>
    </WrapAuth>
  );
}
