import React, { useState, useEffect } from 'react';




import AddUserForm from '../component/AddUserForm';
import ClaimPoints from '../component/ClaimPoints';
import { getLeaderboard } from '../api';

const UserManagementPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getLeaderboard();
        setUsers(response.data.data);
      } catch (err) {
        console.error('Error fetching users', err);
      }
    };
    fetchUsers();
  }, []);

  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]); 
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">User Management</h1>
      <AddUserForm addUser={addUser} />
      <ClaimPoints users={users} />
    </div>
  );
};

export default UserManagementPage;
