import { combineReducers } from "redux"

import user from "./user"
import movies from "./movies"

export default combineReducers({
    user,
    movies
})
