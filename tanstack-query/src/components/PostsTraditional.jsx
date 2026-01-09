import axios from "axios";
import React, { useEffect, useState } from "react";

const PostsTraditional = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPosts = async () => {
        try {
            const response = await axios.get("http://localhost:4000/posts");
            setPosts(response.data);
        }   
        catch (error) {
            console.error("Error fetching posts:", error);
        }
        finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchPosts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h2>Posts (Traditional Data Fetching)</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostsTraditional;