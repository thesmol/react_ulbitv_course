// import Button from '@mui/material/Button';
import { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'lorem ipsum' },
    { id: 2, title: 'JavaScript 2', body: 'lorem ipsum' },
    { id: 3, title: 'JavaScript 3', body: 'lorem ipsum' },
    { id: 4, title: 'JavaScript 4', body: 'lorem ipsum' },
  ]);

  const [post, setPost] = useState({
    id: '',
    title: '',
    body: ''
  });

  const handleNewPost = (event) => {
    event.preventDefault();

    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({
      id: '',
      title: '',
      body: ''
    })
  }

  return (
    <div className='App'>
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

      <PostList
        posts={posts}
        title="Списков постов 1"
      />
    </div>
  )
}

export default App
