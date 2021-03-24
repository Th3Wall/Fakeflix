import { combineReducers } from "redux"

import user from "./user"
import movies from "./movies"
import series from "./series"
import favourites from "./favourites"
import search from "./search"

export default combineReducers({
    search,
    user,
    movies,
    series,
    favourites
})
