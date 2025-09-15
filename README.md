# jbook

[中文说明](./README.zh.md)

jbook is a Jupyter-like notebook for running JavaScript and TypeScript snippets in your browser. It lets you mix Markdown and code cells and see results instantly. The project is published on npm, so you can create notebooks anywhere with a single command.

## Run as a user

1. Make sure [Node.js](https://nodejs.org/) is installed.
2. Start the notebook server in any folder:

```bash
npx jsnote-sunflower serve notebook.js --port 4005
```

Open <http://localhost:4005> in your browser. A file named `notebook.js` will be created in the current directory to store your cells. Use the `--port` option to choose a different port.

## Develop locally

1. Clone this repository and install dependencies:

```bash
npm install
```

2. Launch all packages in watch mode:

```bash
npm start
```

This runs the local API server and the React client simultaneously via Lerna. The client is served on port 3000, and the API listens on port 4005 and proxies browser requests during development.

To run tests inside the React client package:

```bash
cd packages/local-client
npm test
```

## Project structure

- **packages/cli** – command line interface published as `jsnote-sunflower`.
- **packages/local-api** – Express server that loads and saves notebook files.
- **packages/local-client** – React application providing the notebook UI.

## License

ISC

