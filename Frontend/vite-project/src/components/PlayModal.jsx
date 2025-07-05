import React, { useState } from 'react';
import { X, Coins, TrendingUp, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext.jsx';

const PlayModal = ({ prediction, onClose }) => {
  const { user, updateCoins } = useAuth();
  const [selectedChoice, setSelectedChoice] = useState('');
  const [betAmount, setBetAmount] = useState(100);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (!selectedChoice || betAmount <= 0 || betAmount > user.coins) return;

    setIsPlaying(true);
    
 
    setTimeout(() => {
      updateCoins(-betAmount);
      setIsPlaying(false);
      onClose();
      
     
     alert(`Prediction placed! You bet ${betAmount} coins on ${selectedChoice}`);
    }, 1000);
  };

  const potentialWinning = Math.floor(betAmount * 1.8); 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Make Your Prediction
          </h2>
          <p className="text-gray-600 text-sm">
            {prediction.question}
          </p>
        </div>

       
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-lg mb-6">
          <div className="flex items-center justify-between">
            <span className="font-medium">Your Balance</span>
            <div className="flex items-center space-x-1">
              <Coins className="h-5 w-5" />
              <span className="font-bold">{user.coins.toLocaleString()}</span>
            </div>
          </div>
        </div>

       
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Choose Your Prediction</h3>
          <div className="grid grid-cols-2 gap-3">
            <button
  onClick={() => setSelectedChoice('YES')}
  className={`p-4 rounded-lg border-2 transition-all ${
    selectedChoice === 'YES'
      ? 'border-green-500 bg-green-50 text-green-700'
      : 'border-gray-200 hover:border-green-300'
  }`}
>
  <div className="text-center">
    <div className="text-2xl mb-1">✅</div>
    <div className="font-medium">YES</div>
  </div>
</button>

<button
  onClick={() => setSelectedChoice('NO')}
  className={`p-4 rounded-lg border-2 transition-all ${
    selectedChoice === 'NO'
      ? 'border-red-500 bg-red-50 text-red-700'
      : 'border-gray-200 hover:border-red-300'
  }`}
>
  <div className="text-center">
    <div className="text-2xl mb-1">❌</div>
    <div className="font-medium">NO</div>
  </div>
</button>

          </div>
        </div>

      
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Bet Amount</h3>
          <div className="relative">
            <Coins className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="number"
              value={betAmount}
              onChange={(e) => setBetAmount(Math.max(10, Math.min(user.coins, parseInt(e.target.value) || 0)))}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter bet amount"
              min="10"
              max={user.coins}
            />
          </div>
          
    
          <div className="flex space-x-2 mt-3">
            {[50, 100, 250, 500].map((amount) => (
              <button
                key={amount}
                onClick={() => setBetAmount(Math.min(amount, user.coins))}
                className="flex-1 px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                disabled={amount > user.coins}
              >
                {amount}
              </button>
            ))}
          </div>
        </div>

        
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-blue-700">Potential Winning</span>
            <div className="flex items-center space-x-1 text-blue-700 font-bold">
              <Coins className="h-4 w-4" />
              <span>{potentialWinning.toLocaleString()}</span>
            </div>
          </div>
        </div>

    
        {betAmount > user.coins * 0.5 && (
          <div className="flex items-center space-x-2 p-3 bg-yellow-50 rounded-lg mb-4">
            <AlertCircle className="h-5 w-5 text-yellow-600" />
            <span className="text-sm text-yellow-700">
              You're betting more than 50% of your balance. Play responsibly!
            </span>
          </div>
        )}

       
        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handlePlay}
            disabled={!selectedChoice || betAmount <= 0 || betAmount > user.coins || isPlaying}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPlaying ? 'Placing...' : 'Confirm Prediction'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayModal;