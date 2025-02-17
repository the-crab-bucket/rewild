# rewild

[Docs](https://docs.google.com/document/d/1D5ddyvPQDwAFBVkzT5l-4JANpnm1M-E--sHL5aKveW4/edit?tab=t.0)

Host a static site from your own computer with no hassle.

# Development

## Running the Server App

1. Install NPM using the preferred method for your OS. Make sure to use the latest version of Node (23.8 as of writing).
1. From the root of the project, run `npm install`.
1. Then do `npm run dev`. 

## Docker Development / Manual Hosting (auto setup WIP)

First, install Docker Desktop at https://docs.docker.com/get-started/get-docker/.

Navigate to the `src/docker` directory. From here, run one of the following commands:
1.  `docker-compose --profile dev up`.  
This will run the website locally and automatically reload any changes. you can access it from your browser at `localhost:4000`.
1.   `docker-compose --profile prod up` This will build the static Jekyll app, and mount the Nginx server to the `_site/` directory containing the bundled static files. 
I recommend saving these commands to an alias because of their unfortunate verbosity.

### Cloudflare
To actually publish your site to the public facing web, we use a secure Cloudflare Tunnel.
The tunnel connects an isolated port on your computer to Cloudflare's network. 
Of course, to be on the web, you must buy and set up your domain credentials with both Cloudflare and whoever you bought it from. 
I suggest buying your domain name from Cloudflare for simplicity, but I have domains on Namecheap and GoDaddy as well.
- [Cloudflare Dashboard](https://one.dash.cloudflare.com/)

1. Click on Cloudflare Dashboard above.
1. Click on the horizontal menu bars in the top left
1. Scroll down and click on "Zero Trust"
1. Again in the menu, click on "Networks" -> "Tunnels"
1. Click the "Create a tunnel" button.
1. Select Cloudflared.
1. Name your tunnel something simple and relevant.
1. Copy the connector command and get the token.
1. Save the token to your `.env` file 
    - `TUNNEL_TOKEN=<token>`

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
