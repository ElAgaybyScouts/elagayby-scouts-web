# El-Agayby Scouts Website

Official website of **El-Agayby Scout Group** (مجموعة العجايبي الكشفية) at the Great Martyr Marmina Church, Central El-Warraq, Giza, Egypt.

A single-page, Arabic (RTL) site that presents the group, its scout stages and activities, meeting locations and FAQ, and lets parents and new members get in touch or apply to join.

> **Status:** frontend only. The forms are not connected to a backend yet (see [Backend integration](#backend-integration)).

## Tech stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev) for dev server and build
- [Tailwind CSS 4](https://tailwindcss.com)
- [React Router 7](https://reactrouter.com)
- Fonts served from our own server: IBM Plex Sans Arabic (via `@fontsource`) and a trimmed Material Symbols icon font

## Getting started

Requirements: **Node.js 20.19+** (or 22.12+) and npm.

```bash
git clone https://github.com/ElAgaybyScouts/elagayby-scouts-web.git
cd elagayby-scouts-web
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Type-check (`tsc -b`) and build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
├── components/
│   ├── sections/    Home page sections (Hero, About, Join, Contact, FAQ, ...)
│   ├── forms/       Shared form field components
│   ├── layout/      Navbar and Footer
│   └── ui/          Small UI pieces (Icon, SectionHeading)
├── data/            Site content and config (siteData.ts): texts, contact info, FAQ, ...
├── services/        API layer (joinRequestService, supportMessageService)
├── layouts/         PublicLayout and AdminLayout
├── pages/           HomePage, NotFoundPage, admin/
├── routes/          Router setup
├── types/           Shared TypeScript types
└── utils/           Helpers (phone and digit formatting, class names)
public/images/       Logo, hero image, social preview image
deploy/              Example server config
scripts/             Maintenance scripts
```

To change the site's texts, phone numbers, schedules or FAQ, edit `src/data/siteData.ts`.

## Backend integration

The site is meant to talk to a Spring Boot API. Until it is ready, the service functions in `src/services/` do not send or store anything: the join form and the contact form show a success message, but nothing is saved.

Each service file has a `TODO` with the endpoint and the `fetch` code to enable:

| Form | Service | Planned endpoint |
| --- | --- | --- |
| Join request | `joinRequestService.ts` | `POST /api/join-requests` |
| Question / problem message | `supportMessageService.ts` | `POST /api/support-messages` |

Components do not need to change when the API is connected. In production, proxy `/api` to Spring Boot on the same domain so CORS is not needed (see `deploy/nginx.conf.example`).

## Icons

Only the icons used in `src/` are included in the icon font (`src/assets/fonts/material-symbols-outlined-subset.woff2`, about 80 KB instead of 4 MB). After adding a new icon, regenerate it:

```bash
pip install fonttools brotli
python3 scripts/subset-material-symbols.py
```

## Deployment

1. Replace `YOUR-DOMAIN.com` in `index.html` (canonical and Open Graph tags) with the real domain.
2. Run `npm run build` and upload the contents of `dist/` to the server.
3. Configure the server to return `index.html` for unknown paths, so refreshing a page does not give a 404. A ready example is in `deploy/nginx.conf.example`.
4. Use HTTPS, since the forms collect personal data.

## TODO

- [ ] Connect the join and contact forms to the Spring Boot API
- [ ] Protect or remove the `/admin` page before going live (it has no authentication)
- [ ] Re-enable the photo gallery (`Gallery.tsx`, the footer link and the nav item are commented out) once photos are ready
- [ ] Fill in the group's phone number in `siteData.ts`
- [ ] Remove unused legacy files so `npm run build` passes (for example `src/components/public`, `src/pages/public`, `src/services/localContentService.ts`)