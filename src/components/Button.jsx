import "../styles/Button.css";
import classNames from "classnames";

function Button({ children, className, type, variant, ...rest }) {
  const typeClass = type && type;
  const variantClass = variant && variant;

  const classes = classNames(typeClass, variantClass, className);

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

export default Button;
