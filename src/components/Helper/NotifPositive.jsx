import React, { useEffect } from 'react';
import { GiShamrock } from 'react-icons/gi';
import { WrapNotif } from './Helper.styled';

export default function NotifPositive({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);
  return (
    <WrapNotif>
      <GiShamrock className="icon-notif green" />
      <div className="wrap-notif">
        <p className="title-notif">Success</p>
        <p className="text-notif">{message}</p>
      </div>
    </WrapNotif>
  );
}
