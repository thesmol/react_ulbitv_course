import { TransitionGroup, CSSTransition } from "react-transition-group";
import Post from "./Post";
import PropTypes from 'prop-types';


function PostList({ posts, title, remove }) {
    if (!posts.length) {
        return <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Постов не найдено</h2>
    }

    return (
        <div>
            <h1 style={{
                textAlign: 'center',
                marginTop: '20px'
            }}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        timeout={300}
                        classNames="post"
                        key={post.id}
                    >
                        <Post
                            remove={remove}
                            number={index + 1}
                            post={post}
                        />
                    </CSSTransition>

                )}
            </TransitionGroup>

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