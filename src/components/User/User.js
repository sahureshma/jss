import React, { useState, useReducer, useContext } from 'react';
import './User.css';

// UserReducer initial state and actions
const initialState = {
  users: [],
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case 'UPDATE_USER':
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

// UserContext setup
const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

// User CRUD component
const UserCrud = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const { state, dispatch } = useContext(UserContext);
  const { users } = state;

  const addUser = () => {
    const newUser = {
      id: Date.now(),
      name,
      email,
    };

    dispatch({ type: 'ADD_USER', payload: newUser });

    setName('');
    setEmail('');
  };

  const updateUser = (user) => {
    const updatedUser = {
      ...user,
      name,
      email,
    };

    dispatch({ type: 'UPDATE_USER', payload: updatedUser });

    setName('');
    setEmail('');
  };

  const deleteUser = (userId) => {
    dispatch({ type: 'DELETE_USER', payload: userId });
  };

  return (
    <div className="container">
      <h1>User CRUD Operations</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="button" onClick={addUser}>
          Add User
        </button>
      </form>
      <div className="user-list">
        <h2>User List</h2>
        {users.map((user) => (
          <div key={user.id} className="user-item">
            <div>
              <strong>Name:</strong> {user.name}
            </div>
            <div>
              <strong>Email:</strong> {user.email}
            </div>
            <div className="user-actions">
            <button type="button" onClick={() => updateUser(user)}>
        Update
      </button>
      
              <button type="button" onClick={() => deleteUser(user.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const User = () => {
  return (
    <UserProvider>
      <UserCrud />
    </UserProvider>
  );
};

export default User;