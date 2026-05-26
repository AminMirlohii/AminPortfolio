/**
 * Add projects by appending to this array.
 * github: replace placeholder URLs with your real repo links.
 * featured: true — spans two columns on large screens (use sparingly)
 */

export const projects = [
  {
    id: 'personal-finance-tracker',
    title: 'Personal Finance Tracker',
    description:
      'Full-stack mobile app for logging income and expenses with secure auth and a MySQL-backed ledger. REST APIs power transactions and user sessions, with analytics that surface spending patterns and simple insights.',
    techStack: ['Node.js', 'Express', 'MySQL', 'React Native'],
    highlights: [
      'Mobile client for day-to-day transaction tracking',
      'REST APIs for authentication and transaction CRUD',
      'MySQL schema for durable financial data',
      'Analytics views for spending patterns and insights',
    ],
    github: 'https://github.com/yourusername/personal-finance-tracker',
    live: null,
    category: 'fullstack',
    featured: true,
  },
  {
    id: 'portfolio-ranker',
    title: 'Portfolio Ranker',
    description:
      'Web app for portfolio analytics with a simulation dashboard. Pandas, yfinance, and scikit-learn drive risk metrics, anomaly detection, and model-backed signals; a React (Vite) UI visualizes performance with charts.',
    techStack: ['Python', 'Flask', 'Scikit-learn', 'React', 'Vite', 'pandas', 'yfinance'],
    highlights: [
      'Simulation dashboard for portfolio analytics',
      'ML pipeline for risk and anomaly detection',
      'Market data ingestion via yfinance and pandas',
      'React dashboard with chart-based performance views',
    ],
    github: 'https://github.com/yourusername/portfolio-ranker',
    live: null,
    category: 'ml',
    featured: true,
  },
  {
    id: 'fraud-detection-system',
    title: 'Fraud Detection System',
    description:
      'Real-time transaction monitoring with ML classification and risk scoring. FastAPI serves the pipeline against MySQL, and a React dashboard gives operators clear fraud signals and trends.',
    techStack: ['Python', 'FastAPI', 'MySQL', 'React', 'Vite'],
    highlights: [
      'Low-latency scoring for incoming transactions',
      'Classification + risk scoring pipeline',
      'FastAPI service layer with MySQL persistence',
      'React dashboard for alerts and visualization',
    ],
    github: 'https://github.com/yourusername/fraud-detection-system',
    live: null,
    category: 'fullstack',
    featured: false,
  },
  {
    id: 'movie-x-movie',
    title: 'Movie-X-Movie App',
    description:
      'Cross-platform movie discovery built with Expo, powered by the TMDB API for search and trending feeds. JavaScript UI patterns plus Appwrite on the backend for auth and synced data.',
    techStack: ['React Native', 'Expo', 'Appwrite', 'JavaScript', 'TMDB API'],
    highlights: [
      'Discovery flows using TMDB search and trending',
      'Polished mobile UI with Expo',
      'Appwrite for backend capabilities',
      'Fast browsing and favorites-style workflows',
    ],
    github: 'https://github.com/yourusername/movie-x-movie',
    live: null,
    category: 'mobile',
    featured: false,
  },
]
