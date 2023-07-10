import React, { useState } from 'react';
import './User.css'
import { useDispatch, useSelector } from 'react-redux';
import { createUser, updateUser, deleteUser } from '../../Actions/UserActions';

const User = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState(null); // Add the userId state variable

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const handleCreateUser = () => {
    const newUser = {
      id: Date.now(),
      name,
      email
    };
    dispatch(createUser(newUser));
    setName('');
    setEmail('');
  };

  const handleUpdateUser = () => {
    const updatedUser = {
      id: userId,
      name,
      email
    };
    dispatch(updateUser(userId, updatedUser));
    setName('');
    setEmail('');
    setUserId(null); // Reset the userId after updating the user
  };

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  const handleEditUser = (user) => {
    setName(user.name);
    setEmail(user.email);
    setUserId(user.id);
  };

  return (
    <div className='user-container'>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            <button onClick={() => handleEditUser(user)}>Edit</button> {/* Add an Edit button */}
          </li>
        ))}
      </ul>
      <h2>Create User</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleCreateUser}>Create</button>
      {userId && ( // Render the Update button conditionally
        <div>
          <h2>Edit User</h2>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button onClick={handleUpdateUser}>Update</button>
        </div>
      )}
    </div>
  );
};

export default User;