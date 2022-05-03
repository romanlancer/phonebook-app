import { Component } from 'react';
import styles from './styles.module.css';
import { BsJournalBookmark } from 'react-icons/bs';
import Form from '../Form';
import Contacts from '../Contacts';
import Filter from '../Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  addContact = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  onFilterInput = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filteredContacts = () => {
    return [...this.state.contacts].filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLocaleLowerCase())
    );
  };

  deleteContact = e => {
    const elemToRemove = e.currentTarget.parentNode.id;
    this.setState({
      contacts: this.state.contacts.filter(item => item.id !== elemToRemove),
    });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <h1>
          Phonebook <BsJournalBookmark size={35} className={styles.icon} />
        </h1>

        <Form addContact={this.addContact} contacts={this.state.contacts} />
        <h2>Contacts</h2>
        <Filter onInput={this.onFilterInput} />
        <Contacts
          contacts={this.state.contacts}
          filter={this.state.filter}
          filteredContacts={this.filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
