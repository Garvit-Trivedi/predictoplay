import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import PredictionDetail from './pages/PredictionDetail.jsx';
import Wallet from './pages/Wallet.jsx';
import Leaderboard from './pages/Leaderboard.jsx';
import Profile from './pages/Profile.jsx';
import AdminPanel from './pages/AdminPanel.jsx';
import { useAuth } from './context/AuthContext.jsx';

function App() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prediction" element={<PredictionDetail />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />
        {user?.isAdmin && (
          <Route path="/admin" element={<AdminPanel />} />
        )}
      </Routes>
    </div>
  );
}

export default App;