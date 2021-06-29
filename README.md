# Fakeflix

> Not the usual clone that you can find on the web.

![Image of Fakeflix Project](https://cdn.jsdelivr.net/gh/Th3Wall/assets-cdn/Fakeflix/Fakeflix_readme.png)

https://user-images.githubusercontent.com/25078541/123811962-01474580-d8f4-11eb-83ba-66cded3f321f.mp4

<br/>

## 🎯 About

I have started this project with the purpose of learning how to structure a Web App of a mid-level complexity integrating the Redux logic.<br/>
I've tried to replicate the original layout as much as possible and I've also made some improvements in some sections inserting route animations and micro-interactions. I've also inserted a really close clone of Netflix's original splash animation, made entirely with CSS, as well as the play animation.<br/>
I put a lot of effort into it and I hope that you could like it.<br/><br/>
The Web App redirects you to an authentication page, in which you can choose to sign up or to sign in: you can sign in with your custom account or with your Google account. Once you are logged in and after the splash animation, you will land on the homepage, in which you can find a mix of movies and series divided into rows.<br/>
Each row represents a movie/series category: you can click on it and you will be redirected to the selected category, a page that loads thousands of movies with an infinite scroll. You can also navigate to the movies page, series page, new & popular page (that contains the upcoming movies/series and the most popular ones) or you can navigate to your favorites page.<br/>
You can add/remove movies/series through the plus and minus buttons that you can find hovering each poster or opening a single movie's detail modal. If you click on the play button you can enjoy a custom CSS-only play animation with Fakeflix's brand name.<br/>
You have also the option to search through TMDd's catalogue using the search functionality inside the fixed navbar: you can search by movie name, actor or movie director.<br/><br/>
Go try it and please let me know if enjoyed it with a ⭐️, I would appreciate it a lot.
<br/>

## ▶️ Demo

Here you can find the demo links:

-   [Vercel](http://fakeflixapp.vercel.app/)
-   [Netlify](http://fakeflixapp.netlify.app/)

### Test credentials (for lazy users 😓)

> Email: fakeflixuser@test.com<br/>
> Password: FakeflixTest<br/>

## :sparkles: Features

:heavy_check_mark: &nbsp;&nbsp;Display movies and series, old and upcoming, also from the real Netflix<br />
:heavy_check_mark: &nbsp;&nbsp;Category related page with infinite scroll<br />
:heavy_check_mark: &nbsp;&nbsp;Search by title, actor, movie director<br />
:heavy_check_mark: &nbsp;&nbsp;Add/Remove to/from "My list" functionality<br />
:heavy_check_mark: &nbsp;&nbsp;Detail modal with extra informations about the selected movie/series<br />
:heavy_check_mark: &nbsp;&nbsp;Customized splash animation (credits: [Claudio Bonfati's pen](https://codepen.io/claudio_bonfati/pen/mdryxPv)) with characteristic Netflix sound<br />
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

-   [TMDb API's](https://www.themoviedb.org/)
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
-   [React Icons](https://react-icons.github.io/react-icons/)
-   [Netlify](https://www.netlify.com) (have a look below) and [Vercel](https://vercel.com/) for the deploy and CI.

## Netlify deploy & configuration

[![Netlify Status](https://api.netlify.com/api/v1/badges/14a32bbb-d899-445d-8fa6-8bed739c0296/deploy-status)](https://app.netlify.com/sites/fakeflixapp/deploys)

### Deploy configuration steps

1. Connect your GitHub account to Netlify
2. Select the project
3. In Settings → Build & Deploy → Set **Build command** to : **_npm run build_**
4. In Settings → Build & Deploy → Set **Publish directory** to : **_build_**
5. In Settings → Build & Deploy → Set **Environment variables** → Click on **Edit variables** and add yours (ie: TMBd's API key, Firebase configuration).
   <br/>

## :white_check_mark: Requirements

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.
<br/>

## 📸 Screenshots
	
**Sign In**
![Screenshot of Fakeflix Sign In](https://cdn.jsdelivr.net/gh/Th3Wall/assets-cdn/Fakeflix/screenshots/Fakeflix_SignIn.jpg)
<br/>

**Sign Up**
![Screenshot of Fakeflix Sign Up](https://cdn.jsdelivr.net/gh/Th3Wall/assets-cdn/Fakeflix/screenshots/Fakeflix_SignUp.jpg)
<br/>

**Homepage**
![Screenshot of Fakeflix Homepage](https://cdn.jsdelivr.net/gh/Th3Wall/assets-cdn/Fakeflix/screenshots/Fakeflix_Home.jpg)
<br/>

**Modal Detail**
![Screenshot of Fakeflix Modal Detail](https://cdn.jsdelivr.net/gh/Th3Wall/assets-cdn/Fakeflix/screenshots/Fakeflix_DetailModal.jpg)
<br/>

**Mobile Experience**

https://user-images.githubusercontent.com/25078541/123543831-b8a35700-d750-11eb-84dc-b53e5a9a997a.mp4

<br/>

**Desktop Experience**

https://user-images.githubusercontent.com/25078541/123811962-01474580-d8f4-11eb-83ba-66cded3f321f.mp4

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
