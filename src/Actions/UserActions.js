export const createUser = (user) => {
    return {
      type: 'CREATE_USER',
      payload: user
    };
  };
  
  export const updateUser = (userId, updatedUser) => {
    return {
      type: 'UPDATE_USER',
      payload: {
        id: userId,
        user: updatedUser
      }
    };
  };
  
  export const deleteUser = (userId) => {
    return {
      type: 'DELETE_USER',
      payload: userId
    };
  };