import React, { useState, useEffect } from 'react';
import { Clock, TrendingUp, Users, Coins } from 'lucide-react';
import { useAuth } from '../context/AuthContext.jsx';
import PlayModal from "./PlayModal.jsx";

const PredictionCard = ({ prediction }) => {
  const { user } = useAuth();
  const [timeLeft, setTimeLeft] = useState('');
  const [showPlayModal, setShowPlayModal] = useState(false);

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const endTime = new Date(prediction.endTime).getTime();
      const difference = endTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

        if (days > 0) {
          setTimeLeft(`${days}d ${hours}h`);
        } else if (hours > 0) {
          setTimeLeft(`${hours}h ${minutes}m`);
        } else {
          setTimeLeft(`${minutes}m`);
        }
      } else {
        setTimeLeft('Ended');
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 60000);
    return () => clearInterval(timer);
  }, [prediction.endTime]);

  const getCategoryColor = (category) => {
    const colors = {
      Sports: 'bg-green-100 text-green-800',
      Finance: 'bg-blue-100 text-blue-800',
      News: 'bg-red-100 text-red-800',
      Entertainment: 'bg-purple-100 text-purple-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryIcon = (category) => {
    const icons = {
      Sports: '⚽',
      Finance: '📈',
      News: '📰',
      Entertainment: '🎬'
    };
    return icons[category] || '🎯';
  };

  const totalVotes = prediction.totalYes + prediction.totalNo;
  const yesPercentage = totalVotes > 0 ? (prediction.totalYes / totalVotes) * 100 : 50;
  const noPercentage = totalVotes > 0 ? (prediction.totalNo / totalVotes) * 100 : 50;

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{getCategoryIcon(prediction.category)}</span>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(prediction.category)}`}>
                {prediction.category}
              </span>
            </div>
            <div className="flex items-center space-x-1 text-gray-500">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">{timeLeft}</span>
            </div>
          </div>

          {/* Question */}
          <h3 className="text-lg font-semibold text-gray-900 mb-4 line-clamp-2">
            {prediction.question}
          </h3>

          {/* Stats */}
          <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{totalVotes.toLocaleString()} players</span>
            </div>
            <div className="flex items-center space-x-1">
              <Coins className="h-4 w-4" />
              <span>₹{prediction.totalPool?.toLocaleString() || '0'} pool</span>
            </div>
          </div>

          {/* Voting Bars */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">YES</span>
              <span className="text-sm font-medium text-green-600">{yesPercentage.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${yesPercentage}%` }}
              ></div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">NO</span>
              <span className="text-sm font-medium text-red-600">{noPercentage.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-red-400 to-red-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${noPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={() => setShowPlayModal(true)}
              disabled={!user || timeLeft === 'Ended'}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {!user ? 'Login to Play' : timeLeft === 'Ended' ? 'Ended' : 'Predict Now'}
            </button>
          </div>
        </div>
      </div>

      {/* Play Modal */}
      {showPlayModal && (
        <PlayModal
          prediction={prediction}
          onClose={() => setShowPlayModal(false)}
        />
      )}
    </>
  );
};

export default PredictionCard;
