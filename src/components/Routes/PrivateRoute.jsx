import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import authSelectors from 'Redux/auth/auth-selectors';

const PrivateRoute = ({ component }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  console.log(isLoggedIn);
  return isLoggedIn ? component : <Navigate to="/LogIn" />;
};

export default PrivateRoute;
