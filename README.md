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
| `src/data/projects.js` | Project cards (add entries to the array) |
| `src/data/skills.js` | Skill categories for About section |
| `src/data/experience.js` | Education & experience timeline |

### Add a project

```js
// src/data/projects.js
{
  id: 'my-new-app',
  title: 'My New App',
  description: 'Short description.',
  tags: ['React', 'Node.js'],
  image: null, // optional image URL later
  github: 'https://github.com/you/repo',
  live: 'https://demo.example.com', // or null
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
