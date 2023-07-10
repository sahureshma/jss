export const createPost = (post) => {
  return {
    type: 'CREATE_POST',
    payload: post
  };
};

export const updatePost = (postId, updatedPost) => {
  return {
    type: 'UPDATE_POST',
    payload: {
      id: postId,
      post: updatedPost
    }
  };
};

export const deletePost = (postId) => {
  return {
    type: 'DELETE_POST',
    payload: postId
  };
};