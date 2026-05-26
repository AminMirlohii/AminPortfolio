/**
 * Add projects by appending to this array.
 * category: 'fullstack' | 'ml' | 'mobile' | 'web'
 */

export const projects = [
  {
    id: 'personal-finance-tracker',
    title: 'Personal Finance Tracker',
    description:
      'Full-stack mobile app with React Native and Node.js—RESTful APIs for transactions and auth, MySQL storage, and real-time spending insights.',
    techStack: ['Node.js', 'Express', 'MySQL', 'React Native'],
    highlights: [
      'Engineered RESTful APIs for transaction management and user authentication',
      'Designed a MySQL database for efficient financial data storage and retrieval',
      'Built analytics features for spending patterns and real-time financial insights',
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
      'Full-stack portfolio analytics app—Flask APIs and a React (Vite) dashboard to simulate allocations, benchmark performance, and visualize results.',
    techStack: [
      'Python',
      'Flask',
      'scikit-learn',
      'React',
      'Vite',
      'pandas',
      'yfinance',
      'Recharts',
    ],
    highlights: [
      'Simulated allocations and benchmarked performance with interactive charts',
      'Used pandas, yfinance, and scikit-learn for risk metrics and anomaly detection',
      'Classified portfolio risk with ML-driven signals on the dashboard',
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
      'End-to-end fraud detection with FastAPI and MySQL, ML classification and risk scoring, plus a React dashboard for transaction analytics.',
    techStack: ['Python', 'FastAPI', 'MySQL', 'React', 'Vite'],
    highlights: [
      'Built FastAPI + MySQL backend for processing and validating transaction data',
      'Integrated ML classification, risk scoring, and inference in a real-time pipeline',
      'Delivered a React dashboard to visualize system outputs and analytics',
    ],
    github: 'https://github.com/AminMirlohii/fraud-ml',
    live: null,
    category: 'fullstack',
    featured: false,
  },
  {
    id: 'movie-x-movie',
    title: 'Movie-X-Movie',
    description:
      'Movie discovery app with TMDB search and trending content—React Native (Expo) UI with Appwrite for data storage.',
    techStack: ['React Native', 'Expo', 'Appwrite', 'JavaScript', 'TMDB API'],
    highlights: [
      'Search and explore films using live TMDB API data',
      'Built a polished Expo mobile UI for discovery and trending',
      'Integrated Appwrite for backend data storage',
    ],
    github: 'https://github.com/AminMirlohii/Movie-X-Movie',
    live: null,
    category: 'mobile',
    featured: false,
  },
]
