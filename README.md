# rewild

[Docs](https://docs.google.com/document/d/1D5ddyvPQDwAFBVkzT5l-4JANpnm1M-E--sHL5aKveW4/edit?tab=t.0)

Host a static site from your own computer with no hassle.

# Development

## App

first, install NPM.

then do `npm run dev`. 

## Docker

First, install Docker Desktop at https://docs.docker.com/get-started/get-docker/.

Navigate to the `src/docker` directory. From here, run one of the following commands:
1.  `docker-compose --profile dev up`.  
This will run the website locally and automatically reload any changes. you can access it from your browser at `localhost:4000`.
1.   `docker-compose --profile production up` This will build the static Jekyll app, and mount the Nginx server to the `_site/` directory containing the bundled static files. 



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
