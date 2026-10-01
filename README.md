# Suryadeep Jadeja - Portfolio

A standard Next.js portfolio that runs locally and can be deployed on Vercel. It includes the portfolio design, project details, contact links and the downloadable resume.

## Run on your computer

1. Extract the ZIP.
2. Open the `suryadeep-portfolio` folder in VS Code. This is the folder containing `package.json`.
3. Open **Terminal > New Terminal** in VS Code.
4. Run:

```bash
npm install
npm run dev
```

5. Open **http://localhost:3000** in your browser.

Node.js 20.9 or newer is required. Check your version with `node --version`. Node.js 22 or newer is a suitable choice for this project.

Internet access is needed for the first dependency installation. After that, the portfolio can run locally. No database or API keys are needed to run this portfolio.

To stop the server, press **Ctrl+C** in the terminal.

## Check a production build locally

```bash
npm run build
npm start
```

Then open **http://localhost:3000**. You can also run `npm run typecheck` to check TypeScript.

## Deploy on Vercel

1. Create a GitHub repository for this portfolio.
2. Push or upload the project contents so `package.json` is at the repository root.
3. In Vercel, select **Add New > Project** and import that repository.
4. Choose the **Next.js** framework preset if it is not detected automatically.
5. Keep the project's standard build settings:

| Setting | Value |
| --- | --- |
| Framework | Next.js |
| Root Directory | Folder containing `package.json` |
| Install Command | `npm install` (automatic default is also fine) |
| Build Command | `npm run build` |
| Output Directory | Next.js default; leave the override disabled |
| Environment variables | None required |

6. Select **Deploy**. Vercel will provide your deployed URL.

The project uses Next.js directly. Its development and build scripts use Next.js's supported Webpack option. It does not require the preview hosting service used to create the first version.

## Change your information

| What to change | File |
| --- | --- |
| Email, LinkedIn, GitHub and project details | `lib/portfolio.ts` |
| Intro, skills, education and section content | `app/page.tsx` |
| Colors, layout and responsive styling | `app/globals.css` |
| Browser title and description | `app/layout.tsx` |
| Downloadable resume | `public/suryadeep-jadeja-resume.pdf` |
| Favicon | `public/favicon.svg` |

Replace the PDF using the same filename to keep existing download buttons working.

## Project links

The portfolio is separate from the applications described in its project cards. Notes App and User Management API currently have no supplied public repository or demo links. Add the real URLs to their project records after publishing those applications. Bajrang Travels' supplied project and source links are included; verify their availability before job outreach.

Email links open the visitor's mail application. LinkedIn and GitHub links open the relevant profiles. Copy email uses the browser clipboard and shows a fallback message when clipboard access is unavailable.

## Included reference analysis

`PORTFOLIO-ANALYSIS.md` contains the six-reference comparison and the reasoning behind the content and layout. Vendor CSS attribution is included alongside its stylesheet.

## Documentation

- Next.js setup: https://nextjs.org/docs/app/getting-started/installation
- Next.js on Vercel: https://vercel.com/docs/frameworks/full-stack/nextjs
