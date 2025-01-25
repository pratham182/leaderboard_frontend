import React, { useState } from 'react';
import { createUser } from '../api';

const AddUserForm = ({addUser}) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      setError('Name is required');
      return;
    }
    setLoading(true);
    try {
      const newUser=await createUser({ name });
      setError('');
      setName('');
      addUser(newUser.data.data);
      alert('user added successful');
    } catch (err) {
      setError('error occurred while creating user');
    }
    setLoading(false);
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">Add User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full"
          placeholder="Enter user name"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className={`bg-blue-500 text-white p-2 rounded-md w-full ${loading && 'opacity-50'}`}
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add User'}
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
