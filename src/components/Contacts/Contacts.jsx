import styles from './styles.module.css';
import { TiUserDeleteOutline } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getFilter, getItems } from 'Redux/contactsSlice';

const Contacts = () => {
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  let rendered = filter === '' ? contacts : filteredContacts();
  return (
    <>
      <ul className={styles.contactsList}>
        {rendered.map(({ name, id, number }) => (
          <li className={styles.listItem} key={id} id={id}>
            <span className={styles.contactName}>{name}: </span>
            <span className={styles.phoneNumber}>{number}</span>

            <button
              type="button"
              className={styles.buttons}
              onClick={e =>
                dispatch(deleteContact(e.currentTarget.parentNode.id))
              }
              aria-label="delete contact button"
            >
              <TiUserDeleteOutline size={20} />
            </button>
          </li>
        ))}
      </ul>
      {contacts.length === 0 && (
        <p style={{ textDecoration: 'underline' }}>no contacts available</p>
      )}
    </>
  );
};

export default Contacts;
