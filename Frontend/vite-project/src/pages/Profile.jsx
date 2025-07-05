import React, { useState } from 'react';
import { User, Settings, Trophy, TrendingUp, Calendar, Coins, Target, Award } from 'lucide-react';
import { useAuth } from '../context/AuthContext.jsx';

const Profile = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Please Login</h1>
          <p className="text-gray-600">You need to login to access your profile.</p>
        </div>
      </div>
    );
  }

  const mockStats = {
    totalPredictions: 45,
    correctPredictions: 32,
    accuracy: 71.1,
    totalWinnings: 8650,
    currentStreak: 5,
    bestStreak: 12,
    rank: 156,
    level: 'Gold'
  };

  const mockHistory = [
    {
      id: 1,
      question: "Will India win the T20 match?",
      choice: "YES",
      result: "Won",
      amount: 250,
      winnings: 450,
      date: "2024-01-15"
    },
    {
      id: 2,
      question: "Will Nifty cross 23,000?",
      choice: "NO",
      result: "Lost",
      amount: 100,
      winnings: 0,
      date: "2024-01-14"
    },
    {
      id: 3,
      question: "Will new movie cross ₹100Cr?",
      choice: "YES",
      result: "Won",
      amount: 150,
      winnings: 270,
      date: "2024-01-13"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <User className="h-12 w-12 text-white" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">{user.username}</h1>
            <p className="text-blue-100 mb-4">{user.email}</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Coins className="h-5 w-5" />
                <span className="font-medium">{user.coins.toLocaleString()} Coins</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="h-5 w-5" />
                <span className="font-medium">Rank #{mockStats.rank}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span className="font-medium">{mockStats.level} Level</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <Target className="h-6 w-6 text-white" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">{mockStats.totalPredictions}</div>
          <div className="text-sm text-gray-600">Total Predictions</div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <Trophy className="h-6 w-6 text-white" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">{mockStats.correctPredictions}</div>
          <div className="text-sm text-gray-600">Correct</div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">{mockStats.accuracy}%</div>
          <div className="text-sm text-gray-600">Accuracy</div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <Coins className="h-6 w-6 text-white" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">{mockStats.totalWinnings.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Total Winnings</div>
        </div>
      </div>

      
      <div className="bg-white rounded-2xl shadow-lg">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'overview', label: 'Overview', icon: TrendingUp },
              { id: 'history', label: 'History', icon: Calendar },
              { id: 'settings', label: 'Settings', icon: Settings }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Current Streak</span>
                      <span className="font-semibold">{mockStats.currentStreak} wins</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Best Streak</span>
                      <span className="font-semibold">{mockStats.bestStreak} wins</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Win Rate</span>
                      <span className="font-semibold">{mockStats.accuracy}%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                        <Trophy className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm">First Win</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Target className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm">10 Predictions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <TrendingUp className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm">70% Accuracy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Prediction History</h3>
              <div className="space-y-4">
                {mockHistory.map(prediction => (
                  <div key={prediction.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-900">{prediction.question}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        prediction.result === 'Won' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {prediction.result}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Choice: <span className="font-medium">{prediction.choice}</span></span>
                      <span>Bet: {prediction.amount} coins</span>
                      <span>Winnings: {prediction.winnings} coins</span>
                      <span>{prediction.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                    <input
                      type="text"
                      value={user.username}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={user.email}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferences</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Email Notifications</span>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
                      Enabled
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">SMS Notifications</span>
                    <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm">
                      Disabled
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;