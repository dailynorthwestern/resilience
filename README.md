# Resilience: Operation Midway Blitz, One Year Later

Astro static site for The Daily Northwestern’s resilience special issue.

## Run locally

Requires Node.js 22.17.0 or newer. Astro is pinned to 5.18.2 to support this Node version.

```sh
npm install
npm run dev
```

Open http://localhost:4321/resilience/. Run these commands from the project directory containing `package.json`.

## Build and preview

```sh
npm run build
npm run preview
```

The production site is generated in `dist/` for static hosting.

## Page structure

- `src/pages/index.astro` assembles the landing page.
- `src/layouts/Layout.astro` contains page metadata and imports global styles.
- `src/components/` contains the header, hero, Flourish timeline, stories and footer.
- `src/data/stories.ts` contains article links, headlines, dates and bylines, grouped by category.
- `src/styles/global.css` preserves the original responsive design.
- `src/styles/brand.css` styles the newspaper header and footer independently of the main content.
- `public/images/dailynu-wordmark.svg` is the header wordmark, copied from the previous `new-ryan-field` project.
- `public/assets/resilience-cover.jpg` is the issue artwork.

The Flourish timeline loads its external embed script. The story reel video and article photos are not in the repository yet; add the MP4 under `public/assets/` and connect it to the video element in `src/components/Stories.astro` when ready. El Diario currently displays a placeholder until stories are added to its category in `src/data/stories.ts`.

## Editing stories

Edit `src/data/stories.js` for headlines, bylines, publication dates, article links,
image alt text, and each story's `tags` array. `storyCategories` defines the filter
labels; `All` is added automatically. Use more than one tag to include a story in
multiple filters. El Diario shows an empty state until its stories are added.
The current stories use the issue artwork until article photos are supplied.

Images can use a public path such as `/images/story.jpg`, an external HTTPS URL,
or an imported Astro asset:

```js
import storyPhoto from '../assets/story.jpg';
// Inside a story object:
// image: storyPhoto,
```

Imported images use Astro's `Image` component; URL strings use a regular image
with lazy loading. Public paths automatically include the site's base path.

The story grid, filters, and hover styles are in `src/styles/global.css`.
Edit `.story-meta` and `.story-card:hover .story-meta` to adjust the reveal.
Metadata remains visible on small screens and touch devices, and appears on
keyboard focus. Its space is reserved to prevent layout shifts.
