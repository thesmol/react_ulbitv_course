// import Button from '@mui/material/Button';
import { useMemo, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'lorem ipsum' },
    { id: 2, title: 'BavaScript 2', body: 'Korem ipsum' },
    { id: 3, title: 'CavaScript 3', body: 'Porem ipsum' },
    { id: 4, title: 'LavaScript 4', body: 'Morem ipsum' },
  ]);

  const [filter, setFilter] = useState({
    sort: '',
    query: ''
  });

  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title
      .toLowerCase()
      .includes(filter.query.toLowerCase())
    )
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id != post.id))
  }

  return (
    <div className='App'>
      <MyButton 
      style = {{ marginTop: '20px'}}
      onClick = {() => setModal(true)}
      >
        Создать пост
      </MyButton>
      <MyModal
        visible = {modal}
        setVisible = {setModal}
      >
        <PostForm create={createPost} />
      </MyModal>


      <hr style={{ margin: '15px' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />

      <PostList
        posts={sortedAndSearchedPosts}
        remove={removePost}
        title="Список постов"
      />

    </div>
  )
}

export default App
