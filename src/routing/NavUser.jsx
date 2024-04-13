import React from 'react';
import { WrapNavUser } from './Navigate.styled';
import { NavLink } from 'react-router-dom';

export default function NavUser() {
  return (
    <WrapNavUser>
      <NavLink className="navigate" to="/create">
        create post
      </NavLink>
      <NavLink className="navigate" to="/profile">
        profile
      </NavLink>
      <NavLink className="navigate" to="/logout">
        log out
      </NavLink>
    </WrapNavUser>
  );
}
