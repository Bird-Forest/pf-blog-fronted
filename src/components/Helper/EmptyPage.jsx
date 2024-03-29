import React from 'react';
import { GiSherlockHolmes } from 'react-icons/gi';
import { WrapEmpty } from './Helper.styled';

export default function EmptyPage() {
  return (
    <WrapEmpty>
      <h2 className="empty-title">There's nothing here yet</h2>
      <GiSherlockHolmes className="icon-empty" />
    </WrapEmpty>
  );
}
