"use client";

import { useEffect, useState } from "react";

export default function EditPost({ params }) {
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { id } = params;

  useEffect(() => {
    const getPost = async () => {
      const response = await fetch("http://localhost:4000/posts/" + id);
      const post = await response.json();
      const { title, content } = post;
      setTitle(title);
      setContent(content);
    };

    getPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const updatedPost = {
      title,
      content,
      createdAt: new Date().toUTCString(),
    };
    try {
      await fetch("http://localhost:4000/posts/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPost),
      });
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={title ?? ""}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="content">Content</label>
      <textarea
        name="content"
        value={content ?? ""}
        onChange={(e) => setContent(e.target.value)}
        rows={10}
      />
      {isLoading ? (
        <button
          className="bg-primary px-3 py-2 align-middle rounded-lg flex justify-between items-center gap-2 text-white text-sm"
          disabled
        >
          Updating Post...
        </button>
      ) : (
        <button
          className="bg-primary px-3 py-2 align-middle rounded-lg flex justify-between items-center gap-2 text-white text-sm"
          type="submit"
        >
          Update Post
        </button>
      )}
    </form>
  );
}
