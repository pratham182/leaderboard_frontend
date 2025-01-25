import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to the  Leaderboard system</h1>
      <div className='flex gap-8 pt-8 items-center justify-center'>
      <div>
        <Link to="/user-management" className="p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Manage Users
        </Link>
      </div>
      <div>
        <Link to="/leaderboard" className="p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-4">
          View Leaderboard
        </Link>
      </div>
      <div>
        <Link to="/point-history" className="p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-4 ">
          View Point History
        </Link>
      </div>


      </div>
      
    </div>
  );
};

export default HomePage;
