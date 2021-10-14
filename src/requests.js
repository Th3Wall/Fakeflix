export const GITHUB_BASE_URL = "https://github.com/Th3Wall";
export const GITHUB_AVATAR_URL = "https://avatars.githubusercontent.com/u/25078541?v=4";
const GITHUB_ASSETS_BASE_URL = "https://cdn.jsdelivr.net/gh/Th3Wall/assets-cdn/Fakeflix";
export const LANG = "en-US";
export const REGION = "US";
export const BASE_IMG_URL = "https://image.tmdb.org/t/p/original";
export const FALLBACK_IMG_URL = `${GITHUB_ASSETS_BASE_URL}/Fakeflix_readme.png`;
export const MOBILE_LOGO_URL = `${GITHUB_ASSETS_BASE_URL}/Fakeflix_favicon_192.png`;
export const PROFILE_PIC_URL = `${GITHUB_ASSETS_BASE_URL}/Fakeflix_profilepic.png`;
export const SIGNIN_BGIMG_URL = `${GITHUB_ASSETS_BASE_URL}/Fakeflix_signin_bg.jpg`;

const requests = {
	fetchSearchQuery: `/playlists/wwPvmWH4?search=`,
  // Movies
  fetchFeatureMovies: `/playlists/l42uuCrX`,
  fetchBannerMovies: `/playlists/FjcoGbos`,
  fetchBannerCartoons: `/playlists/uwEqNNKd`,
  fetchBannerClassics: `/playlists/2zdOipXO`,
	fetchComedyMovies: `/playlists/mtniErJ6`,
	fetchHorrorMovies: `/playlists/kX6tTAjn`,

  movies: `/playlists/hJ8hWhZ1`,
  cartoons: `/playlists/hJ8hWhZ1`,
  chaplin: `/playlists/m9MyN7gc`,
  threeStooges: `/playlists/6mfskxRT`,
  romance: `/playlists/OAYgvKTr`,
  popeye: `/playlists/4Yuxof2b`,
  funny: `/playlists/mtniErJ6`,
  drama: `/playlists/fmQwpA8V`,
  others: `/playlists/ujAyl6T7`,
  looney: `/playlists/YymXtclG`,
  superman: `/playlists/hTiVWlgq`,
  betty: `/playlists/auOFTNmf`,
  oswald: `/playlists/VvTeDSNs`,
  merrie: `/playlists/o2q07vBO`,
  othersCartoons: `/playlists/nrd6bOZa`,
  avant: `/playlists/YWmeycg6`,
  crime: `/playlists/6T3KIjQa`,
  fantasy: `/playlists/38q7cyzC`,
  science: `/playlists/JLThzdyB`,
  western: `/playlists/V4oXbL1I`,
};

export default requests;
