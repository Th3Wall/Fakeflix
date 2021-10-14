import axios from "../axiosInstance";

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
    isLarge
  }
};

export const fetchGenericMoviesAsync = (fetchMoviesRequest, fetchMoviesSuccess, fetchMoviesFailure, fetchUrl, isPage, isLarge = false) => {
	return dispatch => {
		dispatch(fetchMoviesRequest());
		axios
			.get(fetchUrl)
			.then(res => {
				const comedyMovies = res.data.playlist.map(el => ({
					...reduceJWItem(el, isLarge),
					isFavourite: false,
				}));
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