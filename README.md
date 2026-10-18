# Rabia Habib — Portfolio

Next.js App Router, TypeScript, and Tailwind CSS. Statically generated homepage and three project pages, with downloadable CV, structured data, canonical links, sitemap, and robots.txt.

## Local development

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open http://localhost:3000. On Windows PowerShell where script execution is restricted, use `npm.cmd` instead of `npm`.

## Deploy to Vercel

1. Push this folder to a personal GitHub repository.
2. Import the repository at https://vercel.com/new and select the Next.js preset.
3. Set `NEXT_PUBLIC_SITE_URL` to your actual production URL, including `https://` and no trailing slash, before deploying. This controls canonical URLs, structured data, sitemap, and robots.txt. The source contains a placeholder URL; replace it for production.
4. Deploy. The build command is `npm run build`. Keep the Next.js preset defaults for output settings.
5. When adding a custom domain, update `NEXT_PUBLIC_SITE_URL` and redeploy, then submit `/sitemap.xml` to Google Search Console.

Vercel Hobby is intended for personal, non-commercial use and has usage limits. A custom domain is optional and purchased separately.

## Validation

```sh
npm run build
npm run typecheck
```

`output: 'export'` produces a static site in `out/`. No backend, database, or paid API is required. Contact uses email and LinkedIn links.

## Content

- Homepage: `app/page.tsx`
- Project descriptions: `lib/site.ts`
- Styles: `app/globals.css`
- Metadata: `app/layout.tsx`
- Downloadable CV: `public/Rabia-Habib-CV.docx`

Content is based on the supplied CV. Project interfaces on the homepage are illustrative graphics, not screenshots. No client names beyond those supplied, performance metrics, testimonials, or repository links have been invented. Contact email and CV are public website assets; review them before publishing.
