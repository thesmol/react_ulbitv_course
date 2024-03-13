import classes from './MyButton.module.css';
import PropTypes from 'prop-types';

// css module создает уникальное классовое название 

const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={[classes.myBtn, props.className].join(" ")}>
      {children}
    </button>
  )
};

MyButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default MyButton;
