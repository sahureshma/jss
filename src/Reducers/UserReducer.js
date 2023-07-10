const initialState = {
    users: []
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CREATE_USER':
        return {
          ...state,
          users: [...state.users, action.payload]
        };
      case 'UPDATE_USER':
        const updatedUsers = state.users.map((user) => {
          if (user.id === action.payload.id) {
            return action.payload.user;
          }
          return user;
        });
        return {
          ...state,
          users: updatedUsers
        };
      case 'DELETE_USER':
        const filteredUsers = state.users.filter((user) => user.id !== action.payload);
        return {
          ...state,
          users: filteredUsers
        };
      default:
        return state;
    }
  };
  
  export default userReducer;