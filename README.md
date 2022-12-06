# Vue3 Webpack Template
## Plugins & Configurations
- `resolve.alias` : use alias to import from `src/` folder 
- `resolve.extensions`: handle `.vue` and `.js` extensions omission during import
- `output.clean`: clean output directory before emit
- `copy-webpack-plugin`: get `favicon.ico` from `static/`
- `html-webpack-plugin`: get `index.html` from template

## Get Started
```bash
  # To install node_modules
  $ npm i

  # To start local server
  $ npm start

  # To bundle & build output directory
  $ npm run build
```