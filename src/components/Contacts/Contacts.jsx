import styles from './styles.module.css';
import { Link, useLocation } from 'react-router-dom';
import { TiUserDeleteOutline } from 'react-icons/ti';
import { GrDocumentUpdate } from 'react-icons/gr';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getFilter } from 'Redux/contacts/contactsSlice';
import { SpinnerInfinity } from 'spinners-react';
import deleteSound from 'assets/delete-sound.mp3';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'Redux/contacts/contactsApi';
import { useEffect } from 'react';

const Contacts = () => {
  const audio = new Audio(deleteSound);
  const { data, isFetching, refetch } = useGetContactsQuery();
  const location = useLocation();
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
        <TransitionGroup component={null}>
          {data &&
            rendered.map(({ name, id, number }) => (
              <CSSTransition key={id} timeout={500} classNames="item">
                <li className={styles.listItem} key={id} id={id}>
                  <span className={styles.contactName}>{name}: </span>
                  <span className={styles.phoneNumber}>{number}</span>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip id="button-tooltip-2">Click to update</Tooltip>
                    }
                  >
                    <Link to={`update/${id}`} state={{ from: location }}>
                      <button
                        type="button"
                        className={styles.buttons}
                        aria-label="link to update contact page"
                      >
                        <GrDocumentUpdate size={20} />
                      </button>
                    </Link>
                  </OverlayTrigger>
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
              </CSSTransition>
            ))}
        </TransitionGroup>
      </ul>
      {data && data.length === 0 && (
        <p style={{ textDecoration: 'underline' }}>no contacts available</p>
      )}
      {isFetching && <SpinnerInfinity style={{ color: 'white' }} />}
    </>
  );
};

export default Contacts;
