import { combineReducers } from "redux"

import user from "./user"
import movies from "./movies"
import homepage from "./homepage"

export default combineReducers({
    user,
    movies,
    homepage
})
