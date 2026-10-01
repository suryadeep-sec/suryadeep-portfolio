# Portfolio analysis and build decisions

Prepared for Suryadeep Sinh Jadeja, 1 October 2026.

The portfolio's purpose is to make an early-career MERN candidate easy to understand and evaluate. This review compares the published content and information structure of six references. It does not establish hiring conversion rates, employer preferences for a particular design, or measured loading performance. Conclusions below are design judgments, not statistical hiring claims.

## What each reference contributes

| Reference | Relevant observation | Adaptation for this portfolio | Boundary |
| --- | --- | --- | --- |
| [Minimal portfolio reference](https://minimal-portfolio-swart.vercel.app/) | A Next.js developer introduction, project collection, stack section, testimonials and approach section. Published text uses Adrian Hajdin's identity and repeats the same testimonial. | Use a dark visual direction, consistent cards, restrained depth and a clear project collection. | The supplied reference's identity, projects, testimonials and employment history cannot become the user's credentials. |
| [Brittany Chiang](https://brittanychiang.com/) | A specific role, experience descriptions, technology labels, project explanations and a full resume link. | Make the role explicit and describe the purpose and implementation of each project. | A senior engineer's employment history and product reach are not evidence about a fresher. |
| [Kunal Deshmukh](https://www.kunaldeshmukh.dev/) | MERN positioning, availability, location, project links and a downloadable CV. | Place role, location, contact and resume access close to the introduction. | Do not copy competitive rankings or make unsupported production claims. |
| [Vijay Kumar Kushwaha](https://kushvijay234.github.io/Portfolio/) | Project descriptions explain business functions, such as billing, role access, authentication and order workflows, with code and preview links. | Explain what each application does, then make its engineering details available. | Feature claims must match the user's implemented code; listed optimization percentages are not transferable. |
| [Anand Darji](https://anandtech.live/) | MERN skills are grouped by responsibility, including backend, database and security. | Group the user's skills into frontend, backend, data/tools and security foundation. | Security lab experience should not imply audited applications or enterprise security experience. |
| [Braydon Coyer](https://www.braydoncoyer.dev/) | Personal introduction, projects, writing and public technical experiments. | Give the about section a personal voice and connect to GitHub. | Do not add a fabricated blog archive, talks, clients or community activity. |

## Three reviewer journeys

### HR or recruiting reviewer

The opening content answers: who is the candidate, what role do they want, where are they based and how can I contact them? The role is MERN Stack Developer. The location is Jamnagar. MCA 2026-2028 is marked in progress. Resume, email and LinkedIn links are directly accessible.

The portfolio is one supporting part of an application. Employers may start with a resume, an application form, a referral or another channel. It is not safe to assume every reviewer opens the portfolio first.

### Engineering reviewer

Each project offers more than a title and stack badges. Project details explain the problem, the user's contributions, implementation choices and current status. Notes App includes its implemented CRUD API overview. The website does not claim login is completed in that specific project. Bajrang Travels is accurately identified as Next.js/Supabase rather than MERN.

Source and project links use supplied URLs. There are no guessed repositories. When a repository or demo is not linked, the reviewer can request a walkthrough by email. The third featured project is the earlier registration/login API learning project, which is more concrete evidence than presenting a planned image upload feature as completed.

### Founder or small-company reviewer

Project summaries connect features to a practical purpose: managing notes, displaying services, receiving enquiries and working with user records. A visible contact section gives a direct next action. It does not claim commercial delivery, paid clients or business outcomes without evidence.

## Visual and interaction decisions

- Dark charcoal surfaces, a lime accent, readable text and restrained cyan/purple details establish a developer identity without making navigation difficult.
- The hero's MERN architecture panel explains the four technologies. It uses lightweight layout and icons, rather than requiring visitors to navigate a 3D scene.
- Main content renders in the initial page response. There is no intentional intro delay or animation gate.
- Navigation uses section anchors. Project details use accessible dialogs with keyboard focus handling, escape-to-close and clear titles.
- Email actions open the visitor's mail app. They do not claim a message was sent. Copy email reports success only after the clipboard operation succeeds.
- Download links point to an actual one-page PDF. Its facts match the website.
- Layout rules cover mobile, tablet and desktop. Reduced-motion preferences disable transitions and perspective. Visible keyboard focus and a skip link are included.
- No fictional skill percentages, testimonial quotes, client logos, GitHub counters, years of experience or project impact metrics are added.

## Content evidence

Name, email, LinkedIn and GitHub are from previously supplied user details. Education is from the user's stated BCA/MCA background. Notes CRUD and its unfinished authentication state are from the project conversation. Registration/login and bcrypt in the earlier user-management learning project are from the user's confirmed earlier progress.

Bajrang Travels' local source was available for inspection. Its package manifest uses Next.js, React, TypeScript, Tailwind and Supabase. Source includes service pages, appointment and contact routes, and admin content pages. That establishes implementation evidence, not real customer usage. The public demo could not be read by the available web lookup service; current external availability remains unverified.

## Priority improvements before broad job outreach

1. Publish the MERN Notes App repository and a working demo, then add those exact links to the project record. This is the highest-value missing proof for MERN hiring.
2. Add screenshots captured from the actual applications. Current project panels are labeled technical overviews, not screenshots.
3. Complete Notes App authentication and authorization, then update only the features that are implemented and verified.
4. Verify the Bajrang Travels demo and repository from a normal browser before sharing them widely.
5. Review the resume and availability against each application. As the MCA is ongoing, actual start date and working-hour availability should be discussed directly.

These changes can improve clarity and credibility. Rejection still depends on role fit, skills, interview performance, opening availability and other hiring factors; no design guarantees selection.

## Maintenance

Edit profile and project facts in `lib/portfolio.ts`. Page composition is in `app/page.tsx`; appearance and responsive rules are in `app/globals.css`. Replace `public/suryadeep-jadeja-resume.pdf` to update the downloadable resume. This export uses standard Next.js scripts for local development and Vercel hosting.
