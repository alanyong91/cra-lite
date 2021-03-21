# CRA Lite

Lite version of CRA with Webpack 5 configuration.

## Setup

### Installation

```linux
npm ci
```

**Why use `npm ci` instead of `npm install`?**

Use `npm install` to add new dependencies, and to update dependencies on a project. Usually, you would use it during development after pulling changes that update the list of dependencies but it may be a good idea to use `npm ci` in this case.

Use `npm ci` if you need a deterministic, repeatable build. For example during continuous integration, automated jobs, etc. and when installing dependencies for the first time, instead of `npm install`.

_Copy from <https://stackoverflow.com/a/53325242/1550617>_

`Yarn` is not install in this project, hence only can run with `npm`

### Copy `.env` File

```linux
cp .env.example .env
```

### Start Dev

```linux
npm run dev
```

`PORT` by default is `8000`
You may change the `PORT` in `.env` file

### Build

```linux
npm run build
```

Webpack will create the bundle and save in `./static` folder.
You can the folder name in `webpack.common.js` at line 19.

## What INCLUDED in CRA Lite but NOT in CRA

- Webpack 5 (CRA still using Webpack 4)
- SASS (if you prefer less, you need configure yourself)
- come with `react-router-dom` and `typescript`
- other configuration file like `.prettierrc`, `.babelrc`, `.eslintrc` and `.eslintignore`
- webpack `dev` and `prod` configuration

## What NOT INCLUDED in CRA Lite but in CRA

- jest (we all have our own unit test preferences)
- web-vitals
- other dev dependencies (can check if eject CRA)

## FAQ

1. Is `cra-lite` better than `cra`?

   - Depends on your perspective, some developers prefer configure themselves. But long term projects, I would recommend configure yourself. This article will explain why frontend developers need to know webpack (<https://blog.bitsrc.io/why-frontend-developers-need-to-be-webpack-experts-32e734b6f04a>)

2. Why I'm doing this?
   - Just for fun. I hate everytime I create React application I need to install `react-router-dom` and setup `.eslint`. So next time I just clone this repo and start my work

## Let's get in touch

- LinkedIn: <https://www.linkedin.com/in/alanyong91/>
- GitHub: <https://github.com/alanyong91>
- Stackoverflow: <https://stackoverflow.com/users/1550617/alan-yong>

Hope you like it!
