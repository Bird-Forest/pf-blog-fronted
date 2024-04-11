import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import { WrapHeader } from '../pages/Page.styled';
import { NavLink } from 'react-router-dom';
import { ImgAvatar, NameUser, WrapNav } from './Navigate.styled';
import { GiSpy } from 'react-icons/gi';
import { createPortal } from 'react-dom';
import NavUser from './NavUser';
// import { useGetUserQuery } from '../redux/UserSlice';
// import useLocalStorage from '../hook/useLocalStorage';
// import useLocalStorage from '../hook/useLocalStorage';

export default function AppBar() {
  const [isShow, setIsShow] = useState(false);

  // const user = useLocalStorage();
  // console.log(user);
  // const [userSL, setUserSL] = useState();
  // try {

  //   setUserSL(JSON.parse(localStorage.getItem('user')));
  // } catch (error) {
  //   console.error(error.message);
  // }
  // const userSL = JSON.parse(window.localStorage.getItem('user'));

  // const userLS = JSON.parse(localStorage.getItem('user'));
  // const id = userSL.id;
  // const { data: user } = useGetUserQuery(id);
  // setUser(data);

  // const pars = JSON.parse(userLS);
  // const id = pars.id;
  // try {
  //   const pars = JSON.parse(userLS);
  //   const id = pars.id;
  //   console.log(id);
  //   getUser(id);
  //   // return data;
  // } catch (error) {
  //   console.log(error);
  //   // console.log(error.message); // "Unexpected token u in JSON at position 1"
  // }

  // const user = {
  //   name: 'Tomas',
  //   avatar: null,
  // };

  // const userPars = JSON.parse(userLS);
  // console.log(userPars);
  const userD = {
    avatar: '',
    name: 'Guest',
  };

  const avatar = userD.avatar;
  console.log(avatar);
  const name = userD.name;
  console.log(name);
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
          {avatar === '' ? (
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
