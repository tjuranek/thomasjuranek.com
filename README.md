# thomasjuranek.com

One-page personal site for Thomas Juranek. Static HTML/CSS on Cloudflare Workers.

## Local

```bash
npm ci
npm run dev
```

## Deploy

Requires `CLOUDFLARE_API_TOKEN` (and optionally `CLOUDFLARE_ACCOUNT_ID`) in the environment.

```bash
npm ci
npm run deploy
```

Pushes to `master` deploy via GitHub Actions using the `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` repository secrets.
