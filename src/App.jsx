// import Button from '@mui/material/Button';
import { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePost } from "./hooks/usePosts";

function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({
    sort: '',
    query: ''
  });

  const [modal, setModal] = useState(false);

  const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query);

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
