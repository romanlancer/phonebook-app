import styles from './styles.module.css';
import { BsJournalBookmark } from 'react-icons/bs';
import Form from 'components/Form';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';
import { useSelector } from 'react-redux';
import authSelectors from 'Redux/auth/auth-selectors';
import authOperations from 'Redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import LoadingScreen from 'components/LoadingScreen';
import { useEffect } from 'react';
const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
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
