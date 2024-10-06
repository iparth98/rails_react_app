import { useState, useEffect } from 'react';
import { API_URL } from '../constant/constant';
import Post from "./Post.jsx";

function Posts() {
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true);
      const response = await fetch(API_URL);

      if (!response.ok) {
        setError('Fetching events failed.');
      } else {
        const resData = await response.json();
        console.log(resData);
        setPosts(resData);
      }
      setIsLoading(false);
    }

    fetchPosts();
  }, []);
  
  
  return (
    <>
    {isLoading && <p>Loading...</p>}
    {error && <p>{error}</p>}
    {!isLoading && posts && <Post posts={posts} />}
    </>
  )
}

export default Posts;
