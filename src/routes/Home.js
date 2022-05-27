import { Link } from "react-router-dom";
import { getPosts } from "../data";
import React from "react";

export default function Invoices() {
  let posts = getPosts();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {posts.map((post) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/post/${post.imageUrl}`}
            key={post.imageUrl}
          >
            {post.username}
          </Link>
        ))}
      </nav>
    </div>
  );
}