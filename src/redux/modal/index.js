import { modalActionTypes } from "./modal.types"

const initialState = {
    modalIsClosed: true,
    modalContent: {}
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case modalActionTypes.SHOW_MODAL_DETAILS:
            return {
                ...state,
                modalIsClosed: false,
                modalContent: { ...action.payload }
            }
        case modalActionTypes.HIDE_MODAL_DETAILS:
            return {
                ...state,
                modalIsClosed: true,
                modalContent: {}
            }
        default:
            return state
    }
}

export default modalReducer
