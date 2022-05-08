import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { BsJournalBookmark } from 'react-icons/bs';
import Form from '../Form';
import Contacts from '../Contacts';
import Filter from '../Filter';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

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
    </div>
  );
};
export default App;
