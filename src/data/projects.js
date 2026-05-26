/**
 * Add new projects by appending to this array.
 * featured: true — larger card in the grid (use sparingly)
 */
export const projects = [
  {
    id: 'taskflow',
    title: 'TaskFlow',
    description:
      'A collaborative task manager with real-time updates, drag-and-drop boards, and team workspaces built for productivity.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    image: null,
    github: 'https://github.com/yourusername/taskflow',
    live: 'https://taskflow-demo.example.com',
    featured: true,
  },
  {
    id: 'devmetrics',
    title: 'DevMetrics Dashboard',
    description:
      'Analytics dashboard for GitHub repositories—tracks commits, PR velocity, and contributor activity with interactive charts.',
    tags: ['React', 'TypeScript', 'Chart.js', 'GitHub API'],
    image: null,
    github: 'https://github.com/yourusername/devmetrics',
    live: null,
    featured: true,
  },
  {
    id: 'campus-nav',
    title: 'Campus Navigator',
    description:
      'Mobile-friendly campus map with indoor routing, building search, and accessibility-friendly path suggestions.',
    tags: ['React Native', 'Mapbox', 'Firebase'],
    image: null,
    github: 'https://github.com/yourusername/campus-nav',
    live: null,
    featured: false,
  },
  {
    id: 'algo-viz',
    title: 'Algorithm Visualizer',
    description:
      'Interactive visualizations for sorting and graph algorithms with step-by-step playback and complexity notes.',
    tags: ['React', 'Framer Motion', 'Algorithms'],
    image: null,
    github: 'https://github.com/yourusername/algo-viz',
    live: 'https://algo-viz.example.com',
    featured: false,
  },
  {
    id: 'iot-monitor',
    title: 'IoT Sensor Monitor',
    description:
      'Embedded project streaming temperature and humidity data to a web dashboard with threshold alerts.',
    tags: ['C++', 'Arduino', 'MQTT', 'React'],
    image: null,
    github: 'https://github.com/yourusername/iot-monitor',
    live: null,
    featured: false,
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description:
      'This site—a minimal, responsive developer portfolio with modular components and a single data source for projects.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    image: null,
    github: 'https://github.com/yourusername/portfolio',
    live: null,
    featured: false,
  },
]
