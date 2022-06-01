import { useRef, useState, useEffect } from 'react';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
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
        <h2>Sign In</h2>
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
          <span className={styles.line}>
            {/*put router link here*/}
            <a href="#">Sign Up</a>
          </span>
        </p>
      </section>
    </div>
  );
};

export default Login;
