// import Button from '@mui/material/Button';
import { useMemo, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'lorem ipsum' },
    { id: 2, title: 'BavaScript 2', body: 'Korem ipsum' },
    { id: 3, title: 'CavaScript 3', body: 'Porem ipsum' },
    { id: 4, title: 'LavaScript 4', body: 'Morem ipsum' },
  ]);

  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const sortedPosts = useMemo(() => {
    console.log('ОТРАБОТАЛА функция сортировки');
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    )
  }, [searchQuery, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id != post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }

  return (
    <div className='App'>
      <PostForm
        create={createPost}
      />

      <hr style={{ margin: '15px' }} />
      <div style={{ display: 'flex' }}>
        <MyInput
          style={{ marginRight: '30px' }}
          value={searchQuery}
          onChange={event => setSearchQuery(event.target.value)}
          type="text"
          placeholder="Поиск"
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка по"
          options={[
            { value: 'title', name: 'По заголовку' },
            { value: 'body', name: 'По описанию' },
          ]}
        />
      </div>


      {/*Условная отрисовка */}
      {sortedAndSearchedPosts.length !== 0
        ?
        <PostList
          posts={sortedAndSearchedPosts}
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
