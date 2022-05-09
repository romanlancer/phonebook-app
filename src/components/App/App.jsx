import { useState } from 'react';
import useLocalStorage from 'Hooks/useLocalStorage';
import styles from './styles.module.css';
import { BsJournalBookmark } from 'react-icons/bs';
import Form from '../Form';
import Contacts from '../Contacts';
import Filter from '../Filter';

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addContact = contact => {
    setContacts([...contacts, contact]);
  };

  const onFilterInput = value => {
    setFilter(value);
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = e => {
    const elemToRemove = e.currentTarget.parentNode.id;
    setContacts(contacts.filter(item => item.id !== elemToRemove));
  };

  return (
    <div className={styles.wrapper}>
      <h1>
        Phonebook <BsJournalBookmark size={35} className={styles.icon} />
      </h1>
      <Form addContact={addContact} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter onFilterInput={onFilterInput} />
      <Contacts
        contacts={contacts}
        filter={filter}
        filteredContacts={filteredContacts}
        deleteContact={deleteContact}
      />
      {contacts.length === 0 && (
        <p style={{ textDecoration: 'underline' }}>no contacts available</p>
      )}
    </div>
  );
};

export default App;
