import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import authSelectors from 'Redux/auth/auth-selectors';

const PublicRoute = ({ component }) => {
  const auth = useSelector(authSelectors.getIsLoggedIn);

  return auth ? <Navigate to="/" /> : component;
};

PublicRoute.propTypes = {
  component: PropTypes.element.isRequired,
};

export default PublicRoute;
