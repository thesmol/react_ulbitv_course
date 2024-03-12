import PropTypes from 'prop-types';

function Post(props) {
    
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__buttons">
                <button>Удалить</button>
            </div>
        </div>
    )
}

Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        body: PropTypes.string
    }).isRequired
};

export default Post;
