import React, { useState } from 'react';
import { claimUserPoints } from '../api';

const ClaimPoints = ({ users }) => {
    console.log(users);
  const [selectedUser, setSelectedUser] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleClaimPoints = async () => {
    if (!selectedUser) {
      setError('Please select a user');
      return;
    }
    setLoading(true);
    try {
        await claimUserPoints(selectedUser);
      setError('');
      alert('Points claimed successfully!');
    } catch (err) {
      setError('Error claiming points');
    }
    setLoading(false);
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">Claim Points</h2>
      <select
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
        className="p-2 border border-gray-300 rounded-md w-full mb-4"
      >
        <option value="">Select a user</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500">{error}</p>}
      <button
        onClick={handleClaimPoints}
        className={`bg-green-500 text-white p-2 rounded-md w-full ${loading && 'opacity-50'}`}
        disabled={loading}
      >
        {loading ? 'Claiming...' : 'Claim Points'}
      </button>
    </div>
  );
};

export default ClaimPoints;
