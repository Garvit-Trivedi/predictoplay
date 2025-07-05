import React, { useState } from 'react';
import { Trophy, Medal, Star, TrendingUp, Coins, Target } from 'lucide-react';
import { mockLeaderboard } from '../data/mockData.js';

const Leaderboard = () => {
  const [timeFilter, setTimeFilter] = useState('weekly');

  const getRankIcon = (rank) => {
    if (rank === 1) return <Trophy className="h-6 w-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="h-6 w-6 text-gray-400" />;
    if (rank === 3) return <Medal className="h-6 w-6 text-orange-500" />;
    return <Star className="h-6 w-6 text-blue-500" />;
  };

  const getRankColor = (rank) => {
    if (rank === 1) return 'bg-gradient-to-r from-yellow-400 to-orange-500';
    if (rank === 2) return 'bg-gradient-to-r from-gray-300 to-gray-400';
    if (rank === 3) return 'bg-gradient-to-r from-orange-400 to-red-500';
    return 'bg-gradient-to-r from-blue-400 to-purple-500';
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Leaderboard</h1>
        <p className="text-gray-600">Top predictors and their amazing performances</p>
      </div>

     
      <div className="flex justify-center mb-8">
        <div className="flex bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {['weekly', 'monthly', 'all-time'].map(filter => (
            <button
              key={filter}
              onClick={() => setTimeFilter(filter)}
              className={`px-6 py-2 text-sm font-medium transition-all ${
                timeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {filter === 'all-time' ? 'All Time' : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {mockLeaderboard.slice(0, 3).map((user, index) => (
          <div key={user.id} className={`relative ${index === 0 ? 'md:order-2' : index === 1 ? 'md:order-1' : 'md:order-3'}`}>
            <div className={`${getRankColor(user.rank)} rounded-2xl p-6 text-white transform ${index === 0 ? 'scale-105' : ''}`}>
              <div className="text-center">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {getRankIcon(user.rank)}
                </div>
                <h3 className="text-xl font-bold mb-1">{user.username}</h3>
                <div className="text-2xl font-bold mb-2">{user.badge}</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-1">
                    <Coins className="h-4 w-4" />
                    <span className="font-medium">{user.coins.toLocaleString()}</span>
                  </div>
                  <div className="text-sm opacity-90">
                    <div>{user.predictionsWon} wins</div>
                    <div>{user.accuracy}% accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

   
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Complete Rankings</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Player
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Coins
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Wins
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Accuracy
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockLeaderboard.map(user => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{user.badge}</div>
                      <span className="text-lg font-bold text-gray-900">#{user.rank}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {user.username.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{user.username}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-1 text-sm font-medium text-gray-900">
                      <Coins className="h-4 w-4 text-yellow-500" />
                      <span>{user.coins.toLocaleString()}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-1 text-sm text-gray-900">
                      <Target className="h-4 w-4 text-green-500" />
                      <span>{user.predictionsWon}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                          style={{ width: `${user.accuracy}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{user.accuracy}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-xl">
          <div className="flex items-center space-x-3">
            <TrendingUp className="h-8 w-8" />
            <div>
              <div className="text-2xl font-bold">50,000+</div>
              <div className="text-blue-100">Total Players</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-xl">
          <div className="flex items-center space-x-3">
            <Coins className="h-8 w-8" />
            <div>
              <div className="text-2xl font-bold">₹10L+</div>
              <div className="text-green-100">Total Winnings</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-xl">
          <div className="flex items-center space-x-3">
            <Trophy className="h-8 w-8" />
            <div>
              <div className="text-2xl font-bold">1,000+</div>
              <div className="text-purple-100">Daily Predictions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;