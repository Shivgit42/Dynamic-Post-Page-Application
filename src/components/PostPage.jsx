import React, { useState, useEffect } from "react";
import PostForm from "./PostForm";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "../App.css"; // Ensure you have the updated CSS file imported

const PostPage = () => {
  const [post, setPost] = useState({ title: "", content: "", image: "" });
  const [ogImageUrl, setOgImageUrl] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPost((prevPost) => ({ ...prevPost, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePostChange = async (newPost) => {
    setPost(newPost);

    try {
      const response = await fetch("http://localhost:3001/generate-og-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setOgImageUrl(url);
    } catch (error) {
      console.error("Failed to fetch:", error);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#121212" : "#f4f4f9";
  }, [isDarkMode]);

  return (
    <HelmetProvider>
      <div className={`App ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <Helmet>
          <title>{post.title}</title>
          {ogImageUrl && <meta property="og:image" content={ogImageUrl} />}
        </Helmet>

        <button onClick={toggleDarkMode} className="toggle-mode">
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>

        <h1>Create a Post</h1>
        <PostForm
          post={post}
          handleChange={handleChange}
          handleFileChange={handleFileChange}
          handlePostChange={handlePostChange}
        />

        {post.title && (
          <div className="post-preview">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            {post.image && <img src={post.image} alt="Post" />}
          </div>
        )}
      </div>
    </HelmetProvider>
  );
};

export default PostPage;
