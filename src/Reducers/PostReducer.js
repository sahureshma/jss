const initialState = {
    posts: []
  };
  
  const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CREATE_POST':
        return {
          ...state,
          posts: [...state.posts, action.payload]
        };
      case 'UPDATE_POST':
        const updatedPosts = state.posts.map((post) => {
          if (post.id === action.payload.id) {
            return action.payload.post;
          }
          return post;
        });
        return {
          ...state,
          posts: updatedPosts
        };
      case 'DELETE_POST':
        const filteredPosts = state.posts.filter((post) => post.id !== action.payload);
        return {
          ...state,
          posts: filteredPosts
        };
      default:
        return state;
    }
  };
  
  export default postReducer;