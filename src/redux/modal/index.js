import { modalActionTypes } from "./modal.types"

const initialState = {
    modalIsOpen: false,
    modalContent: {}
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case modalActionTypes.SHOW_MODAL_DETAILS:
            return {
                ...state,
                modalIsOpen: true,
                modalContent: { ...action.payload }
            }
        case modalActionTypes.HIDE_MODAL_DETAILS:
            return {
                ...state,
                modalIsOpen: false,
                modalContent: {}
            }
        default:
            return state
    }
}

export default modalReducer
