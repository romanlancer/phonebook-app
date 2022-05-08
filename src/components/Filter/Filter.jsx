import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

class Filter extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <p className={styles.text}>Find contacts by name</p>
        <input name="filter" onChange={e => this.props.onInput(e)} />
      </div>
    );
  }
}

Filter.propTypes = {
  onInput: PropTypes.func.isRequired,
};

export default Filter;
