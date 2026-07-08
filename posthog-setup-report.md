# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the MotleyTech website. PostHog is initialized via `instrumentation-client.ts` (the correct approach for Next.js 15.3+), with a reverse proxy configured in `next.config.js` to route events through `/ingest` and avoid ad blockers. The homepage (`src/app/page.tsx`) was converted to a client component to enable click tracking on CTA buttons and navigation links. `ProfileCard.tsx` and `Footer.tsx` were similarly updated to capture LinkedIn and footer email interactions. Environment variables are stored in `.env.local`.

| Event Name | Description | File |
|---|---|---|
| `cta_start_project_clicked` | User clicks the primary "Start a Project" CTA in the hero section | `src/app/page.tsx` |
| `cta_see_services_clicked` | User clicks the secondary "See Services" button in the hero section | `src/app/page.tsx` |
| `contact_email_clicked` | User clicks the contact email link in the contact section | `src/app/page.tsx` |
| `nav_link_clicked` | User clicks a navigation link in the site header | `src/app/page.tsx` |
| `linkedin_profile_clicked` | User clicks a team member's LinkedIn profile link | `src/components/ProfileCard.tsx` |
| `footer_email_clicked` | User clicks the email link in the site footer | `src/components/Footer.tsx` |

## Next steps

We've built some insights and a dashboard to keep an eye on user engagement and conversions:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/502480/dashboard/1814491)
- [CTA Click Trends](https://us.posthog.com/project/502480/insights/Eg5MSOJL)
- [Contact Conversion Funnel](https://us.posthog.com/project/502480/insights/wl0cpV0s)
- [Email Contact Clicks](https://us.posthog.com/project/502480/insights/P3uus1yX)
- [Navigation Engagement](https://us.posthog.com/project/502480/insights/w79PefOa)
- [LinkedIn Profile Clicks](https://us.posthog.com/project/502480/insights/lRr7mmVb)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` to `.env.example` and any monorepo/bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
