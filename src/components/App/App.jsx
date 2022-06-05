import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import { ScrollToTop } from 'react-to-top';
import LoadingScreen from 'components/LoadingScreen';
import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';
import { Container, ProgressBar } from 'react-bootstrap';
import { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'Redux/auth/auth-selectors';
import authOperations from 'Redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

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
  }, [progress]);

  if (isFetchingCurrentUser) return <LoadingScreen />;

  return (
    <>
      <NavBar />
      <main>
        <Container>
          <ToastContainer
            position="bottom-right"
            theme="dark"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            transition={Flip}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
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
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </Container>
        <ScrollToTop
          style={{ bottom: '50px' }}
          bgColor="var(--bs-dark-rgba)"
          size={60}
          strokeWidth={3}
          symbolSize={25}
          symbol="⇧"
        />
      </main>

      <Footer />
    </>
  );
};

export default App;
