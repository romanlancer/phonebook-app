import NavBar from 'components/NavBar';
import MainContainer from 'components/Container';
import LoadingScreen from 'components/LoadingScreen';
import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'Redux/auth/auth-selectors';
import authOperations from 'Redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

const ContactsPage = lazy(() =>
  import('pages/contacts-page' /* webpackChunkName: "contacts-page" */)
);
const Login = lazy(() =>
  import('pages/login-page' /* webpackChunkName: "login-page" */)
);
const Register = lazy(() =>
  import('pages/register-page' /* webpackChunkName: "register-page" */)
);

let progressInterval = null;

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    progressInterval = setInterval(() => {
      setProgress(prev => prev + 20);
    }, 20);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      clearInterval(progressInterval);
    }
    return () => {
      setProgress(0);
    };
  }, [progress]);

  if (isFetchingCurrentUser) return <LoadingScreen />;

  return (
    <>
      <NavBar />
      <main>
        <MainContainer>
          <Suspense
            fallback={<ProgressBar variant="dark" animated now={progress} />}
          >
            <Routes>
              <Route
                path="/"
                element={<PrivateRoute component={<ContactsPage />} />}
              ></Route>
              <Route
                index
                path="LogIn"
                element={<PublicRoute component={<Login />} />}
              ></Route>
              <Route
                path="SignUp"
                element={<PublicRoute component={<Register />} />}
              ></Route>
            </Routes>
          </Suspense>
        </MainContainer>
      </main>
    </>
  );
};

export default App;
