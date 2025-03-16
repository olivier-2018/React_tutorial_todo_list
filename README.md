# React-vite tutorial project (TODO list)

## Setup

install node:

```bash
# install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
# nvm install <node_version>, nvm install --lts
# nvm current
# nvm list
# nvm use <node_version>,  nvm use --lts
```

install node package manager:

```bash
sudo npm install -g npm
# npm run <foo>
```

Create pre-filled folder (first time only):

```bash
npm create vite@latest
```

then select:

- project name: . for local folder
- package filename: "package.json"
- framework: "React"
- variant: "JavaScript + SWC"

Run project (check package.json for available script):

```bash
npm run dev
```

## Note on React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
