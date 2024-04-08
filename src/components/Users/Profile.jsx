import React from 'react';
import { WrapProfile } from './User.styled';
import UserAvatar from './UserAvatar';
import UserName from './UserName';

export default function Profile() {
  return (
    <WrapProfile>
      <UserAvatar />
      <UserName />
    </WrapProfile>
  );
}
