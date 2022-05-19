import styles from './styles.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter, getFilter } from 'Redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Find contacts by name</p>
      <input
        name="filter"
        value={filter}
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
      />
    </div>
  );
};

export default Filter;
