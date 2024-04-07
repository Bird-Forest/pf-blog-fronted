import React from 'react';
import { WrapHeader } from '../pages/Page.styled';
import { NavLink } from 'react-router-dom';
import { WrapNav } from './Navigate.styled';

export default function AppBar() {
  return (
    <WrapHeader>
      <WrapNav>
        <NavLink className="navigate" to="/">
          posts
        </NavLink>
        <NavLink className="navigate" to="/create">
          create
        </NavLink>
        <NavLink className="navigate" to="/user-posts">
          my posts
        </NavLink>
        <NavLink className="navigate" to="/enter">
          enter
        </NavLink>
      </WrapNav>
    </WrapHeader>
  );
}
