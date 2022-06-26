import styles from './styles.module.css';
import { BsJournalBookmark } from 'react-icons/bs';
import { toast } from 'react-toastify';
import errorSound from 'assets/error-sound.mp3';
import Player from 'components/Player/Player';
import Form from 'components/Form';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';
import { useSelector } from 'react-redux';
import authSelectors from 'Redux/auth/auth-selectors';
import authOperations from 'Redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import LoadingScreen from 'components/LoadingScreen';
import { MdError } from 'react-icons/md';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
      .unwrap()
      .catch(() => {
        toast.error('Sorry, your authorization token expired, please relogin', {
          icon: () => (
            <>
              <MdError size={24} color="var(--toastify-color-error)" />
              <Player url={errorSound} />
            </>
          ),
        });
        <Navigate to="/LogIn" />;
      });
  }, [dispatch]);

  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );
  if (isFetchingCurrentUser) return <LoadingScreen />;

  return (
    <div className={styles.wrapper}>
      <section>
        <h1>
          Phonebook <BsJournalBookmark size={35} className={styles.icon} />
        </h1>
        <Form />
      </section>
      <section>
        <h2>Contacts</h2>
        <Filter />
        <Contacts />
      </section>
    </div>
  );
};

export default ContactsPage;
