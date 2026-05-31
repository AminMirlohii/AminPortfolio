/**
 * Project data — single source of truth for cards and detail pages.
 *
 * ─── Image storage (static assets) ───────────────────────────────────────────
 * Place files under public/ so Vite serves them at /images/projects/...
 *
 *   public/images/projects/
 *   ├── personal-finance-tracker/
 *   │   ├── thumbnail.png          ← card cover (required for cards once added)
 *   │   ├── 01-home.png            ← detail gallery (order = array order below)
 *   │   ├── 02-transactions.png
 *   │   └── 03-analytics.png
 *   ├── portfolio-ranker/
 *   │   ├── thumbnail.png
 *   │   ├── 01-dashboard.png
 *   │   └── 02-simulation.png
 *   ├── fraud-detection-system/
 *   │   ├── thumbnail.png
 *   │   └── 01-dashboard.png
 *   └── movie-x-movie/
 *       ├── thumbnail.png
 *       ├── 01-discover.png
 *       └── 02-search.png
 *
 * Recommended: PNG or WebP, ~1200px wide for screenshots, ~800×500 for thumbnails.
 *
 * ─── Fields ──────────────────────────────────────────────────────────────────
 * @typedef {'web' | 'mobile'} DeviceType
 * @typedef {'fullstack' | 'ml' | 'mobile' | 'web'} ProjectCategory
 *
 * @typedef {Object} Project
 * @property {string} id              - URL slug for /projects/:id (detail pages)
 * @property {string} title
 * @property {string} description     - Short summary (also shown if detail is set)
 * @property {string} [detail]        - Long-form write-up; no length limit on the card
 * @property {string[]} techStack
 * @property {string[]} highlights
 * @property {string} github
 * @property {string|null} live
 * @property {ProjectCategory} category
 * @property {DeviceType} deviceType  - UI framing hint (browser vs phone mockup)
 * @property {string|null} thumbnail  - Card image path under /images/projects/
 * @property {string[]} images        - Gallery paths for detail page
 * @property {boolean} [featured]
 */

/** Base URL segment for all project images (maps to public/images/projects/) */
export const PROJECT_IMAGES_BASE = '/images/projects'

/**
 * Build a public URL for a project asset.
 * @param {string} projectId - Folder name under public/images/projects/
 * @param {string} filename  - e.g. 'thumbnail.png' or '01-dashboard.png'
 */
export function projectImage(projectId, filename) {
  return `${PROJECT_IMAGES_BASE}/${projectId}/${filename}`
}

/**
 * @param {string} id
 * @returns {Project|undefined}
 */
export function getProjectById(id) {
  return projects.find((project) => project.id === id)
}

/**
 * Add projects by appending to this array.
 * Set thumbnail/images to real paths once files exist in public/images/projects/{id}/
 */
export const projects = [
  {
    id: 'personal-finance-tracker',
    title: 'Personal Finance Tracker',
    description:
      'Full-stack mobile application built with React Native and Node.js, designed to help users track expenses, manage transactions, and gain real-time insights into their spending habits. The app includes secure authentication, structured data storage, and an analytics layer that visualizes financial behavior over time.',
    techStack: ['Node.js', 'Express', 'MySQL', 'React Native'],
    highlights: [
      'Engineered RESTful APIs using Node.js and Express for transaction handling, user authentication, and secure data flow between client and server',
      'Designed and implemented a normalized MySQL database schema optimized for efficient storage, querying, and retrieval of financial records',
      'Developed analytics features that process user transactions to generate real-time spending summaries and pattern detection',
    ],
    github: 'https://github.com/AminMirlohii/finance-tracker',
    live: null,
    category: 'fullstack',
    deviceType: 'mobile',
    // → public/images/projects/personal-finance-tracker/thumbnail.png
    thumbnail: projectImage('personal-finance-tracker', 'thumbnail.png'),
    images: [],
    featured: true,
  },
  {
    id: 'portfolio-ranker',
    title: 'Portfolio Ranker',
    description:
      'Full-stack web application for portfolio analysis and visualization, built with a Flask backend and a React (Vite) dashboard. The project allows users to simulate asset allocations, compare performance against benchmarks, and explore portfolio behavior through interactive visualizations.',
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
      'Built a Flask-based API layer to handle data processing, portfolio calculations, and communication with the frontend',
      'Developed a React (Vite) dashboard with interactive charts to visualize portfolio performance and allocation changes',
      'Used pandas and yfinance to fetch, clean, and analyze financial data from real market sources',
      'Implemented scikit-learn models to compute risk metrics and detect anomalies in portfolio behavior',
    ],
    github: 'https://github.com/AminMirlohii/Portfolio-Analysis',
    live: null,
    category: 'ml',
    deviceType: 'web',
    thumbnail: projectImage('portfolio-ranker', 'thumbnail.png'),
    images: [],
    featured: true,
  },
  {
    id: 'fraud-detection-system',
    title: 'Fraud Detection System',
    description:
      'End-to-end fraud detection platform built with FastAPI, MySQL, and a React frontend. The system processes transaction data, runs machine learning-based classification in real time, and provides risk scoring through an interactive dashboard.',
    techStack: ['Python', 'FastAPI', 'MySQL', 'React', 'Vite'],
    highlights: [
      'Built a FastAPI backend with MySQL integration to process, validate, and store transaction data efficiently',
      'Developed a real-time ML pipeline for fraud classification and risk scoring, integrating model inference directly into API workflows',
      'Designed a modular system architecture to support scalable data processing and low-latency predictions',
      'Created a React (Vite) dashboard to display transaction analytics, fraud alerts, and model outputs in a clear, interactive format',
    ],
    github: 'https://github.com/AminMirlohii/fraud-ml',
    live: null,
    category: 'fullstack',
    deviceType: 'web',
    thumbnail: projectImage('fraud-detection-system', 'thumbnail.png'),
    images: [],
    featured: false,
  },
  {
    id: 'movie-x-movie',
    title: 'Movie-X-Movie',
    description:
      'Mobile movie discovery application built with React Native (Expo), allowing users to search films, explore trending content, and view real-time movie data using the TMDB API.',
    techStack: ['React Native', 'Expo', 'Appwrite', 'JavaScript', 'TMDB API'],
    highlights: [
      'Integrated the TMDB API to enable live search, trending lists, and dynamic movie detail retrieval',
      'Designed and developed a responsive mobile UI using React Native (Expo), focused on smooth browsing and discovery',
      'Implemented backend data storage and basic user data management using Appwrite',
      'Structured the app to efficiently handle API requests and update UI state in real time for a fluid user experience',
    ],
    github: 'https://github.com/AminMirlohii/Movie-X-Movie',
    live: null,
    category: 'mobile',
    deviceType: 'mobile',
    // → public/images/projects/movie-x-movie/thumbnail.png
    thumbnail: projectImage('movie-x-movie', 'thumbnail.png'),
    images: [],
    featured: false,
  },
]
