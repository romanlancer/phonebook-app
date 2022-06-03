import styles from './styles.module.css';
import { BsJournalBookmark } from 'react-icons/bs';
import Form from 'components/Form';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';

const ContactsPage = () => {
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
