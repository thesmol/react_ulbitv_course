// import Button from '@mui/material/Button';
import { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'lorem ipsum' },
    { id: 2, title: 'JavaScript 2', body: 'lorem ipsum' },
    { id: 3, title: 'JavaScript 3', body: 'lorem ipsum' },
    { id: 4, title: 'JavaScript 4', body: 'lorem ipsum' },
  ]);

  const [posts2, setPosts2] = useState([
    { id: 1, title: 'React', body: 'lorem ipsum' },
    { id: 2, title: 'React 2', body: 'lorem ipsum' },
    { id: 3, title: 'React 3', body: 'lorem ipsum' },
    { id: 4, title: 'React 4', body: 'lorem ipsum' },
  ]);

  return (
    <div className='App'>
        {/* Неуправляемый (неконтролируемый) компонент */}
        <MyInput
          ref={bobyInputRef}
          type="text"
          placeholder="Описание поста"
        />
        <MyButton onClick={handleNewPost}>Добавить пост</MyButton>
      </form>
      <PostList
        posts={posts}
        title="Списков постов 1"
      />
      <PostList
        posts={posts2}
        title="Списков постов 2"
      />
    </div>
  )
}

export default App
