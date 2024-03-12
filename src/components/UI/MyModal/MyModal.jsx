import classes from './MyModal.module.css';
import PropTypes from 'prop-types';


function MyModal({ children, visible, setVisible }) {
  const rootClasses = [classes.myModal];
  const rootContentClasses = [classes.myModalContent];

  if (visible) {
    rootClasses.push(classes.active);
    rootContentClasses.push(classes.active);
  }

  return (
    <div
      className={rootClasses.join(" ")}
      onClick={() => setVisible(false)}
    >
      <div
        className={rootContentClasses.join(" ")}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}


MyModal.propTypes = {
  children: PropTypes.any,
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
};

export default MyModal