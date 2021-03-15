import { combineReducers } from "redux"

import user from "./user"
import movies from "./movies"
import series from "./series"

export default combineReducers({
    user,
    movies,
    series
})
