import React from 'react';
import { NavLink } from 'react-router-dom';
import { WrapAuth, WrapNav, WrapWell } from './Enter.styled';

export default function Auth() {
  return (
    <WrapAuth>
      <WrapWell>Welcome to our community</WrapWell>
      <WrapNav>
        <NavLink className="navigate left" to="sign-up">
          sign Up
        </NavLink>
        <NavLink className="navigate right" to="sign-in">
          sign In
        </NavLink>
      </WrapNav>
    </WrapAuth>
  );
}
