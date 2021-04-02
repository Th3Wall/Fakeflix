import './detailModal.scss'
import { hideModalDetail } from "../../redux/modal/modal.actions";
import { useDispatch, useSelector } from "react-redux";
import { selectModalContent, selectModalState } from "../../redux/modal/modal.selectors";

const DetailModal = () => {

	const dispatch = useDispatch();
	const modalClosed = useSelector(selectModalState);
	const modalContent = useSelector(selectModalContent);
	const handleModalClose = () => {
		dispatch(hideModalDetail());
	}

	return (
		<>
			{!modalClosed && (
				<>
					<div className={`Modal__overlay ${modalClosed ? 'Modal__invisible': ''}`} />
					<div className={`Modal__wrp ${modalClosed ? 'Modal__invisible': ''}`}>
						<button onClick={handleModalClose}>{` X `}</button>
						{JSON.stringify(modalContent)}
					</div>
				</>
			)}
		</>
	)
}

export default DetailModal
