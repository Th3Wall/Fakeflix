import "./row.scss";
import RowPoster from "../RowPoster/RowPoster";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import useViewport from "../../hooks/useViewport";

const Row = ({ selector, title, isLarge }) => {
	const { width } = useViewport();
	const rowData = useSelector(selector);
	const { loading, error, data: results } = rowData;
    const customSwiperParams = {
        observer: true,
        observeParents: true
    }

	return (
		<div className="Row">
			<h3 className="Row__title">{title}</h3>

			{loading && <div>Loading...</div>}
			{error && <div>Error occurred.</div>}
			<div className="Row__poster--wrp">
				<Swiper
                    {...customSwiperParams}
					grabCursor={false}
					draggable={false}
					loop={false}
					loopAdditionalSlides={width >= 1378 ? 5 : width >= 998 ? 3 : width >= 625 ? 2 : 2}
					breakpoints={{
						1378: {
							slidesPerView: 6,
							slidesPerGroup: 6,
						},
						998: {
							slidesPerView: 4,
							slidesPerGroup: 4,
						},
						625: {
							slidesPerView: 3,
							slidesPerGroup: 3,
						},
                        330: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
						0: {
							slidesPerView: 1.5,
							slidesPerGroup: 1.5,
						},
					}}
					preventClicksPropagation={true}
					preventClicks={true}
					slideToClickedSlide={false}
					pagination={{ clickable: true }}
				>
					{!loading &&
						results &&
						results.map(result => (
							<SwiperSlide key={result.id}>
								<RowPoster
									item={result}
									title={title}
									isLarge={isLarge}
									key={result.id}
									isFavourite={result.isFavourite}
									image={isLarge ? result.poster_path : result.backdrop_path}
								/>
							</SwiperSlide>
						))}
				</Swiper>
			</div>
		</div>
	);
};

export default Row;
