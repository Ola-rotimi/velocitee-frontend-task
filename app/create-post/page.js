export default function CreatePost() {
  return (
    <main>
      <h1>Create Post</h1>
      <small>create a new post</small>
      <form>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter your Title"
          required
        />
        <label htmlFor="content">Body:</label>
        <textarea
          rows={10}
          name="content"
          id="content"
          placeholder="Enter Your Content"
          required
        />
        <button type="submit">Post</button>
      </form>
    </main>
  );
}
