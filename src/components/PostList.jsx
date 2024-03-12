import Post from "./Post";
import PropTypes from 'prop-types';


function PostList({ posts, title, remove }) {
    return (
        <div>
            <h1 style={{
                textAlign: 'center',
                marginTop: '20px'
            }}>{title}</h1>
            {posts.map((post, index) =>
                <Post
                    remove = {remove}
                    number = {index + 1}
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
    title: PropTypes.string,
    remove: PropTypes.func,
};

export default PostList