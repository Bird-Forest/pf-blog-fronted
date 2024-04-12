import React from 'react';
import { WrapRender } from './Page.styled';
import UserLogOut from 'components/Users/UserLogOut';
import { WrapLogoutPage } from 'components/Users/User.styled';

export default function LogOutPage() {
  return (
    <WrapRender>
      <WrapLogoutPage>
        <UserLogOut />
      </WrapLogoutPage>
    </WrapRender>
  );
}
