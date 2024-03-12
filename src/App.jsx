// import Button from '@mui/material/Button';
import { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'lorem ipsum' },
    { id: 2, title: 'JavaScript 2', body: 'lorem ipsum' },
    { id: 3, title: 'JavaScript 3', body: 'lorem ipsum' },
    { id: 4, title: 'JavaScript 4', body: 'lorem ipsum' },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id != post.id))
  }

  return (
    <div className='App'>
      <PostForm
        create={createPost}
      />

      <PostList
        posts={posts}
        remove={removePost}
        title="Списков постов 1"
      />
    </div>
  )
}

export default App
