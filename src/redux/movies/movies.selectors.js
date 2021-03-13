import { createSelector } from "reselect";

export const selectActionMovies = state => state.movies.actionMovies;
export const selectAdventureMovies = state => state.movies.adventureMovies;
export const selectAnimationMovies = state => state.movies.animationMovies;
export const selectComedyMovies = state => state.movies.comedyMovies;
export const selectHorrorMovies = state => state.movies.horrorMovies;
export const selectNetflixMovies = state => state.movies.netflixMovies;
export const selectRomanceMovies = state => state.movies.romanceMovies;
export const selectTopRatedMovies = state => state.movies.topRatedMovies;
export const selectTrendingMovies = state => state.movies.trendingMovies;
export const selectCurrentGenre = state => state.movies ? state.movies.currentGenre : '';
export const selectCurrentMovies = state => {
    console.log('**************')
    let currentGenre = selectCurrentGenre(state);
    let currentMovies = [];
    console.log({currentGenre})
    if(currentGenre) {
        const genre = currentGenre.currentGenre.toString();
        console.log(genre)
        switch(genre.toLowerCase()) {
            case "action":
                console.log('*******ASA*******')
                currentMovies = selectActionMovies(state);
                break;
            case "adventure":
                console.log('********BBB******')
                currentMovies = selectAdventureMovies(state);
                break;
            // default:
            //     currentGenre = [];
            //     break;
        }
    }
    console.log({currentMovies})

    return createSelector(
        currentMovies => currentMovies
    )
};

export const selectMoviesByCurrentGenre = createSelector(
    [selectCurrentMovies],
    currentMovies => currentMovies.movies
);

export const selectActionMoviesSelector = createSelector(
    [selectActionMovies],
    actionMovies => actionMovies.movies
)

export const selectAdventureMoviesSelector = createSelector(
    [selectAdventureMovies],
    adventureMovies => adventureMovies.movies
)

export const selectAnimationMoviesSelector = createSelector(
    [selectAnimationMovies],
    animationMovies => animationMovies.movies
)

export const selectComedyMoviesSelector = createSelector(
    [selectComedyMovies],
    comedyMovies => comedyMovies.movies
)

export const selectHorrorMoviesSelector = createSelector(
    [selectHorrorMovies],
    horrorMovies => horrorMovies.movies
)

export const selectNetflixMoviesSelector = createSelector(
    [selectNetflixMovies],
    netflixMovies => netflixMovies.movies
)

export const selectRomanceMoviesSelector = createSelector(
    [selectRomanceMovies],
    romanceMovies => romanceMovies.movies
)

export const selectTopRatedMoviesSelector = createSelector(
    [selectTopRatedMovies],
    topRatedMovies => topRatedMovies.movies
)

export const selectTrendingMoviesSelector = createSelector(
    [selectTrendingMovies],
    trendingMovies => trendingMovies.movies
)