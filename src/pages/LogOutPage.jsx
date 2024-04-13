import React from 'react';
import UserLogOut from 'components/Users/UserLogOut';
import { WrapLogoutPage } from 'components/Users/User.styled';

export default function LogOutPage() {
  return (
    <WrapLogoutPage>
      <UserLogOut />
    </WrapLogoutPage>
  );
}
