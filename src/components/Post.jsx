import PropTypes from 'prop-types';
import MyButton from './UI/button/MyButton';

function Post(props) {

    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.number}. {props.post.title}</strong>
                <p style={{ marginTop: '10px' }}>
                    {props.post.body}
                </p>
            </div>
            <div
                className="post__buttons">
                <MyButton
                    onClick={() => props.remove(props.post)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    )
}

Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        body: PropTypes.string
    }).isRequired,
    number: PropTypes.number,
    remove: PropTypes.func,
};

export default Post;
