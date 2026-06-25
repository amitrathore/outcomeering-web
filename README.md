# Outcome Machines Website

Static GitHub Pages site for Outcome Machines and Outcomeering.

## Positioning

- **Outcome Machines**: category and company thesis.
- **Outcomeering**: the management discipline for engineering outcomes.
- **Outcomeer**: the practitioner identity.
- **Outcomeering book**: thought leadership and waitlist.
- **DatacentrIQ**: soft-linked product/platform page.

## Routes

```text
/                Homepage and category creation
/outcomeering/   Discipline and framework
/book/           Book and waitlist
/datacentriq/    Platform and early access
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
