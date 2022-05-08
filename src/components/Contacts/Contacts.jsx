import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { TiUserDeleteOutline } from 'react-icons/ti';
const Contacts = ({ contacts, filter, filteredContacts, deleteContact }) => {
  let rendered = filter === '' ? contacts : filteredContacts();
  return (
    <ul className={styles.contactsList}>
      {rendered.map(({ name, id, number }) => (
        <li className={styles.listItem} key={id} id={id}>
          <span className={styles.contactName}>{name}: </span>
          <span className={styles.phoneNumber}>{number}</span>

          <button
            className={styles.buttons}
            onClick={e => deleteContact(e)}
            aria-label="delete contact button"
          >
            <TiUserDeleteOutline size={20} />
          </button>
        </li>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  filteredContacts: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default Contacts;
