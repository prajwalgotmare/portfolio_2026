# Prajwal Gotmare Portfolio

Minimal personal portfolio built with Next.js App Router and Tailwind CSS.

## Project structure

```text
app/                  App Router pages and global styles
components/           Reusable UI components
public/images/        Portrait and content thumbnails
public/logos/         Company logos
public/documents/     Static downloadable documents
archive/legacy-assets/ Older or unused source assets kept out of the main app flow
```

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Deploy to Netlify with GitHub

1. Push this project to a GitHub repository.
2. In Netlify, create a new project from an existing repository.
3. Select the GitHub repo and allow Netlify access.
4. Netlify should detect the project as Next.js automatically.
5. If Netlify asks for a manual build command, use:

```text
Build command: npm run build
```

6. Trigger the first deploy.
7. Future pushes to the connected branch will create new deploys automatically.
