import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import errorSound from 'assets/error-sound.mp3';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import addSound from 'assets/add-sound.mp3';
import Player from 'components/Player';
import { TiWarning } from 'react-icons/ti';
import { GrUpdate } from 'react-icons/gr';
import styles from './styles.module.css';
import {
  useUpdateContactMutation,
  useGetContactsQuery,
} from 'Redux/contacts/contactsApi';

const UpdatePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { contactId } = useParams();
  const audio = new Audio(addSound);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [url, setUrl] = useState(location.state.from);
  const [isDisabled, setIsDisabled] = useState(true);
  const [updateContact] = useUpdateContactMutation();
  const { data } = useGetContactsQuery();

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

    const contactFinder = data.find(
      contact => contact.name === name || contact.number === number
    );

    if (contactFinder) {
      toast.warn(`${name} ${number} is already in contacts.`, {
        icon: () => (
          <>
            <TiWarning size={30} color="var(--toastify-color-warning)" />
            <Player url={errorSound} />
          </>
        ),
      });
      audio.pause();
      return;
    }
    updateContact({ contactId, name, number });
    setUrl(null);
    navigate(url);
    reset();
  };

  const startPlaying = () => {
    audio.play();
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Update contact</h1>
        <label className={styles.label}>
          Name:
          <input
            className={styles.input}
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
        <label className={styles.label}>
          Number:
          <input
            className={styles.input}
            type="tel"
            placeholder="+380 33 333 3333"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            name="number"
            onChange={e => setNumber(e.currentTarget.value)}
            required
          />
        </label>

        <button
          onClick={startPlaying}
          className={styles.submitButton}
          type="submit"
          disabled={isDisabled}
          aria-label="update contact button"
        >
          update contact
          <GrUpdate size={18} className={styles.icon} />
        </button>
      </form>
    </div>
  );
};

export default UpdatePage;
