import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Filter = ({ onFilterInput }) => {
  const [filter, setFilter] = useState('');
  useEffect(() => {
    onFilterInput(filter);
  }, [filter, onFilterInput]);
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Find contacts by name</p>
      <input name="filter" onChange={e => setFilter(e.target.value)} />
    </div>
  );
};

Filter.propTypes = {
  onFilterInput: PropTypes.func.isRequired,
};

export default Filter;
