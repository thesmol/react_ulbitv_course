import PropTypes from 'prop-types';
import classes from './Loader.module.css';

function Loader() {
    return (
        <div className={classes.loader}>
        </div>
    )
}

Loader.propTypes = {
    remove: PropTypes.func,
};

export default Loader