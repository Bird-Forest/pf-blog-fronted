import React from 'react';
import { WrapLogOut } from './User.styled';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOutUser } from '../../redux/servise';

export default function UserLogOut() {
  const dispatch = useDispatch();
  const onDeleteUser = () => {
    dispatch(logOutUser());
  };
  return (
    <WrapLogOut>
      <h2 className="title-out">
        Are you sure? Do you want to leave our community?
      </h2>
      <p className="text-out">
        Within 6 months you will have the opportunity to restore your account.
      </p>
      <p className="text-out"> After this period, all data will be deleted.</p>

      <button type="button" onClick={onDeleteUser} className="btn-out">
        <Link to="/" className="link-out">
          delete
        </Link>
      </button>
    </WrapLogOut>
  );
}
