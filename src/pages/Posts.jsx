import { useEffect, useState } from "react";
import "../styles/App.css";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePost } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetched";
import { getPageCount } from "../utils/pages";
import MyPagination from "../components/UI/pagination/MyPagination";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({
    sort: '',
    query: ''
  });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  // подгрузит посты при заходе в приложение
  useEffect(() => {
    fetchPosts(limit, page);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id != post.id))
  }

  const changePage = (number) => {
    if (number !== page) {
      setPage(number);
      fetchPosts(limit, number);
    }
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
      {postError &&
        <div style={{
          display: "flex",
          flexDirection: 'column',
          alignItems: "center",
          border: '1px solid red',
          borderRadius: '6px',
          padding: '15px',
          marginTop: '20px',
          color: 'red'
        }}>
          <h1>Произошла ошибка</h1>
          <p>${postError}</p>
        </div>
      }
      {!isPostsLoading
        ?
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '50px'
        }}>
          <Loader />
        </div>
        :
        <PostList
          posts={sortedAndSearchedPosts}
          remove={removePost}
          title="Список постов"
        />
      }

      <MyPagination 
        totalPages = {totalPages}
        page = {page}
        changePage = {changePage}
      />

    </div>
  )
}

export default Posts
