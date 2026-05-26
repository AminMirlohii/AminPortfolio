# Personal Portfolio

A minimal, dark-mode developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Customize content

Edit these files—no component changes needed:

| File | Purpose |
|------|---------|
| `src/data/profile.js` | Name, role, bio, email, social links |
| `src/data/projects.js` | Project cards (`techStack`, `highlights`, `category`, etc.) |
| `src/data/skills.js` | Skill categories for About section |
| `src/data/experience.js` | Education & experience timeline |

### Add a project

```js
// src/data/projects.js
{
  id: 'my-new-app',
  title: 'My New App',
  description: 'Two or three sentences max.',
  techStack: ['React', 'Node.js'],
  highlights: ['Key outcome one', 'Key outcome two'],
  github: 'https://github.com/you/repo',
  live: null,
  category: 'web', // 'web' | 'mobile' | 'ml' | 'fullstack'
  featured: false,
},
```

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run preview` — preview production build

## Stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React (icons)
