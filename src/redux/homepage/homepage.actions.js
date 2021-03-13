import { homepageActionTypes } from './homepage.types';

export const loadHomepageSections = rows => ({
    type: homepageActionTypes.LOAD_HOME_SECTIONS,
    payload: rows
})