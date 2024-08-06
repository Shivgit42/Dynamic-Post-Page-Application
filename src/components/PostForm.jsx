import React from "react";

const PostForm = ({
  post,
  handleChange,
  handleFileChange,
  handlePostChange,
}) => {
  return (
    <form>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={post.title}
        onChange={(e) => handleChange(e)}
      />

      <label htmlFor="content">Content</label>
      <textarea
        id="content"
        name="content"
        value={post.content}
        onChange={(e) => handleChange(e)}
      />

      <label htmlFor="imageUrl">Image URL</label>
      <input
        type="text"
        id="imageUrl"
        name="image"
        value={post.image}
        onChange={(e) => handleChange(e)}
      />

      <label htmlFor="imageFile">Upload Image</label>
      <input
        type="file"
        id="imageFile"
        accept="image/*"
        onChange={(e) => handleFileChange(e)}
      />

      <button type="button" onClick={() => handlePostChange(post)}>
        Preview Post
      </button>
    </form>
  );
};

export default PostForm;
