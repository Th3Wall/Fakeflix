import { homepageActionTypes } from "./homepage.types"
import * as selectors from "../../redux/movies/movies.selectors"

const initialState = {
    loading: false,
    rows: [
        {
            id: 0,
            title: "Top Rated on Fakeflix",
            selector: selectors.selectTopRatedMoviesSelector
        },
        {
            id: 1,
            title: "Trending Now",
            selector: selectors.selectTrendingMoviesSelector
        },
        {
            id: 2,
            title: "Fakeflix Originals",
            selector: selectors.selectNetflixMoviesSelector,
            isLarge: true
        },
        {
            id: 3,
            title: "Action",
            selector: selectors.selectActionMoviesSelector
        },
        {
            id: 4,
            title: "Horror",
            selector: selectors.selectHorrorMoviesSelector
        },
        {
            id: 5,
            title: "Adventure",
            selector: selectors.selectAdventureMoviesSelector
        },
        {
            id: 6,
            title: "Comedy",
            selector: selectors.selectComedyMoviesSelector
        },
        {
            id: 7,
            title: "Romance",
            selector: selectors.selectRomanceMoviesSelector
        },
        {
            id: 8,
            title: "Animation",
            selector: selectors.selectAnimationMoviesSelector
        }
    ]
}

const homepageReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case homepageActionTypes.LOAD_HOME_SECTIONS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case homepageActionTypes.LOAD_HOME_SECTIONS_SUCCESS:
            return {
                ...state,
                rows: payload,
                loading: false
            }
        default:
            return state
    }
}

export default homepageReducer
