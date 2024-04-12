import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { WrapHeader } from '../pages/Page.styled';
import { NavLink } from 'react-router-dom';
import { ImgAvatar, NameUser, WrapNav } from './Navigate.styled';
import { GiSpy } from 'react-icons/gi';
import { createPortal } from 'react-dom';
import NavUser from './NavUser';
import { selectUser } from '../redux/selectors';

export default function AppBar() {
  const [isShow, setIsShow] = useState(false);
  const user = useSelector(selectUser);

  // const userD = {
  //   avatar: '',
  //   name: 'Guest',
  // };

  // const avatar = userD.avatar;
  // console.log(avatar);
  // const name = userD.name;
  // console.log(name);
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
          {user.avatar === ' ' ? (
            <GiSpy className="icon-avatar" />
          ) : (
            <img src={user.avatar} alt="avatar" className="img-avatar" />
          )}
        </ImgAvatar>
        <NameUser type="button" onClick={() => setIsShow(!isShow)}>
          {user.name}
        </NameUser>
        {isShow && createPortal(<NavUser />, document.body)}
      </WrapNav>
    </WrapHeader>
  );
}
