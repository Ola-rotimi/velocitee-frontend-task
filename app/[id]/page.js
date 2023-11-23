async function getPost(id) {
  const res = await fetch("http://localhost:4000/posts/" + id, {
    next: {
      revalidate: 0,
    },
  });

  return res.json();
}

export default async function PostDetails({ params }) {
  const post = await getPost(params.id);
  return (
    <main>
      <section className="post_header">
        <h1>{post.title}</h1>
        <small>Created: {post.createdAt}</small>
      </section>
      <section className="post_body">
        <p>{post.content}</p>
      </section>
    </main>
  );
}
