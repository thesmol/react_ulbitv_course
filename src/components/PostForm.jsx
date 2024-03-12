import { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import PropTypes from 'prop-types';


function PostForm({ create }) {
    const [post, setPost] = useState({
        id: '',
        title: '',
        body: ''
    });

    const handleNewPost = (event) => {
        event.preventDefault();

        const newPost = {
            ...post,
            id: Date.now(),
        }

        create(newPost);
        setPost({
            id: '',
            title: '',
            body: ''
        });
    }

    return (
        <form>
            {/* управляемый компонент */}
            <MyInput
                value={post.title}
                onChange={event => setPost({ ...post, title: event.target.value })}
                type="text"
                placeholder="Заголовок поста"
            />
            <MyInput
                value={post.body}
                onChange={event => setPost({ ...post, body: event.target.value })}
                type="text"
                placeholder="Описание поста"
            />
            <MyButton onClick={handleNewPost}>Добавить пост</MyButton>
        </form>
    )
}

PostForm.propTypes = {
    create: PropTypes.func,
};

export default PostForm