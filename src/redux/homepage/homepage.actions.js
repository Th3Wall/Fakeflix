import { homepageActionTypes } from './homepage.types';

export const loadHomepageSectionsRequest = () => ({
    type: homepageActionTypes.LOAD_HOME_SECTIONS_REQUEST
})

export const loadHomepageSectionsSuccess = rows => ({
    type: homepageActionTypes.LOAD_HOME_SECTIONS_SUCCESS,
    payload: rows
})