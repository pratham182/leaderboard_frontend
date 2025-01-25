import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LeaderboardPage from './pages/LeaderBoardPage';
import PointHistoryPage from './pages/PointHistoryPage';
import UserManagementPage from './pages/UserManagement';


function App() {

  return (
   <>
   
    <Router>
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to the  Leaderboard system</h1>
      <div className='sm:gap-4 flex gap-8 pt-8 items-center justify-center'>
      <div >
        <button className="sm:p-2 md:p-4  bg-blue-500 text-white rounded-md hover:bg-blue-600">
        <Link to="/user-management" >
          Manage Users
        </Link>

        </button>
       
      </div>
      <div>
        <button className="sm:p-2 md:p-4  bg-blue-500 text-white rounded-md hover:bg-blue-600 ">
        <Link to="/leaderboard" >
          View Leaderboard
        </Link>

        </button>
       
      </div>
      <div>
        <button className="sm:p-2 md:p-4  bg-blue-500 text-white rounded-md hover:bg-blue-600 ">
        <Link to="/point-history" >
          View Point History
        </Link>
        </button>
        
      </div>


      </div>
      
    </div>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/point-history" element={<PointHistoryPage />} />
        <Route path="/user-management" element={<UserManagementPage />} />
      </Routes>
    </Router>
   
   
   </>
  )
}

export default App
