import Post from "./Post";
import PropTypes from 'prop-types';


function PostList({ posts, title }) {
    return (
        <div>
            <h1 style={{
                textAlign: 'center',
                marginTop: '20px'
            }}>{title}</h1>
            {posts.map(post =>
                <Post
                    key={post.id}
                    post={post}
                />
            )}
        </div>
    )
}

PostList.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            body: PropTypes.string
        })
    ).isRequired,
    title: PropTypes.string
};

export default PostList