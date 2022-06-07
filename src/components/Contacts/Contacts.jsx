import styles from './styles.module.css';
import { TiUserDeleteOutline } from 'react-icons/ti';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getFilter } from 'Redux/contacts/contactsSlice';
import { SpinnerInfinity } from 'spinners-react';
import deleteSound from 'assets/delete-sound.mp3';

import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'Redux/contacts/contactsApi';
import { useEffect } from 'react';

const Contacts = () => {
  const audio = new Audio(deleteSound);
  const { data, isFetching, refetch } = useGetContactsQuery();

  const [deleteContact] = useDeleteContactMutation();

  const filter = useSelector(getFilter);

  const filteredContacts = () => {
    return data.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  useEffect(() => {
    refetch();
  }, [refetch]);
  let rendered = filter === '' ? data : filteredContacts();

  const startPlaying = () => {
    audio.play();
  };

  return (
    <>
      <ul className={styles.contactsList}>
        {data &&
          rendered.map(({ name, id, number }) => (
            <li className={styles.listItem} key={id} id={id}>
              <span className={styles.contactName}>{name}: </span>
              <span className={styles.phoneNumber}>{number}</span>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="button-tooltip-2">Click to delete</Tooltip>
                }
              >
                <button
                  type="button"
                  className={styles.buttons}
                  onClick={() => {
                    deleteContact(id);
                    startPlaying();
                  }}
                  aria-label="delete contact button"
                >
                  <TiUserDeleteOutline size={20} />
                </button>
              </OverlayTrigger>
            </li>
          ))}
      </ul>
      {data && data.length === 0 && (
        <p style={{ textDecoration: 'underline' }}>no contacts available</p>
      )}
      {isFetching && <SpinnerInfinity style={{ color: 'white' }} />}
    </>
  );
};

export default Contacts;
