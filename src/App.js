import "./styles.css";
import { useState, useEffect } from "react";
import React from "react";
import { marked } from "marked";

const App = () => {
  const [postContent, setPostContent] = useState("");

  useEffect(() => {
    const storedContent = localStorage.getItem("previousContent");
    if (storedContent) {
      setPostContent(storedContent);
    }
  }, []);

  const handlePostContent = (markdown) => {
    const html = marked.parse(markdown);
    return { __html: html };
  };

  const handleChange = (e) => {
    const markdown = e.target.value;
    setPostContent(markdown);
    localStorage.setItem("previousContent", markdown);
  };

  return (
    <div className="app">
      <textarea
        className="input"
        value={postContent}
        onChange={handleChange}
        rows="35"
      />
      <div
        className="output"
        dangerouslySetInnerHTML={handlePostContent(postContent)}
      />
    </div>
  );
};
export default App;
