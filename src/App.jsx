// import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePost } from "./hooks/usePosts";
import PostService from "./API/PostService";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({
    sort: '',
    query: ''
  });
  const [modal, setModal] = useState(false);
  const [isPostsLoading, setIsPostsLoading] = useState(false);

  const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query);

  // подгрузит посты при заходе в приложение
  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setIsPostsLoading(true);
    setTimeout(async () => {
      const posts = await PostService.getAll();
      setPosts(posts);
      setIsPostsLoading(false);
    }, 1000);
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id != post.id))
  }

  return (
    <div className='App'>
      <div style={{ marginTop: '20px' }}>
        <MyButton
          onClick={() => setModal(true)}
        >
          Создать пост
        </MyButton>
        <MyButton
          style={{ marginLeft: '20px' }}
          onClick={fetchPosts}
        >
          GET POST
        </MyButton>
      </div>


      <MyModal
        visible={modal}
        setVisible={setModal}
      >
        <PostForm create={createPost} />
      </MyModal>


      <hr style={{ margin: '15px' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {isPostsLoading
        ? <h1>Идет загрузка...</h1>
        : <PostList
          posts={sortedAndSearchedPosts}
          remove={removePost}
          title="Список постов"
        />

      }


    </div>
  )
}

export default App
