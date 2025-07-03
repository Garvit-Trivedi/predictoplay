import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, Coins, ArrowLeft } from 'lucide-react';
import { mockPredictions } from '../data/mockData.js';
import PredictionCard from '../components/PredictionCard.jsx';

const PredictionDetail = () => {
  const { id } = useParams();
  const prediction = mockPredictions.find(p => p.id === parseInt(id));

  if (!prediction) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center bg-gray-900/80 backdrop-blur-md rounded-xl border border-gray-700/50 p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-white mb-4">Prediction Not Found</h1>
          <p className="text-gray-400 mb-6">The prediction you're looking for doesn't exist. Explore other predictions!</p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-300">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-12">
        <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x200?text=Background+Pattern')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center text-gray-300 hover:text-yellow-400 mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Predictions
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={prediction.image || `https://via.placeholder.com/300x200?text=${prediction.category}`}
              alt={prediction.question}
              className="w-full md:w-1/3 h-48 object-cover rounded-xl shadow-lg"
            />
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 animate-fade-in">
                {prediction.question}
              </h1>
              <p className="text-lg text-gray-300 mb-4">{prediction.category}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <div className="flex items-center space-x-2 text-gray-200">
                  <Clock className="h-5 w-5 text-purple-400" />
                  <span>Ends: {new Date(prediction.endTime).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-200">
                  <Users className="h-5 w-5 text-blue-400" />
                  <span>{(prediction.totalYes + prediction.totalNo).toLocaleString()} players</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-200">
                  <Coins className="h-5 w-5 text-yellow-400" />
                  <span>₹{prediction.totalPool?.toLocaleString() || '0'} pool</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prediction Card Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 animate-fade-in">Make Your Prediction</h2>
          <PredictionCard prediction={prediction} />
        </div>
      </div>

      {/* Additional Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-2xl font-bold text-white mb-6 animate-fade-in">Prediction Stats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <StatCard
            icon="https://cdn.jsdelivr.net/gh/lucide-icons/lucide/icons/users.svg"
            label="Total Players"
            value={(prediction.totalYes + prediction.totalNo).toLocaleString()}
          />
          <StatCard
            icon="https://cdn.jsdelivr.net/gh/lucide-icons/lucide/icons/coins.svg"
            label="Prize Pool"
            value={`₹${prediction.totalPool?.toLocaleString() || '0'}`}
          />
          <StatCard
            icon="https://cdn.jsdelivr.net/gh/lucide-icons/lucide/icons/clock.svg"
            label="Time Remaining"
            value={
              new Date(prediction.endTime) > new Date()
                ? `${Math.floor(
                    (new Date(prediction.endTime) - new Date()) / (1000 * 60 * 60 * 24)
                  )}d ${Math.floor(
                    ((new Date(prediction.endTime) - new Date()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                  )}h`
                : 'Ended'
            }
          />
        </div>
      </div>
    </div>
  );
};

// Reusable Stat Card
const StatCard = ({ icon, label, value }) => (
  <div className="bg-gray-900/80 backdrop-blur-md rounded-xl border border-gray-700/50 p-6 shadow-lg hover:shadow-purple-600/50 transition-all duration-300">
    <div className="flex items-center space-x-4">
      <img src={icon} alt={label} className="h-10 w-10 text-purple-400" />
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <p className="text-xl font-bold text-white">{value}</p>
      </div>
    </div>
  </div>
);

export default PredictionDetail;