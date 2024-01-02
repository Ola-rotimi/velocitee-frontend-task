"use client";

import { useState } from "react";
import { createPost } from "../service/post-api";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const newPost = {
      id: Date.now(),
      title,
      content,
      createdAt: new Date().toUTCString(),
    };
    try {
      await createPost(newPost);
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
      setTitle("");
      setContent("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <h1>Create Post</h1>
      <small>create a new post</small>
      {isSuccess ? (
        <div className="bg-green-400 px-6 py-4 border-l-4 border-green-70 rounded-md w-1/2 m-auto">
          <p className="text-center text-white">Post Created</p>
        </div>
      ) : null}
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter your Title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="content">Body:</label>
        <textarea
          rows={10}
          name="content"
          id="content"
          placeholder="Enter Your Content"
          required
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        {isLoading ? (
          <button
            className="bg-primary px-3 py-2 align-middle rounded-lg flex justify-between items-center gap-2 text-white text-sm"
            disabled
          >
            Adding Post...
          </button>
        ) : (
          <button
            className="bg-primary px-3 py-2 align-middle rounded-lg flex justify-between items-center gap-2 text-white text-sm"
            type="submit"
          >
            Add New Post
          </button>
        )}
      </form>
    </main>
  );
}
