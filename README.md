![E2E Testing](https://github.com/joeyyax/joeyyax.com/actions/workflows/cypress.yml/badge.svg) ![Code Quality](https://github.com/joeyyax/joeyyax.com/actions/workflows/codeql-analysis.yml/badge.svg) [![Code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# Joey Yax

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

![Homepage](./cypress/screenshots/home.spec.js/desktop.png?raw=true "Homepage")

## Run the site locally

```sh
npm install
npm run dev
```

## Run in production

```sh
npm install
npm run build
npm run start
```

## Tests

End-to-end tests are run with [cypress](https://www.cypress.io/).

```sh
npm run e2e # run in Cypress app
npm run e2e.headless # runs in terminal
```
