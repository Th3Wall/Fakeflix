import { modalActionTypes } from "./modal.types";

export const showModalDetail = modalContent => ({
    type: modalActionTypes.SHOW_MODAL_DETAILS,
    payload: modalContent
})

export const hideModalDetail = () => ({
    type: modalActionTypes.HIDE_MODAL_DETAILS
})