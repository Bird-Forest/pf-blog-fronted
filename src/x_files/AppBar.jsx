import React, { useState } from 'react';
import { WrapHeader } from '../pages/Page.styled';
import { NavLink } from 'react-router-dom';
import { ImgAvatar, NameUser, WrapNav } from './Navigate.styled';
import { GiSpy } from 'react-icons/gi';
import { createPortal } from 'react-dom';
import NavUser from './NavUser';

export default function AppBar() {
  const [isShow, setIsShow] = useState(false);
  const user = {
    name: 'Tomas',
    avatar: null,
  };
  const avatar = user.avatar;
  const name = user.name;
  return (
    <WrapHeader>
      <WrapNav>
        <NavLink className="navigate" to="/">
          posts
        </NavLink>
        <NavLink className="navigate" to="/enter">
          enter
        </NavLink>
        <NavLink className="navigate" to="/user-posts">
          my posts
        </NavLink>
        <ImgAvatar>
          {avatar === null ? (
            <GiSpy className="icon-avatar" />
          ) : (
            <img src={avatar} alt="avatar" className="img-avatar" />
          )}
        </ImgAvatar>
        <NameUser type="button" onClick={() => setIsShow(!isShow)}>
          {name}
        </NameUser>
        {isShow && createPortal(<NavUser />, document.body)}
      </WrapNav>
    </WrapHeader>
  );
}
