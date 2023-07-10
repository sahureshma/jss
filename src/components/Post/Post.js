import React, { useState } from 'react';
import './Post.css'
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost, deletePost } from '../../Actions/PostActions';

const Post = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [postId, setPostId] = useState(null); // Add the postId state variable

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  const handleCreatePost = () => {
    const newPost = {
      id: Date.now(),
      title,
      content
    };
    dispatch(createPost(newPost));
    setTitle('');
    setContent('');
  };

  const handleUpdatePost = () => {
    const updatedPost = {
      id: postId,
      title,
      content
    };
    dispatch(updatePost(postId, updatedPost));
    setTitle('');
    setContent('');
    setPostId(null); // Reset the postId after updating the post
  };

  const handleDeletePost = (postId) => {
    dispatch(deletePost(postId));
  };

  const handleEditPost = (post) => {
    setTitle(post.title);
    setContent(post.content);
    setPostId(post.id);
  };

  return (
    <div className="post-container">
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => handleDeletePost(post.id)} className="delete-button">Delete</button>
            <button onClick={() => handleEditPost(post)} className="edit-button">Edit</button>
          </li>
        ))}
      </ul>
      <h2>Create Post</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="input-field" />
      <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} className="input-field"></textarea>
      <button onClick={handleCreatePost} className="create-button">Create</button>
      {postId && (
        <div>
          <h2>Edit Post</h2>
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="input-field" />
          <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} className="input-field"></textarea>
          <button onClick={handleUpdatePost} className="update-button">Update</button>
        </div>
      )}
    </div>
  );
};
export default Post;