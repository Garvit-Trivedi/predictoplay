import React, { useState } from 'react';
import { TrendingUp, Zap, Trophy, Coins, Filter } from 'lucide-react';
import PredictionCard from '../components/PredictionCard.jsx';
import { mockPredictions } from '../data/mockData.js';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('trending');

  const categories = ['All', 'Sports', 'Finance', 'News', 'Entertainment'];

  const filteredPredictions = mockPredictions.filter(prediction =>
    selectedCategory === 'All' || prediction.category === selectedCategory
  );

  const sortedPredictions = [...filteredPredictions].sort((a, b) => {
    if (sortBy === 'trending') {
      return (b.totalYes + b.totalNo) - (a.totalYes + a.totalNo);
    } else if (sortBy === 'ending') {
      return new Date(a.endTime) - new Date(b.endTime);
    } else if (sortBy === 'pool') {
      return (b.totalPool || 0) - (a.totalPool || 0);
    }
    return 0;
  });

  return (
    
    <div className="w-full bg-white text-gray-300">
      {/* Hero Section */}
      <div className="w-full bg-white text-gray-300">
  {/* Hero Section */}
  <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwJMpWUVGxQvGzK6KqKGoHSMqu_yETYTmZw&s"
      alt="Hero Background"
      className="absolute inset-0 w-full h-full object-cover opacity-30"
    />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
      
      {/* Left Text Content */}
      <div className="text-center md:text-left w-full md:w-1/2 z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
         𝒫𝓇𝑒𝒹𝒾𝒸𝓉 𝓉𝒽𝑒 𝐹𝓊𝓉𝓊𝓇𝑒
          <span className="block text-purple-400">𝒲𝒾𝓃 𝓉𝒽𝑒 𝒢𝒶𝓂𝑒</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-200">
          Join thousands of predictors. Stake your coins. Win big rewards.
        </p>
        {/* Optional Call-to-Action Buttons */}
        <div className="flex justify-center md:justify-start gap-4">
          <button className="px-6 py-2 border border-yellow-400 bg-yellow text-yellow rounded-lg font-semibold hover:bg-yellow-300  hover:text-black transition">
            Start Predicting
          </button>
          <button className="px-6 py-2 border border-yellow-400 text-yellow-400 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Side Image with Thought Bubbles */}
      <div className="relative w-full md:w-[420px] h-[420px] md:h-[460px] z-10">
        {/* Background watercolor style fade */}
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 w-52 h-full bg-gradient-to-b from-red-300 to-transparent opacity-70 rounded-xl"
          style={{ filter: "blur(36px)" }}
        ></div>

        {/* Woman portrait */}
        <img
          src="https://probo.in/_next/image?url=https%3A%2F%2Fd39axbyagw7ipf.cloudfront.net%2Fimages%2Fhome%2Fheader%2Fhome-header-13052025.webp&w=1200&q=75"
          alt="Young Indian woman with a confident pose surrounded by interactive thought bubbles showing questions about cricket and contests"
          className="relative rounded-xl w-full h-full object-cover"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />

        {/* Thought Bubbles */}
        <div className="absolute top-12 left-2 space-y-4 w-40">
          {[
            "Virat Kohli to score 5 centuries in 2025?",
            "Congratulations on the Indian T20 League?",
            "Predict how the fastest World Cup campaign 2026?",
          ].map((question, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-3 text-xs text-gray-800"
            >
              <div>{question}</div>
              <div className="flex justify-between mt-2">
                <button className="text-blue-600 hover:underline">Yes</button>
                <button className="text-pink-600 hover:underline">No</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Main Content */}
      <div className="w-100%">
  <section className="bg-white px-6 py-14 md:py-24 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
    {/* Left Text */}
    <div className="flex-1 max-w-lg">
  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
    Stay in control —
  </h2>
  <p className="text-2xl md:text-3xl font-semibold text-gray-800">
    play what you like, <br /> when you like.
  </p>
</div>


    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
      {/* Card 1 */}
      <div className="p-6 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-sm space-y-3 bg-white">
        <p className="opacity-60 text-xs font-semibold text-gray-600">1977 Traders</p>
        <p className="font-semibold leading-snug text-gray-900 text-base">
          Will India GDP growth rate be 8.5% or more in FY22-23?
        </p>
        <div className="flex justify-between mt-4">
          <button className="text-blue-700 font-medium hover:underline">Yes 79.5</button>
          <button className="text-pink-700 font-medium hover:underline">No 20.5</button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="p-6 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-sm space-y-3 bg-white">
        <p className="opacity-60 text-xs font-semibold text-gray-600">1712 Traders</p>
        <p className="font-semibold leading-snug text-gray-900 text-base">
          Will U.S. sales jump into recession by the end of July 2023?
        </p>
        <div className="flex justify-between mt-4">
          <button className="text-blue-700 font-medium hover:underline">Yes 59.8</button>
          <button className="text-pink-700 font-medium hover:underline">No 40.2</button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="p-6 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-sm space-y-3 bg-white">
        <p className="opacity-60 text-xs font-semibold text-gray-600">1340 Traders</p>
        <p className="font-semibold leading-snug text-gray-900 text-base">
          Will Virat Kohli surpass Sachin Tendulkar’s international cricket centuries by the end of 2027?
        </p>
        <div className="flex justify-between mt-4">
          <button className="text-blue-700 font-medium hover:underline">Yes 70.5</button>
          <button className="text-pink-700 font-medium hover:underline">No 29.5</button>
        </div>
      </div>
    </div>
  </section>
</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
<section className="px-6 max-w-7xl mx-auto py-20">
  <div className="mb-10">
  <h2 className="text-4xl font-extrabold text-black mb-2">𝐸𝓍𝓅𝓁𝑜𝓇𝑒 𝒫𝓇𝑒𝒹𝒾𝒸𝓉𝑜𝒫𝓁𝒶𝓎 𝐹𝑒𝒶𝓉𝓊𝓇𝑒𝓈</h2>
  <div className="w-100% h-1 bg-purple-800 rounded-full"></div>
</div>

  {/* Masonry Layout */}
  <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
    
    {/* What's New (Text Focused) */}
    <div className="break-inside-avoid bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold text-black leading-tight mb-4">
        What’s new in <br /> 𝒫𝓇𝑒𝒹𝒾𝒸𝓉𝑜𝒫𝓁𝒶𝓎?
      </h2>
      <p className="text-2xl">→</p>
    </div>

    {/* Trust & Safety */}
    <div className="break-inside-avoid bg-gray-900 text-white p-8 rounded-lg shadow-lg">
      <h3 className="font-bold text-2xl mb-3">𝒫𝓇𝑒𝒹𝒾𝒸𝓉𝑜𝒫𝓁𝒶𝓎 Trust & Safety</h3>
      <p className="text-sm mb-4">
        Be it loss protection or data security, 𝒫𝓇𝑒𝒹𝒾𝒸𝓉𝑜𝒫𝓁𝒶𝓎 is user first always. Check out the latest on responsible trading.
      </p>
      <p className="text-sm font-semibold underline text-blue-300 mb-3">Read more →</p>
      <img
        src="data:image/jpeg;base64,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"
        alt="Trust & Safety"
        className="rounded-md object-cover w-full"
      />
    </div>
    <div className="break-inside-avoid bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-black mb-2">Play Smart. Win Smarter.</h3>
      <p className="text-sm text-gray-800">
        𝒫𝓇𝑒𝒹𝒾𝒸𝓉𝑜𝒫𝓁𝒶𝓎 rewards sharp minds. Join the game where strategy, not luck, leads to real-time recognition.
      </p>
    </div>
    <div className="break-inside-avoid bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-black mb-2">Where Insight Drives Impact.</h3>
      <p className="text-sm text-gray-800">
        Dive into a world where every opinion has power. 𝒫𝓇𝑒𝒹𝒾𝒸𝓉𝑜𝒫𝓁𝒶𝓎 lets you forecast events and earn respect with every right call.
      </p>
    </div>

    {/* Exiting Trades */}
    <div className="break-inside-avoid bg-gray-900 text-white p-8 rounded-lg shadow-lg">
      <h3 className="font-bold text-2xl mb-3">Exiting trades is your choice</h3>
      <p className="text-sm mb-4">
        The ‘Exit’ feature gives the user an opportunity to exit from the current trade and helps in controlling your losses and maximising the profit.
      </p>
      <p className="text-sm font-semibold underline text-blue-300 mb-3">Read more →</p>
      <img
        src="data:image/jpeg;base64,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"
        alt="Exit Trade"
        className="rounded-md object-cover w-full"
      />
    </div>

    {/* Market Orders */}
    <div className="break-inside-avoid bg-gray-900 text-white p-8 rounded-lg shadow-lg">
      <h3 className="font-bold text-2xl mb-3">Market Orders and Instant Exit</h3>
      <p className="text-sm mb-4">
        Market orders are a fast and reliable method to buy or exit a trade in a fast-moving market. With market orders, quantities are matched almost instantly after placing an order at the best available price.
      </p>
      <p className="text-sm font-semibold underline text-blue-300 mb-3">Read more →</p>
      <img
        src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a81ae65b-00e0-4c2b-8276-a041232a0cb8.png"
        alt="Market Orders"
        className="rounded-md object-cover w-full"
      />
    </div>

    {/* Prediction Power */}
    <div className="break-inside-avoid bg-gray-900 text-white p-8 rounded-lg shadow-lg">
      <h3 className="font-bold text-2xl mb-3">The Power of Prediction Markets</h3>
      <p className="text-sm mb-4">
        Check out case studies, research articles and the utility of 𝒫𝓇𝑒𝒹𝒾𝒸𝓉𝑜𝒫𝓁𝒶𝓎 events.
      </p>
      <p className="text-sm font-semibold underline text-blue-300 mb-3">Read more →</p>
      <img
        src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0b63c2e8-37e9-4695-9487-5f984f1ad78e.png"
        alt="Prediction Power"
        className="rounded-md object-cover w-full"
      />
    </div>

    {/* Text Filler Card 1 */}
    <div className="break-inside-avoid bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-black mb-2">Your Game. Your Rules.</h3>
      <p className="text-sm text-gray-800">
        𝒫𝓇𝑒𝒹𝒾𝒸𝓉𝑜𝒫𝓁𝒶𝓎 gives you complete freedom to trade on what matters to you. Choose your event, trust your instincts, and go all in.
      </p>
    </div>

    {/* Text Filler Card 2 */}
    <div className="break-inside-avoid bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-black mb-2">Real. Simple. Profitable.</h3>
      <p className="text-sm text-gray-800">
        𝒫𝓇𝑒𝒹𝒾𝒸𝓉𝑜𝒫𝓁𝒶𝓎's simple interface and real-time mechanics let you focus on smart decisions—not complicated tools.
      </p>
    </div>
    <div className="break-inside-avoid bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-black mb-2">Predict with Purpose.</h3>
      <p className="text-sm text-gray-800">
 𝒫𝓇𝑒𝒹𝒾𝒸𝓉𝑜𝒫𝓁𝒶𝓎 helps you see through the noise. Focus on what matters, trust your instincts, and make every prediction count.
      </p>
    </div>

  </div>
</section>



        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Trending Predictions</h2>
            <p className="text-gray-400">Choose your predictions and win coins</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-gray-800 text-white px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort Filter */}
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-800 text-white px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="trending">Most Popular</option>
                <option value="ending">Ending Soon</option>
                <option value="pool">Highest Pool</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md scale-105'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Prediction Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedPredictions.map(prediction => (
            <PredictionCard 
              key={prediction.id} 
              prediction={{...prediction, image: `https://via.placeholder.com/300x200?text=${prediction.category}`} }
            />
          ))}
        </div>
{/* Smart Choices Section */}
    <section className="px-6 max-w-7xl mx-auto py-20">
  <h3 className="text-4xl md:text-5xl font-extrabold max-w-4xl mx-auto text-center mb-16 text-gray-900 leading-snug">
    Smart choices, responsible play. <br /> <span className="text-purple-600">𝒫𝓇𝑒𝒹𝒾𝒸𝓉𝑜𝒫𝓁𝒶𝓎 puts you first.</span>
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-gray-800">
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
      <h4 className="text-xl font-bold mb-3 text-gray-900">
        Fastest news feed in the game
      </h4>
      <p className="text-base leading-relaxed">
        Get the facts and odds instantly. Stay informed and act quickly with 𝒫𝓇𝑒𝒹𝒾𝒸𝓉𝑜𝒫𝓁𝒶𝓎’s real-time market updates on ongoing events.
      </p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
      <h4 className="text-xl font-bold mb-3 text-gray-900">
        All the news without the noise
      </h4>
      <p className="text-base leading-relaxed">
        Our experts distill the clutter to bring you clear, reliable event insights — making it easy to predict, decide, and play smart.
      </p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
      <h4 className="text-xl font-bold mb-3 text-gray-900">
        The power to exit, anytime
      </h4>
      <p className="text-base leading-relaxed">
        Trade with flexibility. Exit positions mid-event, recover investments, or lock in your gains — all in real time with complete control.
      </p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
      <h4 className="text-xl font-bold mb-3 text-gray-900">
        The pulse of society is on 𝒫𝓇𝑒𝒹𝒾𝒸𝓉𝑜𝒫𝓁𝒶𝓎
      </h4>
      <p className="text-base leading-relaxed">
        Discover what the world thinks — from trends and politics to entertainment. 𝒫𝓇𝑒𝒹𝒾𝒸𝓉𝑜𝒫𝓁𝒶𝓎 reflects the voice of the people.
      </p>
    </div>
  </div>
</section>

       {/* Features */}

<div className="mt-16 bg-white border border-gray-200 rounded-2xl shadow-xl p-10">
  <h3 className="text-4xl font-extrabold text-center text-black mb-12">
    Why Choose <span className="text-purple-600">PredictoPlay</span>?
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
    <Feature 
      icon={Zap} 
      title="Fast & Fair" 
      gradient="from-green-400 to-blue-500" 
      desc={<span className="text-black">Quick predictions with transparent results based on real-world outcomes.</span>}
      image="https://cdn.jsdelivr.net/gh/lucide-icons/lucide/icons/zap.svg"
    />
    <Feature 
      icon={Trophy} 
      title="Skill-Based" 
      gradient="from-purple-400 to-pink-500" 
      desc={<span className="text-black">Use your knowledge and skills to make smart predictions and win big.</span>}
      image="https://cdn.jsdelivr.net/gh/lucide-icons/lucide/icons/trophy.svg"
    />
    <Feature 
      icon={Coins} 
      title="Instant Rewards" 
      gradient="from-yellow-400 to-orange-500" 
      desc={<span className="text-black">Get your winnings instantly credited to your wallet after results.</span>}
      image="https://cdn.jsdelivr.net/gh/lucide-icons/lucide/icons/coins.svg"
    />
  </div>
</div>


      </div>

      {/* Footer */}
      <footer className="relative bg-gray-900 text-white overflow-hidden">
  {/* Background Human-Themed Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" // Replace with any human/community themed image
      alt="Teamwork"
      className="w-full h-full object-cover opacity-20"
    />

  </div>

  {/* Footer Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
      {/* Brand Section */}
      <div>
        <Link to="/" className="flex items-center space-x-2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg shadow-inner">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-xl font-extrabold text-purple-800">
                        PredictoPlay
                      </span>
                    </Link>
        <p className="text-gray-300 text-sm leading-relaxed">
          PredictoPlay is your go-to platform for skill-based prediction games. Play responsibly, win smartly!
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-bold mb-3 text-white">Quick Links</h4>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li><a href="#" className="hover:text-yellow-400 transition">Home</a></li>
          <li><a href="#" className="hover:text-yellow-400 transition">Predictions</a></li>
          <li><a href="#" className="hover:text-yellow-400 transition">How It Works</a></li>
          <li><a href="#" className="hover:text-yellow-400 transition">FAQ</a></li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h4 className="text-lg font-bold mb-3 text-white">Support</h4>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li><a href="#" className="hover:text-yellow-400 transition">Contact Us</a></li>
          <li><a href="#" className="hover:text-yellow-400 transition">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-yellow-400 transition">Terms of Service</a></li>
        </ul>
      </div>

      {/* Social Media */}
      <div>
        <h4 className="text-lg font-bold mb-3 text-white">Follow Us</h4>
        <div className="flex space-x-5 mt-2">
          <a href="#" className="hover:scale-110 transition-transform">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg"
              alt="X"
              className="h-6 w-6"
            />
          </a>
          <a href="#" className="hover:scale-110 transition-transform">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg"
              alt="Facebook"
              className="h-6 w-6"
            />
          </a>
          <a href="#" className="hover:scale-110 transition-transform">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg"
              alt="Instagram"
              className="h-6 w-6"
            />
          </a>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
      &copy; {new Date().getFullYear()} PredictoPlay. All rights reserved.
    </div>
  </div>
</footer>

    </div>


);
};

// Reusable Stat Box
const StatBox = ({ value, label, icon }) => (
  <div className="text-center flex flex-col items-center">
    <img src={icon} alt={label} class PIECE className="h-10 w-10 mb-2" />
    <div className="text-3xl font-extrabold text-yellow-300 drop-shadow-md mb-1">{value}</div>
    <div className="text-blue-200 text-sm">{label}</div>
  </div>
);

// Reusable Feature Card
const Feature = ({ icon: Icon, title, desc, gradient, image }) => (
  <div className="text-center">
    <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
      <img src={image} alt={title} className="h-8 w-8" />
    </div>
    <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
    <p className="text-gray-400 text-sm">{desc}</p>
  </div>
);

export default Home;