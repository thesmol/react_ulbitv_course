import PropTypes from 'prop-types';

function MySelect({ options, defaultValue, value, onChange }) {
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map((option) =>
                <option
                    key={option.value}
                    value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    )
}

MySelect.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        name: PropTypes.string,
    })),
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default MySelect