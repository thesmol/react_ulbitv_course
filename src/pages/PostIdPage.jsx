import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetched";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

function PostIdPage() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  const [fetchComments, isComLoading] = useFetching(async (id) => {
    const response = await PostService.getCommentsById(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Вы открыли пост с ID = {params.id}</h1>
      {!isLoading
        ? <Loader />
        : <div>{post.id}. {post.title}</div>
      }
      <h1>Комментарии</h1>
      {!isComLoading
        ? <Loader />
        : <div>
          {comments.map(comment =>
            <div key={comment.id} style={{ marginTop: "15px" }}>
              <h5>{comment.email}</h5>
              <div>{comment.body}</div>
            </div>
          )}
        </div>
      }

    </div>
  )
}

export default PostIdPage