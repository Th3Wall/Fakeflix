import "./row.scss";
import RowPoster from "../RowPoster/RowPoster";
import SkeletonElement from "../SkeletonElement/SkeletonElement";
import SkeletonPoster from "../SkeletonPoster/SkeletonPoster";
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

	//Custom Swiper config
	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);
    const customSwiperParams = {
        observer: true,
        observeParents: true,
		navigation: {
			prevEl: navigationPrevRef.current,
			nextEl: navigationNextRef.current,
		},
		breakpoints:{
			1378: { slidesPerView: 6, slidesPerGroup: 6 },
			998: { slidesPerView: 4, slidesPerGroup: 4 },
			625: { slidesPerView: 3, slidesPerGroup: 3 },
			330: { slidesPerView: 2, slidesPerGroup: 2 },
			0: { slidesPerView: 1.5, slidesPerGroup: 1.5 }
		},
		loopAdditionalSlides: width >= 1378 ? 5 : width >= 998 ? 3 : width >= 625 ? 2 : 2,
		pagination: true,
		loop: false,
		grabCursor: false,
		draggable: false,
		preventClicksPropagation: true,
		preventClicks: true,
		slideToClickedSlide: false,
		allowTouchMove: true
    };

	const rightMouseOver = (e) => {
		if (e.currentTarget.classList.contains('right')) {e.currentTarget.parentElement.classList.add('is-right')}
		else if (e.currentTarget.classList.contains('left')) {e.currentTarget.parentElement.classList.add('is-left')}
	}

	const rightMouseOut = (e) => {
		e.currentTarget.parentElement.classList.remove('is-right', 'is-left')
	}

	const insertPositionClassName = (index) => {
		const i = index + 1

		if (i === 1) return 'left'
		else if (i === 20) return 'right'

		if (width >= 1378) {
			if ([7, 13, 19].includes(i)) return 'left'
			else if ([6, 12, 18].includes(i)) return 'right'
		} else if (width >= 998) {
			if ([5, 9, 13, 17].includes(i)) return 'left'
			else if ([4, 8, 12, 16].includes(i)) return 'right'
		} else if (width >= 768) {
			if ([4, 7, 10, 13, 16].includes(i)) return 'left'
			else if ([3, 6, 9, 12, 15, 18].includes(i)) return 'right'
		}
	}

	return (
		<div className="Row">
			{error && <div className='Row__not-loaded'>Oops, an error occurred.</div>}
			{loading ?
				(
					<div className='Row__not-loaded'>
						<SkeletonElement type="title" />
						<SkeletonPoster />
					</div>
				) : (
					<h3 className="Row__title">
						<Link to={`${pathname}/${genre}`}>
							<span>{title}</span>
							<span className='Row__showmore'>Show all <FiChevronRight/></span>
						</Link>
					</h3>
				)
			}
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
						onBeforeInit={(swiper) => {
							swiper.params.navigation.prevEl = navigationPrevRef.current;
							swiper.params.navigation.nextEl = navigationNextRef.current;
						}}
					>
						{!loading &&
							results &&
							results.map((result, i) => (
								<SwiperSlide
									key={result.id}
									className={insertPositionClassName(i)}
									onMouseOver={rightMouseOver}
									onMouseOut={rightMouseOut}
								>
									<RowPoster
										item={result}
										isLarge={isLarge}
										isFavourite={result.isFavourite}
										key={result.id}
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
