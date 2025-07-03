export const mockPredictions = [
  {
    id: 1,
    question: "Will India win the upcoming T20 World Cup match against Australia?",
    category: "Sports",
    endTime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours from now
    isResolved: false,
    totalYes: 2847,
    totalNo: 1653,
    totalPool: 45000,
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    question: "Will Nifty 50 cross 23,000 points by end of this week?",
    category: "Finance",
    endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days from now
    isResolved: false,
    totalYes: 1923,
    totalNo: 2876,
    totalPool: 38500,
    createdAt: new Date().toISOString()
  },
  {
    id: 3,
    question: "Will the new Bollywood movie 'Pushpa 2' cross ₹500 crores in its first week?",
    category: "Entertainment",
    endTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
    isResolved: false,
    totalYes: 3421,
    totalNo: 1879,
    totalPool: 52900,
    createdAt: new Date().toISOString()
  },
  {
    id: 4,
    question: "Will Mumbai receive more than 100mm rainfall this week?",
    category: "News",
    endTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
    isResolved: false,
    totalYes: 1654,
    totalNo: 2341,
    totalPool: 31950,
    createdAt: new Date().toISOString()
  },
  {
    id: 5,
    question: "Will Bitcoin price exceed $100,000 by end of this month?",
    category: "Finance",
    endTime: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString(), // 15 days from now
    isResolved: false,
    totalYes: 4532,
    totalNo: 3678,
    totalPool: 82100,
    createdAt: new Date().toISOString()
  },
  {
    id: 6,
    question: "Will Real Madrid win the Champions League this season?",
    category: "Sports",
    endTime: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
    isResolved: false,
    totalYes: 2987,
    totalNo: 2456,
    totalPool: 54430,
    createdAt: new Date().toISOString()
  },
  {
    id: 7,
    question: "Will the upcoming iPhone 16 be launched in India within 2 weeks of global launch?",
    category: "News",
    endTime: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(), // 10 days from now
    isResolved: false,
    totalYes: 3876,
    totalNo: 1234,
    totalPool: 51100,
    createdAt: new Date().toISOString()
  },
  {
    id: 8,
    question: "Will Virat Kohli score a century in the next ODI match?",
    category: "Sports",
    endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days from now
    isResolved: false,
    totalYes: 5432,
    totalNo: 2987,
    totalPool: 84190,
    createdAt: new Date().toISOString()
  },
  {
  id: 9,
  question: "Will India win the upcoming T20 World Cup final?",
  category: "Sports",
  endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days from now
  isResolved: false,
  totalYes: 7120,
  totalNo: 3880,
  totalPool: 110400,
  createdAt: new Date().toISOString()
}

];

export const mockLeaderboard = [
  {
    id: 1,
    username: "CricketKing",
    coins: 15650,
    predictionsWon: 47,
    accuracy: 78.3,
    rank: 1,
    badge: "🏆"
  },
  {
    id: 2,
    username: "StockMaster",
    coins: 14230,
    predictionsWon: 42,
    accuracy: 74.6,
    rank: 2,
    badge: "🥈"
  },
  {
    id: 3,
    username: "FilmBuff",
    coins: 13890,
    predictionsWon: 39,
    accuracy: 73.1,
    rank: 3,
    badge: "🥉"
  },
  {
    id: 4,
    username: "TechGuru",
    coins: 12560,
    predictionsWon: 35,
    accuracy: 71.4,
    rank: 4,
    badge: "⭐"
  },
  {
    id: 5,
    username: "WeatherWise",
    coins: 11340,
    predictionsWon: 32,
    accuracy: 69.8,
    rank: 5,
    badge: "⭐"
  },
  {
    id: 6,
    username: "BollywoodFan",
    coins: 10890,
    predictionsWon: 28,
    accuracy: 67.5,
    rank: 6,
    badge: "⭐"
  },
  {
    id: 7,
    username: "FinanceExpert",
    coins: 10120,
    predictionsWon: 26,
    accuracy: 65.2,
    rank: 7,
    badge: "⭐"
  },
  {
    id: 8,
    username: "SportsPredictor",
    coins: 9560,
    predictionsWon: 24,
    accuracy: 63.8,
    rank: 8,
    badge: "⭐"
  },
  {
    id: 9,
    username: "NewsHunter",
    coins: 8930,
    predictionsWon: 22,
    accuracy: 61.9,
    rank: 9,
    badge: "⭐"
  },
  {
    id: 10,
    username: "PredictorPro",
    coins: 8450,
    predictionsWon: 20,
    accuracy: 60.5,
    rank: 10,
    badge: "⭐"
  }
];

export const mockTransactions = [
  {
    id: 1,
    type: "credit",
    amount: 500,
    description: "Won prediction: India vs Australia",
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 2,
    type: "debit",
    amount: 100,
    description: "Bet placed: Nifty 50 prediction",
    createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 3,
    type: "credit",
    amount: 50,
    description: "Daily login bonus",
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 4,
    type: "credit",
    amount: 1000,
    description: "Welcome bonus",
    createdAt: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString()
  }
];