import "./row.scss";
import RowPoster from "../RowPoster/RowPoster";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import useViewport from "../../hooks/useViewport";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { FiChevronRight } from "react-icons/all";

// Swiper
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
SwiperCore.use([Navigation, Pagination]);

const Row = ({ selector, title, genre, isLarge }) => {
	const { width } = useViewport();
	const rowData = useSelector(selector);
	const { loading, error, data: results } = rowData;
	const { pathname } = useLocation();
    const customSwiperParams = {
        observer: true,
        observeParents: true,
    };
	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);

	return (
		<div className="Row">
			<h3 className="Row__title">
				<Link to={`${pathname}/${genre}`}>
					<span>{title}</span>
					<span className='Row__showmore'>Show all <FiChevronRight/></span>
				</Link>
			</h3>

			{loading && <div className='Row__not-loaded'>Loading...</div>}
			{error && <div className='Row__not-loaded'>Error occurred.</div>}
			{!loading && !error && (
				<div className="Row__poster--wrp">
					<div className="Row__slider--mask left" ref={navigationPrevRef}>
						<MdChevronLeft className="Row__slider--mask-icon left" size="3em" style={{ color:'white' }} />
					</div>
					<div className="Row__slider--mask right" ref={navigationNextRef}>
						<MdChevronRight className="Row__slider--mask-icon right" size="3em" style={{ color:'white' }} />
					</div>
					<Swiper
						{...customSwiperParams}
						navigation={{
							prevEl: navigationPrevRef.current,
							nextEl: navigationNextRef.current,
						}}
						onBeforeInit={(swiper) => {
							swiper.params.navigation.prevEl = navigationPrevRef.current;
							swiper.params.navigation.nextEl = navigationNextRef.current;
						}}
						breakpoints={{
							1378: { slidesPerView: 6, slidesPerGroup: 6 },
							998: { slidesPerView: 4, slidesPerGroup: 4 },
							625: { slidesPerView: 3, slidesPerGroup: 3 },
							330: { slidesPerView: 2, slidesPerGroup: 2 },
							0: { slidesPerView: 1.5, slidesPerGroup: 1.5 },
						}}
						loopAdditionalSlides={width >= 1378 ? 5 : width >= 998 ? 3 : width >= 625 ? 2 : 2}
						pagination
						loop={false}
						grabCursor={false}
						draggable={false}
						preventClicksPropagation={true}
						preventClicks={true}
						slideToClickedSlide={false}
					>
						{!loading &&
							results &&
							results.map(result => (
								<SwiperSlide key={result.id}>
									<RowPoster
										item={result}
										isLarge={isLarge}
										isFavourite={result.isFavourite}
									/>
								</SwiperSlide>
							))
						}
					</Swiper>
				</div>
			)}
		</div>
	);
};

export default Row;
