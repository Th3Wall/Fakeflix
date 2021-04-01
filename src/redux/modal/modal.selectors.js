import { createSelector } from "reselect";

const selectModal = state => state.detailModal;

export const selectModalState = createSelector(
	[selectModal],
	detailModal => detailModal.modalIsOpen
)

export const selectModalContent = createSelector(
	[selectModal],
	detailModal => detailModal.modalContent
)