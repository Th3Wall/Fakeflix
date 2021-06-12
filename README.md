![Image of Fakeflix Project](https://cdn.jsdelivr.net/gh/Th3Wall/assets-cdn/Fakeflix/Fakeflix_readme.png)

# Fakeflix

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 🎯 About

Lorem Ipsum Dolor Sit Amet Consecteur Discipit elit.
<br/>

## ▶️ Demo

Here you can find the demo links:

-   [Vercel](http://fakeflixapp.vercel.app/)
-   [Netlify](http://fakeflixapp.netlify.app/)
    <br/>

## :sparkles: Features

:heavy_check_mark: &nbsp;&nbsp;Display movies and series, old and upcoming, also from the real Netflix<br />
:heavy_check_mark: &nbsp;&nbsp;Category related page with infinite scroll<br />
:heavy_check_mark: &nbsp;&nbsp;Search by title, actor, movie director<br />
:heavy_check_mark: &nbsp;&nbsp;Add to "My list"<br />
:heavy_check_mark: &nbsp;&nbsp;Detail modal with extra infos<br />
:heavy_check_mark: &nbsp;&nbsp;Splash animation (credits: [Claudio Bonfati's pen](https://codepen.io/claudio_bonfati/pen/mdryxPv)) with characteristic Netflix sound<br />
:heavy_check_mark: &nbsp;&nbsp;Play animation with characteristic Netflix sound<br />
:heavy_check_mark: &nbsp;&nbsp;Google login<br />
:heavy_check_mark: &nbsp;&nbsp;User Sign In & User Sign Up<br />
:heavy_check_mark: &nbsp;&nbsp;Use of React hooks and custom hooks<br />
:heavy_check_mark: &nbsp;&nbsp;Favourites list persistence (session storage)<br />
:heavy_check_mark: &nbsp;&nbsp;Responsive layout<br />
:heavy_check_mark: &nbsp;&nbsp;Swipeable movies list<br />
:heavy_check_mark: &nbsp;&nbsp;Loading skeletons<br />
:heavy_check_mark: &nbsp;&nbsp;Route animations and micro-interactions (handled with Framer Motion)<br />

## :rocket: Technologies

-   [React](https://reactjs.org/)
-   [React Hooks](https://reactjs.org/docs/hooks-intro.html)
-   [React Hooks Form](https://react-hook-form.com/)
-   [React Router](https://reactrouter.com/web/guides/quick-start)
-   [Redux](https://redux.js.org/)
-   [Redux Thunk](https://github.com/reduxjs/redux-thunk)
-   [Redux Saga](https://redux-saga.js.org/)
-   [Redux Persist](https://github.com/rt2zz/redux-persist)
-   [Redux Logger](https://github.com/LogRocket/redux-logger)
-   [Reselect](https://github.com/reduxjs/reselect)
-   [Firebase](https://firebase.google.com/)
-   [SCSS](https://sass-lang.com/)
-   [SwiperJS](https://swiperjs.com/react)
-   [Framer Motion](https://www.framer.com/motion/)
-   [Netlify (have a look below)](https://www.netlify.com) and [Vercel](https://vercel.com/) for the deploy and CI.

## Netlify deploy & configuration

[![Netlify Status](https://api.netlify.com/api/v1/badges/14a32bbb-d899-445d-8fa6-8bed739c0296/deploy-status)](https://app.netlify.com/sites/fakeflixapp/deploys)

### Deploy configuration steps

1. Connect your GitHub account to Netlify
2. Select the project
3. In Settings → Build & Deploy → Set **Build command** to : **_npm run build_**
4. In Settings → Build & Deploy → Set **Publish directory** to : **_build_**
5. In Settings → Build & Deploy → Set **Environment variables** → Click on **Edit variables** and add yours (ie: TMBD API key, Firebase configuration).
   <br/>

## :white_check_mark: Requirements

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.
<br/>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
