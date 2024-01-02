export const getPost = async () => {
  const res = await fetch("http://localhost:4000/posts");

  return res.json();
};

export const getPostById = async (id) => {
  const res = await fetch("http://localhost:4000/posts/" + id, {
    next: {
      revalidate: 0,
    },
  });

  return res.json();
};

export const createPost = async (newPost) => {
  await fetch("http://localhost:4000/posts/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });
};

export const deletePost = async (id) => {
  await fetch("http://localhost:4000/posts/" + id, {
    method: "DELETE",
  });
};

export const editPost = async (id, updatedPost) => {
  await fetch("http://localhost:4000/posts/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPost),
  });
};
