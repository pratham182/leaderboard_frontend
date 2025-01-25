import React, { useState, useEffect } from 'react';
import Leaderboard from '../component/Leaderboard';

const LeaderboardPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Leaderboard</h1>
      <Leaderboard />
    </div>
  );
};

export default LeaderboardPage;
