import styles from './styles.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter, getFilter } from 'Redux/contacts/contactsSlice';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Find contacts by name</p>
      <OverlayTrigger
        placement="bottom"
        overlay={
          <Tooltip id="button-tooltip-2">Type here to find a contact</Tooltip>
        }
      >
        <input
          name="filter"
          value={filter}
          onChange={e => dispatch(setFilter(e.currentTarget.value))}
        />
      </OverlayTrigger>
    </div>
  );
};

export default Filter;
