import './detailModal.scss'
import { useRef } from 'react';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"
import { staggerOne, modalOverlayVariants, modalVariants, modalFadeInUpVariants } from "../../motionUtils";
import { hideModalDetail } from "../../redux/modal/modal.actions";
import { useDispatch, useSelector } from "react-redux";
import { selectModalContent, selectModalState } from "../../redux/modal/modal.selectors";
import { FALLBACK_IMG_URL } from "../../requests";
import { VscChromeClose } from "react-icons/vsc";
import { FaMinus, FaPlay, FaPlus } from "react-icons/fa";
import { addToFavourites, removeFromFavourites } from "../../redux/favourites/favourites.actions";
import useOutsideClick from "../../hooks/useOutsideClick";

const DetailModal = () => {

	const dispatch = useDispatch();
	const modalClosed = useSelector(selectModalState);
	const modalContent = useSelector(selectModalContent);
	const handleModalClose = () => dispatch(hideModalDetail());
	const { id, title, overview, fallbackTitle, backdrop_path, release_date, cast, status, genres, isFavourite } = modalContent;
	const modalRef = useRef();

	const handleAdd = (event) => {
		event.stopPropagation();
		dispatch(addToFavourites({ ...modalContent, isFavourite }));
	}
	const handleRemove = (event) => {
		event.stopPropagation();
		dispatch(removeFromFavourites({ ...modalContent, isFavourite }));
		if (!modalClosed) handleModalClose();
	}
	const handlePlayer = event => {
		event.stopPropagation();
		handleModalClose();
	};
	useOutsideClick(modalRef, () => {
		if (!modalClosed) handleModalClose();
	});

	return (
		<AnimatePresence exitBeforeEnter>
			{!modalClosed && (
				<>
					<motion.div
						variants={modalOverlayVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
						key="modalOverlay"
						className={`Modal__overlay ${modalClosed && 'Modal__invisible'}`}
					>
						<motion.div
							key="modal"
							variants={modalVariants}
							ref={modalRef}
							className={`Modal__wrp ${modalClosed && 'Modal__invisible'}`}
						>
							<motion.button
								className="Modal__closebtn"
								onClick={handleModalClose}
							>
								<VscChromeClose />
							</motion.button>
							<div className="Modal__image--wrp">
								<div className="Modal__image--shadow" />
								<img
									className="Modal__image--img"
									src={backdrop_path ? `${backdrop_path}` : FALLBACK_IMG_URL}
									alt={fallbackTitle}
								/>
								<div className="Modal__image--buttonswrp">
									<Link
										className="Modal__image--button"
										onClick={handlePlayer}
                    to={{pathname: `/play`, search: `?file=${id}&title=${encodeURIComponent(title)}`}}
									>
										<FaPlay />
										<span>Play</span>
									</Link>
									{!isFavourite
										? (
											<button className='Modal__image--button-circular' onClick={handleAdd}>
												<FaPlus />
											</button>
										): (
											<button className='Modal__image--button-circular' onClick={handleRemove}>
												<FaMinus />
											</button>
										)}
								</div>
							</div>
							<motion.div variants={staggerOne} initial="initial" animate="animate" exit="exit" className="Modal__info--wrp">
								<motion.h3 variants={modalFadeInUpVariants} className="Modal__info--title">{fallbackTitle}</motion.h3>
								<motion.p variants={modalFadeInUpVariants} className="Modal__info--description">{overview}</motion.p>
								<motion.hr variants={modalFadeInUpVariants} className="Modal__info--line"/>
								<motion.h4 variants={modalFadeInUpVariants} className="Modal__info--otherTitle">Info on <b>{fallbackTitle}</b></motion.h4>
                {cast ?
                ( <motion.div variants={modalFadeInUpVariants} className="Modal__info--row">
									<span className='Modal__info--row-label'>Cast: </span>
									<span className="Modal__info--row-description">{cast}</span>
								</motion.div> ) : ( <div/> )
                }
                {genres ?
                ( <motion.div variants={modalFadeInUpVariants} className="Modal__info--row">
									<span className='Modal__info--row-label'>Genres: </span>
									<span className="Modal__info--row-description">{genres}</span>
								</motion.div> ) : ( <div/> )
                }
                {release_date ?
                ( <motion.div variants={modalFadeInUpVariants} className="Modal__info--row">
									<span className='Modal__info--row-label'>Release Date: </span>
									<span className="Modal__info--row-description">{release_date}</span>
								</motion.div> ) : ( <div/> )
                }
                {status ?
                ( <motion.div variants={modalFadeInUpVariants} className="Modal__info--row">
									<span className='Modal__info--row-label'>Status: </span>
									<span className="Modal__info--row-description">{status}</span>
								</motion.div> ) : ( <div/> )
                }
							</motion.div>
						</motion.div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	)
}

export default DetailModal
