import styles from './styles.module.css';
import { TiUserDeleteOutline } from 'react-icons/ti';
import { useSelector } from 'react-redux';
import { getFilter } from 'Redux/contactsSlice';
import { SpinnerInfinity } from 'spinners-react';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'Redux/contactsApi';

const Contacts = () => {
  const { data, isFetching } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const filter = useSelector(getFilter);

  const filteredContacts = () => {
    return data.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };
  let rendered = filter === '' ? data : filteredContacts();

  return (
    <>
      <ul className={styles.contactsList}>
        {data &&
          rendered.map(({ name, id, number }) => (
            <li className={styles.listItem} key={id} id={id}>
              <span className={styles.contactName}>{name}: </span>
              <span className={styles.phoneNumber}>{number}</span>
              <button
                type="button"
                className={styles.buttons}
                onClick={() => deleteContact(id)}
                aria-label="delete contact button"
              >
                <TiUserDeleteOutline size={20} />
              </button>
            </li>
          ))}
      </ul>
      {data && data.length === 0 && (
        <p style={{ textDecoration: 'underline' }}>no contacts available</p>
      )}
      {isFetching && (
        <SpinnerInfinity style={{ marginTop: '20px', color: 'white' }} />
      )}
    </>
  );
};

export default Contacts;
