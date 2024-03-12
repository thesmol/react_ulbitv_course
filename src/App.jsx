// import Button from '@mui/material/Button';
import { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'lorem ipsum' },
    { id: 2, title: 'BavaScript 2', body: 'Korem ipsum' },
    { id: 3, title: 'CavaScript 3', body: 'Porem ipsum' },
    { id: 4, title: 'LavaScript 4', body: 'Morem ipsum' },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id != post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  }

  return (
    <div className='App'>
      <PostForm
        create={createPost}
      />

      <hr style={{margin: '15px'}} />
      <MySelect
        value={selectedSort}
        onChange={sortPosts} 
        defaultValue="Сортировка по"
        options = {[
          {value: 'title', name: 'По заголовку'},
          {value: 'body', name: 'По описанию'},
        ]}
      />

      {/*Условная отрисовка */}
      {posts.length !== 0
        ?
        <PostList
          posts={posts}
          remove={removePost}
          title="Списков постов 1"
        />
        :
        <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Постов не найдено</h2>
      }

    </div>
  )
}

export default App
