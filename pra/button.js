import PropTypes from "prop-types";
import styles from "./button.module.css";

function Button({ text }) {
  return <button className={styles.title}>{text}</button>;
}

Button.prototype = {
  text: PropTypes.string,
};
export default Button;
