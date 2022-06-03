import { useRef, useState, useEffect } from 'react';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authOperations from 'Redux/auth/auth-operations';
const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [email, pwd]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password: pwd }));
    //console.log(JSON.stringify(response));

    setEmail('');
    setPwd('');

    //   if (!err?.response) {
    //     setErrMsg('No Server Response');
    //   } else if (err.response?.status === 400) {
    //     setErrMsg('Missing Username or Password');
    //   } else if (err.response?.status === 401) {
    //     setErrMsg('Unauthorized');
    //   } else {
    //     setErrMsg('Login Failed');
    //   }
    //   errRef.current.focus();
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <p
          ref={errRef}
          className={errMsg ? `${styles.errmsg}` : `${styles.offscreen}`}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="email">Email:</label>
          <input
            autoComplete="off"
            type="email"
            id="email"
            ref={userRef}
            onChange={e => setEmail(e.target.value)}
            value={email}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={e => setPwd(e.target.value)}
            value={pwd}
            required
          />
          <button className={styles.submitButton}>Sign In</button>
        </form>
        <p>
          Need an Account?
          <br />
          <NavLink className={styles.line} to={'/SignUp'}>
            Sign Up
          </NavLink>
        </p>
      </section>
    </div>
  );
};

export default Login;
