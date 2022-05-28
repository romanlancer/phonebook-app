import { useState, useEffect } from 'react';

import { TiUserAddOutline } from 'react-icons/ti';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import styles from './styles.module.css';
import {
  useCreateContactMutation,
  useGetContactsQuery,
} from 'Redux/contacts/contactsApi';

const Form = () => {
  const [createContact] = useCreateContactMutation();
  const { data } = useGetContactsQuery();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const reset = () => {
    setName('');
    setNumber('');
  };

  useEffect(() => {
    name.length > 0 && number.length > 0
      ? setIsDisabled(false)
      : setIsDisabled(true);
  }, [name, number]);

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name,
      number,
    };

    const contactFinder = data.find(
      contact => contact.name === name || contact.number === number
    );

    if (contactFinder) {
      Notify.warning(`${name} ${number} is already in contacts.`);
      return;
    }

    createContact(contact);

    reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          placeholder="john doe"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={e => setName(e.currentTarget.value)}
          required
        />
      </label>
      <label>
        Number:
        <input
          type="tel"
          placeholder="+380 33 333 3333"
          className={styles.phoneInputCountry}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          name="number"
          onChange={e => setNumber(e.currentTarget.value)}
          required
        />
      </label>

      <button
        className={styles.submitButton}
        type="submit"
        disabled={isDisabled}
      >
        add contact
        <TiUserAddOutline size={20} className={styles.icon} />
      </button>
    </form>
  );
};

export default Form;
