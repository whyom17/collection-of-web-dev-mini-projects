import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom";

const PostsDetailTanstack = () => {

  const {postId} = useParams();

  const {data, isLoading, error, isFetching} = useQuery({
    queryKey: ['posts', postId],
    queryFn: async () => {
        return await fetch(`http://localhost:4000/posts/${postId}`).then(res => res.json());
    }
  })
  console.log(data);
  const {title, content} = data || {};
  console.log(title, content);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <h2>Post: {postId}</h2>
        {error && <div>Error fetching post: {error.message}</div>}
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
  )
}

export default PostsDetailTanstack