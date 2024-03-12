import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
import PropTypes from 'prop-types';

function PostFilter({filter, setFilter}) {
    return (
        <div style={{ display: 'flex' }}>
            <MyInput
                style={{ marginRight: '30px' }}
                value={filter.query}
                onChange={event => setFilter({...filter, query: event.target.value})}
                type="text"
                placeholder="Поиск"
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка по"
                options={[
                    { value: 'title', name: 'По заголовку' },
                    { value: 'body', name: 'По описанию' },
                ]}
            />
        </div>
    )
}

PostFilter.propTypes = {
    filter: PropTypes.object,
    setFilter: PropTypes.func,
};


export default PostFilter