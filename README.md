Suryadeep Jadeja — MERN Developer Portfolio
My personal portfolio, built to share my projects, development skills and learning journey. I am a BCA graduate pursuing an MCA in Jamnagar, Gujarat, with a focus on MERN development and a foundation in cybersecurity.
GitHub · LinkedIn · Email
About the project
This website brings my work, skills, education and contact details into one place. Each featured project includes the problem it addresses, my contributions, the technical decisions and its current status.
The portfolio itself uses Next.js and React. It showcases MERN applications and other web projects; their application backends and databases are separate from this repository.
Features
- Responsive layout for mobile, tablet and desktop.
- Dark design with lime accents and clear section navigation.
- Featured project cards with detailed case-study dialogs.
- Skills grouped by frontend, backend, database and supporting foundations.
- About and education sections.
- Downloadable PDF résumé.
- Direct email, GitHub and LinkedIn links.
- Copy-email action with feedback.
- Page title, description and favicon.
Technology stack
Technology	Purpose
Next.js 16	App Router, development server and production builds
React 19	Components and interactive UI
TypeScript	Type checking
Tailwind CSS 4 and custom CSS	Styling and responsive layout
Radix UI	Project dialog components
Lucide React	Interface icons


Featured work
Project	Stack	What it demonstrates
MERN Notes App	React, Node.js, Express, MongoDB	Note creation, reading, editing and deletion through a REST API
Bajrang Travels	Next.js, TypeScript, Tailwind CSS, Supabase	Business pages, service listings, enquiries and an admin content interface
User Management API	Node.js, Express, Mongoose, bcrypt	Registration and login fundamentals, user records and password hashing


Project details and available demo/source links are maintained in [`lib/portfolio.ts`](lib/portfolio.ts).
Run locally
Requirements: Node.js 20.9 or newer and npm.
Clone or download this repository, then open the folder containing package.json in your terminal:
npm install
npm run dev
Open http://localhost:3000.
The portfolio does not require a database connection, API keys or environment variables. Press Ctrl+C to stop the development server.
Available commands
Command	Purpose
npm run dev	Start the development server
npm run build	Create a production build
npm start	Serve the production build
npm run typecheck	Check TypeScript without emitting files


To preview the production build locally:
npm run build
npm start
Project structure
Path	Contents
app/page.tsx	Portfolio sections and interactive behavior
app/layout.tsx	Root layout and page metadata
app/globals.css	Colors, typography, layout and responsive styles
components/	Shared UI and brand-icon components
lib/portfolio.ts	Profile data and featured projects
lib/utils.ts	Shared styling utilities
public/	Résumé PDF and favicon
vendor/	Vendor stylesheet and its attribution
PORTFOLIO-ANALYSIS.md	Reference analysis and design reasoning


Personalize the content
- Edit [`lib/portfolio.ts`](lib/portfolio.ts) to update contact links and project descriptions.
- Edit [`app/page.tsx`](app/page.tsx) to update the introduction, skills and education.
- Edit [`app/globals.css`](app/globals.css) to change the visual design.
- Edit [`app/layout.tsx`](app/layout.tsx) to update the browser title and description.
- Replace public/suryadeep-jadeja-resume.pdf with an updated résumé using the same filename.
Deploy on Vercel
1. Push this project to GitHub.
2. Open Vercel and import the repository.
3. Select Next.js as the framework preset.
4. Use the directory containing package.json as the root directory.
5. Keep the build command as npm run build and leave the output-directory override disabled.
6. No environment variables are required for this portfolio.
7. Click Deploy.
After connecting the repository, pushes to the production branch trigger new Vercel deployments.
Contact
I am interested in MERN internships and junior developer opportunities.
- Name: Suryadeep Sinh Jadeja
- Location: Jamnagar, Gujarat, India
- Email: rmjadeja142@gmail.com
- LinkedIn: Suryadeep Jadeja
- GitHub: suryadeep-sec
References
- Next.js documentation
- Next.js deployment on Vercel
- Third-party stylesheet attribution: [`vendor/shadcn-tailwind-4.13.0.LICENSE.md`](vendor/shadcn-tailwind-4.13.0.LICENSE.md)
