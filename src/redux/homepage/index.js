import { homepageActionTypes } from "./homepage.types"
import * as selectors from "../../redux/movies/movies.selectors"

const initialState = {
    rows: [
        {
            id: 0,
            title: "Top Rated on Fakeflix",
            selector: selectors.selectTopRatedMovies
        },
        {
            id: 1,
            title: "Trending Now",
            selector: selectors.selectTrendingMovies
        },
        {
            id: 2,
            title: "Fakeflix Originals",
            selector: selectors.selectNetflixMovies,
            isLarge: true
        },
        {
            id: 3,
            title: "Action",
            selector: selectors.selectActionMovies
        },
        {
            id: 4,
            title: "Horror",
            selector: selectors.selectHorrorMovies
        },
        {
            id: 5,
            title: "Adventure",
            selector: selectors.selectAdventureMovies
        },
        {
            id: 6,
            title: "Comedy",
            selector: selectors.selectComedyMovies
        },
        {
            id: 7,
            title: "Romance",
            selector: selectors.selectRomanceMovies
        },
        {
            id: 8,
            title: "Animation",
            selector: selectors.selectAnimationMovies
        }
    ]
}

const homepageReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case homepageActionTypes.LOAD_HOME_SECTIONS:
            return {
                ...state,
                rows: payload
            }
        default:
            return state
    }
}

export default homepageReducer
