import './detailModal.scss'
import { hideModalDetail } from "../../redux/modal/modal.actions";
import { useDispatch, useSelector } from "react-redux";
import { selectModalContent, selectModalState } from "../../redux/modal/modal.selectors";
import { BASE_IMG_URL } from "../../requests";
import { VscChromeClose } from "react-icons/vsc";
import { capitalizeFirstLetter, dateToYearOnly } from "../../utils";

const DetailModal = () => {

	const dispatch = useDispatch();
	const modalClosed = useSelector(selectModalState);
	const modalContent = useSelector(selectModalContent);
	const handleModalClose = () => dispatch(hideModalDetail());
	const {overview, fallbackTitle, backdrop_path, release_date, first_air_date, vote_average, original_language, adult, genresConverted} = modalContent;
	const joinedGenres = genresConverted?.join(', ') || "Not available";
	const maturityRating = adult === undefined ? "Not available" : adult ? "Suitable for adults only" : "Suitable for all ages";

	return (
		<>
			{!modalClosed && (
				<>
					<div className={`Modal__overlay ${modalClosed ? 'Modal__invisible': ''}`} />
					<div className={`Modal__wrp ${modalClosed ? 'Modal__invisible': ''}`}>
						<button
							className="Modal__closebtn"
							onClick={handleModalClose}
						>
							<VscChromeClose />
						</button>
						<div className="Modal__image--wrp">
							<div className="Modal__image--shadow" />
							<img
								className="Modal__image--img"
								src={`${BASE_IMG_URL}/${backdrop_path}`}
								alt={fallbackTitle}
							/>
						</div>
						<div className="Modal__info--wrp">
							<h3 className="Modal__info--title">{fallbackTitle}</h3>
							<p className="Modal__info--description">{overview}</p>
							<hr className="Modal__info--line"/>
							<h4 className="Modal__info--otherTitle">Info on <b>{fallbackTitle}</b></h4>
							<div className="Modal__info--row">
								<span className='Modal__info--row-label'>Genres: </span>
								<span className="Modal__info--row-description">{joinedGenres}</span>
							</div>
							<div className="Modal__info--row">
								<span className='Modal__info--row-label'>
									{release_date ? "Release date: " : "First air date: "}
								</span>
								<span className="Modal__info--row-description">{dateToYearOnly(release_date || first_air_date)}</span>
							</div>
							<div className="Modal__info--row">
								<span className='Modal__info--row-label'>Average vote: </span>
								<span className="Modal__info--row-description">{vote_average || "Not available"}</span>
							</div>
							<div className="Modal__info--row">
								<span className='Modal__info--row-label'>Original language: </span>
								<span className="Modal__info--row-description">{capitalizeFirstLetter(original_language)}</span>
							</div>
							<div className="Modal__info--row">
								<span className='Modal__info--row-label'>Age classification: </span>
								<span className="Modal__info--row-description">{maturityRating}</span>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	)
}

export default DetailModal
