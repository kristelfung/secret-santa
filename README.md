# Secret Santa Generator

Frontend secret santa generator. Names are shuffled using Sattolo's algorithm. To send secret santa assignments, send the link generated next to the santa's name.

To obfuscating the name, we encrypt the recipient's name in the URL and pass it as a query param. It is then decrypted by the frontend and displayed in the browser.

Technically, the encrypt key should be stored in an environment variable, but for demo purposes I've just hardcoded it as `sample-key` to make it easier to get started.

This project is bootstrapped by [Vite](https://v3.vitejs.dev/guide/).

## Getting Started

Clone the repository and install dependencies.

```
npm install
```

To run the dev server, run

```
npm run dev
```
