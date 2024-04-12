// import { useState } from 'react';
import { redirect } from 'react-router-dom';
import { useGetUserQuery } from '../redux/UserOldSlice';
import { useState } from 'react';

export default function useLocalStorage() {
  const [userSL, setUserSL] = useState({});
  const id = userSL.id;
  const { data } = useGetUserQuery(id);

  try {
    setUserSL(JSON.parse(localStorage.getItem('user')));
  } catch (error) {
    console.error(error.message);
    if (!userSL) {
      return redirect('/enter');
    }
  }
  return data;
}
