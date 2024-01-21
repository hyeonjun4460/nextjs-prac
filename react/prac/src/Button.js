import PropTypes from 'prop-types';
import styles from './Button.module.css';
export function Button({ onClick, text }) {
  return (
    <button onClick={onClick} className={styles.btn}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
