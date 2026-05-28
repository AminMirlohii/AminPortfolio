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
 * @property {string} description
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
    deviceType: 'web',
    // → public/images/projects/portfolio-ranker/thumbnail.png
    thumbnail: null,
    images: [],
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
    deviceType: 'web',
    // → public/images/projects/fraud-detection-system/thumbnail.png
    thumbnail: null,
    images: [],
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
    deviceType: 'mobile',
    // → public/images/projects/movie-x-movie/thumbnail.png
    thumbnail: projectImage('movie-x-movie', 'thumbnail.png'),
    images: [],
    featured: false,
  },
]
