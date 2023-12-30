/* eslint-disable react/prop-types */
import classes from './Button.module.css';

function Button({ children, padding = '10px', width = '100%', type }) {
  return (
    <button
      className={classes.button}
      style={{ padding: padding, width: width }}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
