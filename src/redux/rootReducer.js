import { combineReducers } from "redux"
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage';

import user from "./user";
import movies from "./movies";
import series from "./series";
import favourites from "./favourites";
import search from "./search";
import detailModal from "./modal";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['favourites']
}

const rootReducer = combineReducers({
    search,
    user,
    movies,
    series,
    favourites,
    detailModal
})

export default persistReducer(persistConfig, rootReducer);