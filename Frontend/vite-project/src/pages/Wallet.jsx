import React, { useState } from 'react';
import { Coins, Plus, ArrowUpRight, ArrowDownLeft, Gift, TrendingUp } from 'lucide-react';
import { useAuth } from '../context/AuthContext.jsx';
import { mockTransactions } from '../data/mockData.js';

const Wallet = () => {
  const { user, updateCoins } = useAuth();
  const [showAddCoins, setShowAddCoins] = useState(false);
  const [addAmount, setAddAmount] = useState(500);

  const handleAddCoins = () => {
    updateCoins(addAmount);
    setShowAddCoins(false);
  };

  const claimDailyBonus = () => {
    updateCoins(50);
    // Add bonus validation logic here if needed
  };

  const formatTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    return diffInHours < 1 ? 'Just now' : diffInHours < 24 ? `${diffInHours}h ago` : `${Math.floor(diffInHours / 24)}d ago`;
  };

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Please Login</h1>
        <p className="text-gray-600">You need to login to access your wallet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">My Wallet</h1>
        <p className="text-gray-500">Manage your coins and check all your prediction transactions.</p>
      </div>

      {/* Balance Card */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl p-8 shadow-xl mb-10">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-white/70 mb-2 text-sm">Total Balance</p>
            <div className="flex items-center space-x-2 text-4xl font-bold">
              <Coins className="h-8 w-8 animate-pulse" />
              <span>{user.coins.toLocaleString()}</span>
            </div>
          </div>
          <button
            onClick={() => setShowAddCoins(true)}
            className="bg-white/20 hover:bg-white/30 text-white px-5 py-2 rounded-lg font-semibold backdrop-blur-sm transition"
          >
            <Plus className="inline h-5 w-5 mr-1" />
            Add Coins
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {/* Daily Bonus */}
        <button
          onClick={claimDailyBonus}
          className="group bg-gradient-to-br from-green-400 to-blue-500 text-white p-6 rounded-xl hover:scale-105 transform transition duration-200 shadow-md"
        >
          <div className="flex items-center space-x-4">
            <Gift className="h-8 w-8 group-hover:animate-bounce" />
            <div>
              <div className="font-bold text-lg">Daily Bonus</div>
              <div className="text-sm text-green-100">+50 Coins</div>
            </div>
          </div>
        </button>

        {/* Add Coins */}
        <button
          onClick={() => setShowAddCoins(true)}
          className="group bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 rounded-xl hover:scale-105 transform transition duration-200 shadow-md"
        >
          <div className="flex items-center space-x-4">
            <Plus className="h-8 w-8 group-hover:rotate-90 transition duration-300" />
            <div>
              <div className="font-bold text-lg">Add Coins</div>
              <div className="text-sm text-purple-100">Buy more to play</div>
            </div>
          </div>
        </button>

        {/* Win Rate */}
        <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-6 rounded-xl shadow-md">
          <div className="flex items-center space-x-4">
            <TrendingUp className="h-8 w-8" />
            <div>
              <div className="font-bold text-lg">Win Rate</div>
              <div className="text-sm text-yellow-100">72.5%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Transaction History</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {mockTransactions.map(tx => (
            <div key={tx.id} className="p-6 flex justify-between items-center hover:bg-gray-50 transition">
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${tx.type === 'credit' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                  {tx.type === 'credit' ? <ArrowUpRight className="h-5 w-5" /> : <ArrowDownLeft className="h-5 w-5" />}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{tx.description}</p>
                  <p className="text-sm text-gray-500">{formatTimeAgo(tx.createdAt)}</p>
                </div>
              </div>
              <div className={`font-bold text-lg ${tx.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                {tx.type === 'credit' ? '+' : '-'}{tx.amount.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Coins Modal */}
      {showAddCoins && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Add Coins</h3>
            <p className="text-gray-500 mb-6">Select an amount to top-up your wallet.</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[100, 500, 1000, 2500, 5000, 10000].map(amount => (
                <button
                  key={amount}
                  onClick={() => setAddAmount(amount)}
                  className={`p-4 rounded-lg text-center border transition-all ${
                    addAmount === amount
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="font-bold text-lg">{amount.toLocaleString()}</div>
                  <div className="text-sm text-gray-500">₹{amount}</div>
                </button>
              ))}
            </div>

            <div className="flex justify-between space-x-3">
              <button
                onClick={() => setShowAddCoins(false)}
                className="w-full py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCoins}
                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-pink-700 transition-all"
              >
                Add {addAmount.toLocaleString()} Coins
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wallet;
