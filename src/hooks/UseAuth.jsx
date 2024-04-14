import { useSelector } from 'react-redux';
import { selectToken, selectUser } from '../redux/selectors';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const isAuthentication = user.name !== null && user.email !== null;
  const isAuthorization = token !== ' ';

  return {
    isAuthentication,
    isAuthorization,
    user,
    token,
  };
};
