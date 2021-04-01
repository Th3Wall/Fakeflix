import { hideModalDetail } from "../../redux/modal/modal.actions";
import { useDispatch, useSelector } from "react-redux";
import { selectModalState } from "../../redux/modal/modal.selectors";

const DetailModal = () => {

	const dispatch = useDispatch();
	const modalOpen = useSelector(selectModalState);
	const modalContent = useSelector(selectModalState);
	console.log("modal state => ", modalOpen);
	console.log("modal content => ", modalContent);

	const handleModalClose = () => {
		dispatch(hideModalDetail());
	}

	return (
		<>
			{modalOpen && (
				<div className='Modal__overlay'>
					<div className='Modal__wrp'>
						<button onClick={handleModalClose}>{` X `}</button>
						{JSON.stringify(modalContent)}
					</div>
				</div>
			)}
		</>
	)
}

export default DetailModal
