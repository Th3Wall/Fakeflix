import axios from "../axiosInstance";

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export const reduceJWItem = (data, isLarge = false) => {
	return { 
    id: data.mediaid,
    title: data.title,
    overview: data.description,
    original_name: '',
    original_title: '',
    name: '',
    genre_ids: [],
    poster_path: data.image,
    backdrop_path: data.image,
    release_date: data['Release Date'], 
    cast: data['Cast'], 
    status: data['Status'],  
    genres: data['Genres'],  
    link: data.link,
    poster: data.poster,
    isLarge
  }
};

export const fetchGenericMoviesAsync = (fetchMoviesRequest, fetchMoviesSuccess, fetchMoviesFailure, fetchUrl, isPage, isLarge = false) => {
	return dispatch => {
		dispatch(fetchMoviesRequest());
		axios
			.get(fetchUrl)
			.then(res => {
				const comedyMovies = shuffle(res.data.playlist.map(el => ({
					...reduceJWItem(el, isLarge),
					isFavourite: false,
				})));
        if (isPage) {
            dispatch(fetchMoviesSuccess(comedyMovies, isPage));
        } else dispatch(fetchMoviesSuccess(comedyMovies));
			})
			.catch(error => {
				const errorMessage = error.message;
				dispatch(fetchMoviesFailure(errorMessage));
			});
	};
};

export const fetchContentAsync = (fetchUrl, isPage, typeRequest, typeSuccess, typeFail, typeMore, isLarge = false) => {
  return fetchGenericMoviesAsync(
    () => ({ type: typeRequest }),
    (horrorMovies, isPage) => ({
      type: isPage ? typeSuccess : typeMore, payload: horrorMovies,
    }),
    error => ({ type: typeFail, payload: error }),
    fetchUrl,
    isPage,
    isLarge
  )
};