# SF Digital Services - Front-end Take-home Assignment

## Powered by: 11ty & Deventy

[Deventy](https://github.com/ianrose/deventy) is a minimal [11ty](https://www.11ty.io) starting point for building static websites with modern tools. Uses the CLI of each tool. Allowing a much easier upgrade path for each individual development tool.

Features:

- [11ty](https://www.11ty.io/)
- [Sass/SCSS](https://github.com/sass/node-sass)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [light-server](https://github.com/txchen/light-server)
- [PostCSS](https://postcss.org/)
- [CSSnano](https://cssnano.co/)
- [Autoprefixer](https://github.com/postcss/autoprefixer)

### Getting Started

Install all dependencies using Yarn:

```
$ yarn
```

#### To Develop

```
$ yarn run dev
```

And in debug mode:

```
$ yarn run dev:debug
```

You can view the website at the given access URL:

```
$ light-server is listening at http://localhost:4000
```

The local url is configured in `.lightserverrc`

#### To Build

```
yarn run build
```

#### To Review

All commits to `master` are automatically deployed via Netlify to: [mhoex-sfds-take-home.netlify.com](https://mhoex-sfds-take-home.netlify.com/)

### Next Steps

- [ ] Finish newsletter form design
  - [ ] Error/info/success messaging
  - [ ] Style `<select>` better with full style reset
  - [ ] Add `svg` icon
- [ ] Add `svg` icon to subnav
- [ ] Add transitions for `:hover` on nav and subnav items
- [ ] Style `:focus` better
- [ ] Style current navigation item
