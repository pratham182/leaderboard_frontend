import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:2000";

export const createUser = async (data) => {
  try {
    const response = await axios.post(`${backendUrl}/api/users`, data,{ withCredentials: true });
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.error || "Failed to create user",
    };
  }
};


export const claimUserPoints = async (userId) => {
  try {
    
    const response = await axios.post(`${backendUrl}/api/claim-points`, { userId },{ withCredentials: true });
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.error || "Failed to claim points",
    };
  }
};


export const getLeaderboard = async () => {
  try {
    const response = await axios.get(`${backendUrl}/api/leaderboard`,{ withCredentials: true });
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.error || "Failed to fetch leaderboard",
    };
  }
};


export const getPointHistory = async (userId) => {
  try {
    const response = await axios.get(`${backendUrl}/api/point-history?userId=${userId}`,{ withCredentials: true });
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.error || "failed to fetch points",
    };
  }
};


