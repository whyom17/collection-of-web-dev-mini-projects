import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Link, Links } from 'react-router-dom';

const PostsTanstack = () => {
  
    const {data, isLoading, error, isFetching, refetch} = useQuery({
        queryKey: ['posts'],   // Unique key for the query
        queryFn: async () => {  // Function to fetch data; always returns a promise
            return await axios.get("http://localhost:4000/posts");
        },
        // staleTime: 30000,     // Data is considered fresh for 30 seconds
        // refetchInterval: 10000,   // Refetch data every 10 seconds
        // refetchIntervalInBackground: true, // Continue refetching even when the window is not focused
        enabled: false,          // Enable or disable the query
    });

    // when the data is set stale, isFetching will be 'true' while refetching 
    // that means
    
    if (isLoading) {
      return <div>Loading...</div>;
    }

  return (
    <div>
        <h2>Posts (Tanstack Query)</h2>
        <button onClick={() => refetch()}>
            Fetch Data
        </button>
        {error && <div>Error fetching posts: {error.message}</div>}
        <ul>
            {data?.map((post) => (
                <Link to={`/posts-tanstack/${post.id}`} key={post.id} style={{ color: "inherit", textDecoration: "none" }} >
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </li>
                </Link>
            ))}
        </ul>
    </div>
  )
}

export default PostsTanstack