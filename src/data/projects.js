/**
 * Add projects by appending to this array.
 * category: 'fullstack' | 'ml' | 'mobile' | 'web'
 */

export const projects = [
  {
    id: 'personal-finance-tracker',
    title: 'Personal Finance Tracker',
    description:
      'Full-stack mobile app for tracking transactions with REST APIs, MySQL storage, and spending analytics.',
    techStack: ['Node.js', 'Express', 'MySQL', 'React Native'],
    highlights: [
      'Mobile client for day-to-day transaction tracking',
      'REST APIs for authentication and transaction CRUD',
      'MySQL schema for durable financial data',
      'Analytics views for spending patterns and insights',
    ],
    github: 'https://github.com/AminMirlohii/finance-tracker',
    live: null,
    category: 'fullstack',
    featured: true,
  },
  {
    id: 'portfolio-ranker',
    title: 'Portfolio Ranker',
    description:
      'Portfolio analytics web app with simulation dashboard, ML risk models, and chart-based performance views.',
    techStack: ['Python', 'Flask', 'Scikit-learn', 'React', 'Vite'],
    highlights: [
      'Simulation dashboard for portfolio analytics',
      'ML pipeline for risk and anomaly detection',
      'Market data ingestion via yfinance and pandas',
      'React dashboard with chart-based performance views',
    ],
    github: 'https://github.com/AminMirlohii/Portfolio-Analysis',
    live: null,
    category: 'ml',
    featured: true,
  },
  {
    id: 'fraud-detection-system',
    title: 'Fraud Detection System',
    description:
      'Real-time fraud detection with ML classification, FastAPI backend, MySQL, and a React monitoring dashboard.',
    techStack: ['Python', 'FastAPI', 'MySQL', 'React', 'Vite'],
    highlights: [
      'Low-latency scoring for incoming transactions',
      'Classification + risk scoring pipeline',
      'FastAPI service layer with MySQL persistence',
      'React dashboard for alerts and visualization',
    ],
    github: 'https://github.com/AminMirlohii/fraud-ml',
    live: null,
    category: 'fullstack',
    featured: false,
  },
  {
    id: 'movie-x-movie',
    title: 'Movie-X-Movie App',
    description:
      'Movie discovery app with TMDB search and trending, built with Expo and Appwrite backend integration.',
    techStack: ['React Native', 'Expo', 'Appwrite', 'JavaScript', 'TMDB API'],
    highlights: [
      'Discovery flows using TMDB search and trending',
      'Polished mobile UI with Expo',
      'Appwrite for backend capabilities',
      'Fast browsing and favorites-style workflows',
    ],
    github: 'https://github.com/AminMirlohii/Movie-X-Movie',
    live: null,
    category: 'mobile',
    featured: false,
  },
]
