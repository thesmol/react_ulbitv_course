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

  const [title, setTitle] = useState("");
  const [desctiption, setDesctiption] = useState("");

  const handleNewPost = (event) => {
    event.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      body: desctiption
    };

    setPosts([...posts, newPost]);
    setTitle("");
    setDesctiption("");
  }

  return (
    <div className='App'>
      <form>
        {/* управляемый компонент */}
        <MyInput
          value={title}
          onChange={event => setTitle(event.target.value)}
          type="text"
          placeholder="Заголовок поста"
        />
        <MyInput
          value={desctiption}
          onChange={event => setDesctiption(event.target.value)}
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
