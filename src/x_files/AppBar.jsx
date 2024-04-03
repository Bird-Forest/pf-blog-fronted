import React from 'react';
import { WrapHeader } from '../pages/Page.styled';
import { NavLink } from 'react-router-dom';
import { WrapNav } from './Navigate.styled';

export default function AppBar() {
  return (
    <WrapHeader>
      <WrapNav>
        <NavLink className="navigate" to="/">
          Posts
        </NavLink>
        <NavLink className="navigate" to="/create">
          Create
        </NavLink>
        <NavLink className="navigate" to="/user-posts">
          My posts
        </NavLink>
      </WrapNav>
    </WrapHeader>
  );
}
