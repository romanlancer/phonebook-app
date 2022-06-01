import Register from 'pages/register-page';
import Login from 'pages/login-page';
import NavBar from 'components/NavBar';
import MainContainer from 'components/Container';
import ContactsPage from 'pages/contacts-page';
import PrivateRoute from 'components/Routes/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'Redux/auth/auth-operations';
import PublicRoute from 'components/Routes/PublicRoute';
import styles from './styles.module.css';

import { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
console.log(ContactsPage);
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <NavBar />
      <main>
        <MainContainer>
          <Routes>
            <Route
              index
              path="/"
              element={<PrivateRoute component={<ContactsPage />} />}
            ></Route>
            <Route
              path="/LogIn"
              element={<PublicRoute component={<Login />} />}
            ></Route>
            <Route
              path="/SignUp"
              element={<PublicRoute component={<Register />} />}
            ></Route>
          </Routes>
        </MainContainer>
      </main>
    </>
  );
}

export default App;
