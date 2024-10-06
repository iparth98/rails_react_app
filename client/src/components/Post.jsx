export default function Post({posts}) {

  return (
    <>
    <h1>ALL EVENETS</h1>
    {posts.map((post) => (
       <div key={post.id} className="post-container">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
       </div>
    ))}
    </>
  );
}
