import styles from './styles.module.css';

const Button = ({ text, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {text}
  </button>
);

export default Button;
