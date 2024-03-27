import React from 'react';
import { WrapHeader, WrapNav } from './Page.styled';
import { NavLink } from 'react-router-dom';

export default function AppBar() {
  return (
    <WrapHeader>
      <WrapNav>
        <NavLink className="navigate" to="posts">
          Posts
        </NavLink>
        <NavLink className="navigate" to="create">
          Create
        </NavLink>
      </WrapNav>
    </WrapHeader>
  );
}
