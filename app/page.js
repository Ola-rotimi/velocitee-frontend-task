"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Page() {
  const [isGrid, setIsGrid] = useState(false);
  const [posts, setPosts] = useState([]);

  const handleGridChange = () => {
    setIsGrid(!isGrid);
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch("http://localhost:4000/posts").then((res) =>
          res.json()
        );
        setPosts(res);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPost();
  }, []);

  const handleDelete = async (e) => {
    const id = e.target.value;
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      const res = await fetch("http://localhost:4000/posts/" + id, {
        method: "DELETE",
      });
      const data = await res.json();
      alert("Post Deleted");
      window.location.reload();
    }
  };

  return (
    <main>
      <section className="post_head">
        <div>
          <h1>Posts</h1>
          <small>Read as you like</small>
        </div>
        <div>
          <button onClick={handleGridChange}>
            {isGrid ? <small>Grid</small> : <small>List</small>}
          </button>
        </div>
      </section>
      <section className={isGrid ? "grid_view" : "list_view"}>
        {posts.map((post) => (
          <article key={post.id}>
            <section className="card_button">
              <Link href={`/edit-post/${post.id}`} className="m-0">
                Edit
              </Link>
              <button
                value={post.id}
                onClick={handleDelete}
                className="edit_button"
              >
                Delete
              </button>
            </section>
            <Link href="/[id]" as={`/${post.id}`}>
              <h2>{post.title}</h2>
              <p>{post.content.slice(0, 50)}...</p>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
