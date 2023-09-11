<a href="https://fakeflix.th3wall.codes">
  <img alt="Fakeflix – Not the usual clone that you can find on the web" src="https://cdn.jsdelivr.net/gh/Th3Wall/assets-cdn/Fakeflix/Fakeflix_readme.png">
  <h1 align="center">Fakeflix</h1>
</a>

<p align="center">
  Not the usual clone that you can find on the web.
</p>

<p align="center">
  <a href="https://twitter.com/Th3Wall25">
    <img src="https://img.shields.io/twitter/follow/Th3Wall25?style=flat&label=Th3Wall25&logo=twitter&color=0bf&logoColor=fff" alt="Twitter" />
  </a>
</p>

<p align="center">
  <a href="#-about"><strong>About</strong></a> ·
  <a href="#%EF%B8%8F-demo"><strong>Demo</strong></a> ·
  <a href="#sparkles-features"><strong>Features</strong></a> ·
  <a href="#rocket-technologies"><strong>Technologies</strong></a> ·
  <a href="#-screenshots"><strong>Screenshots</strong></a> ·
  <a href="#-run-locally"><strong>Run Locally</strong></a> ·
  <a href="#white_check_mark-requirements"><strong>Requirements</strong></a> ·
  <a href="#-license"><strong>License</strong></a> ·
  <a href="#-star-history"><strong>Star history</strong></a>
</p>
<br/>

https://user-images.githubusercontent.com/25078541/123811962-01474580-d8f4-11eb-83ba-66cded3f321f.mp4

<br/>

## 🎯 About

I have started this project with the purpose of learning how to structure a Web App of a mid-level complexity integrating the Redux logic.<br/>
I've tried to replicate the original layout as much as possible and I've also made some improvements in some sections inserting route animations and micro-interactions. I've also inserted a really close clone of Netflix's original splash animation (forked from a famous [codepen from Claudio Bonfati](https://codepen.io/claudio_bonfati/pen/mdryxPv)), made entirely with CSS, as well as the play animation. I have then sampled the original Netflix "ta-duummm" sound and I made it play along with the two animations.<br/>
I put a lot of effort into it and I hope that you could like it.<br/><br/>
The Web App redirects you to an authentication page, in which you can choose to sign up or to sign in: you can sign in with your custom account or with your Google account. Once you are logged in and after the splash animation, you will land on the homepage, in which you can find a mix of movies and series divided into rows.<br/>
Each row represents a movie/series category: you can click on it and you will be redirected to the selected category, a page that loads thousands of movies with an infinite scroll. You can also navigate to the movies page, series page, new & popular page (that contains the upcoming movies/series and the most popular ones) or you can navigate to your favorites page.<br/>
You can add/remove movies/series through the plus and minus buttons that you can find hovering each poster or opening a single movie's detail modal. If you click on the play button you can enjoy a custom CSS-only play animation with Fakeflix's brand name.<br/>
You have also the option to search through TMDB's catalogue using the search functionality inside the fixed navbar: you can search by movie name, actor or movie director.<br/><br/>
Go try it and please let me know if you enjoyed it with a ⭐️, I would appreciate it a lot.

<br/>

## ▶️ Demo

Here you can find the demo link:

- [Demo](https://fakeflix.th3wall.codes)

### Test credentials (for lazy users 😓)

> Email: fakeflixuser@test.com<br/>
> Password: FakeflixTest<br/>

I have also added a button that lets you sign in anonymously.

<br/>

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

<br/>

## :rocket: Technologies

- [TMDb API's](https://www.themoviedb.org/)
- [React](https://reactjs.org/)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React Hooks Form](https://react-hook-form.com/)
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [Redux](https://redux.js.org/)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Redux Saga](https://redux-saga.js.org/)
- [Redux Persist](https://github.com/rt2zz/redux-persist)
- [Redux Logger](https://github.com/LogRocket/redux-logger)
- [Reselect](https://github.com/reduxjs/reselect)
- [Firebase](https://firebase.google.com/)
- [SCSS](https://sass-lang.com/)
- [SwiperJS](https://swiperjs.com/react)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Netlify](https://www.netlify.com) (have a look below) and [Vercel](https://vercel.com/) for the deploy and CI.

### Deploy configuration steps

1. Connect your GitHub account to Netlify
2. Select the project
3. In Settings → Build & Deploy → Set **Build command** to : **_npm run build_**
4. In Settings → Build & Deploy → Set **Publish directory** to : **_build_**
5. In Settings → Build & Deploy → Set **Environment variables** → Click on **Edit variables** and add yours (ie: TMBd's API key, Firebase configuration).

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

## 👨🏻‍💻 Run Locally

- Clone the project

```bash
  git clone https://github.com/Th3Wall/Fakeflix
```

- Go to the project directory

```bash
  cd fakeflix
```

- Install dependencies

```bash
  npm install
```

- Create a .env file

- Request an API key from TMDB and them add it to the .env file

```
REACT_APP_API_KEY=REACT_APP_API_KEY
```

- Create a project inside Google Firebase and export the configuration

- Add the configuration inside the .env file created previously

```
REACT_APP_FIREBASE_API_KEY=REACT_APP_FIREBASE_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN=REACT_APP_FIREBASE_AUTH_DOMAIN
REACT_APP_FIREBASE_PROJECT_ID=REACT_APP_FIREBASE_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET=REACT_APP_FIREBASE_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=REACT_APP_FIREBASE_MESSAGING_SENDER_ID
REACT_APP_FIREBASE_APP_ID=REACT_APP_FIREBASE_APP_ID
REACT_APP_FIREBASE_MEASUREMEMT_ID=REACT_APP_FIREBASE_MEASUREMEMT_ID
```

- Start the server

```bash
  npm start
```

<br/>

## :white_check_mark: Requirements

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

<br/>

## 📝 License

[MIT](https://github.com/Th3Wall/Fakeflix/blob/main/LICENSE)

<br/>

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Th3Wall/Fakeflix&type=Date)](https://star-history.com/#Th3Wall/Fakeflix&Date)


<a href="https://www.buymeacoffee.com/th3wall" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="41" width="174" alt="Buy Me A Coffee" /></a>
