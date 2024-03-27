import React from 'react';
import { GiSherlockHolmes } from 'react-icons/gi';
import { WrapEmpty } from './Posts.styled';

export default function EmptyPage() {
  return (
    <WrapEmpty>
      <GiSherlockHolmes className="icon-empty" />
    </WrapEmpty>
  );
}
