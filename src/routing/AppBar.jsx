import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { WrapHeader } from '../pages/Page.styled';
import { NavLink } from 'react-router-dom';
import { ImgAvatar, NameUser, WrapLogo, WrapNav } from './Navigate.styled';
import { GiSpy } from 'react-icons/gi';
import { createPortal } from 'react-dom';
import NavUser from './NavUser';
import { selectUser } from '../redux/selectors';
import { useAuth } from '../hooks/UseAuth';

export default function AppBar() {
  const [isShow, setIsShow] = useState(false);
  const user = useSelector(selectUser);
  const { isAuthorization } = useAuth();

  const avatar = user.avatar;
  const name = user.name;
  return (
    <WrapHeader>
      <WrapNav>
        <NavLink className="navigate" to="/">
          posts
        </NavLink>
        {isAuthorization ? (
          <WrapLogo>
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
              {name === null ? 'Guest' : name}
            </NameUser>
            {isShow && createPortal(<NavUser />, document.body)}
          </WrapLogo>
        ) : (
          <NavLink className="navigate" to="/enter">
            enter
          </NavLink>
        )}
      </WrapNav>
    </WrapHeader>
  );
}
