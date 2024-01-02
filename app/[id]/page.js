"use client";

import { useState, useEffect } from "react";
import { getPostById } from "../service/post-api"

export default function PostDetails({ params }) {
  const [post, setPost] = useState({});
  useEffect(() => {
    const fetchPost = async () => {
      const res = await getPostById(params.id);
      setPost(res);
    };

    fetchPost();
  }, [params.id]);

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
