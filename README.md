# Outcomeering Website

Static GitHub Pages site for Outcomeering, the book, the Outcomeer role, and the Outcomeers community.

## Positioning

- **Outcomeering**: the discipline and category.
- **Outcomeering book**: thought leadership and waitlist.
- **Outcomeer**: the practitioner identity.
- **Outcomeers**: the community for people applying the discipline.
- **Outcome Machines**: the company bringing Outcomeering to market through platform infrastructure and services for enterprises and SMBs.

## Routes

```text
/                Movement and category page
/outcomeering/   Discipline and framework
/book/           Book and waitlist
/outcomeers/     Role and community
/company/        Outcome Machines platform and services
/datacentriq/    Redirects to /company/
```

## Local Development

```bash
python3 -m http.server 8000
```

Then visit `http://127.0.0.1:8000`.

## Deployment

The site deploys to GitHub Pages through `.github/workflows/pages.yml`.

Custom domain:

```text
outcomeering.com
```

The repo includes `CNAME` and `.nojekyll` for GitHub Pages.
