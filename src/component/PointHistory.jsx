import React, { useEffect, useState } from 'react';
import { getLeaderboard, getPointHistory } from '../api';


const PointHistory = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);


  const [selectedUserId, setSelectedUserId] = useState('');
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getLeaderboard(); 
        setUsers(response.data.data); 
        setLoading(false) 
      } catch (err) {
        console.error('Error fetching users', err);
      }
    };

    fetchUsers();
  }, []);
     


  const fetchHistory = async (userId) => {
    if (!userId) return;
    setLoading(true);
    try {
      const response = await getPointHistory(userId);

      setHistory(response.data.history); 
    } catch (err) {
      console.error('Error fetching point history', err);
    } finally {
      setLoading(false);
    }
  };

  const handleUserChange = (e) => {
    setSelectedUserId(e.target.value);
    fetchHistory(e.target.value); 
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-4">
    <h2 className="text-xl font-bold">Point History</h2>
    
    <select
      value={selectedUserId}
      onChange={handleUserChange}
      className="p-2 border border-gray-300 rounded-md mb-4"
    >
      <option value="">Select a user</option>
      {users.map((user) => (
        <option key={user._id} value={user._id}>
          {user.name}
        </option>
      ))}
    </select>

    {selectedUserId && history.length > 0 && (
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2 text-left">Points Claimed</th>
            <th className="border p-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {history.map((data, index) => (
            <tr key={index}>
              <td className="border p-2">{data.points}</td>
              <td className="border p-2">{new Date(data.claimedAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}

    {selectedUserId && history.length === 0 && (
      <p>No point history found.</p>
    )}
  </div>
  );
};

export default PointHistory;
