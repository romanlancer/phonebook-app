import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import authOperations from 'Redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import authSelectors from 'Redux/auth/auth-selectors';
function Logout() {
  const user = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  return (
    <div className="d-flex justify-content-center align-items-center  ">
      <p className="text-white mb-0 me-3 ">Hello, {user}</p>
      <Button
        onClick={() => dispatch(authOperations.logOut())}
        variant="secondary"
      >
        Logout
      </Button>
    </div>
  );
}

export default Logout;
