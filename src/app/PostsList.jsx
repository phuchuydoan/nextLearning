"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setPosts } from "@/redux/slices/posts.slice";
import { useRef } from "react";

const PostsList = ({ initialPosts }) => {
  const dispatch = useAppDispatch();
  const initialized = useRef(false);
  const posts = useAppSelector((state) => state.posts.list);

  // console.log('postsposts', posts)

  if (!initialized.current) {
    console.log("initialPosts", initialPosts);
    dispatch(setPosts(initialPosts));
    initialized.current = true;
  }

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
