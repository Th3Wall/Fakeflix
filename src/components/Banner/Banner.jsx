import "./banner.scss";
import React from "react";
import { motion } from "framer-motion";
import { staggerOne, bannerFadeInLoadSectionVariants, bannerFadeInVariants, bannerFadeInUpVariants } from "../../motionUtils";
import { FaPlay } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";
import { truncate } from "../../utils";
import { Link } from "react-router-dom";
import SkeletonBanner from "../SkeletonBanner/SkeletonBanner";
import { useDispatch, useSelector } from "react-redux";
import { showModalDetail } from "../../redux/modal/modal.actions";
import { selectBannerMovies, selectBannerCartoons, selectBannerClassics } from "../../redux/movies/movies.selectors";
import { useEffect } from "react";
import { fetchBannerMoviesAsync, fetchBannerCartoonsAsync, fetchBannerClassicsAsync } from "../../redux/movies/movies.actions";
import requests from "../../requests";
const {
  fetchBannerMovies,
  fetchBannerCartoons,
  fetchBannerClassics
} = requests;

const Banner = ({ type }) => {
  let selector;
  let request;
  let requestAsync;
  switch (type) {
    case "movies":
      requestAsync = fetchBannerClassicsAsync;
      request = fetchBannerClassics;
      selector = selectBannerClassics;
      break;
    case "cartoons":
      requestAsync = fetchBannerCartoonsAsync;
      request = fetchBannerCartoons;
      selector = selectBannerCartoons;
      break;
    default:
      requestAsync = fetchBannerMoviesAsync;
      request = fetchBannerMovies;
      selector = selectBannerMovies;
      break;
  } 
	const myData = useSelector(selector);
  const dispatch = useDispatch()
	const { loading, error, data: results } = myData;
	const finalData = results && results.length ? results[0] : null;
	const fallbackTitle = finalData?.title || finalData?.name || finalData?.original_name;
	const description = truncate(finalData?.overview, 150);

	const handlePlayer = event => {
		event.stopPropagation();
	};

	const handleModalOpening = () => {
		dispatch(showModalDetail({ ...finalData, fallbackTitle }));
	}

  useEffect(() => {
    dispatch(requestAsync(request, false))
  }, [dispatch, requestAsync, request])

	return (
		<>
			<motion.section
				variants={bannerFadeInLoadSectionVariants}
				initial='initial'
				animate='animate'
				exit='exit'
				className="Banner__loadsection"
			>
				{loading && <SkeletonBanner />}
				{error && <div className="errored">Oops, an error occurred.</div>}
			</motion.section>

			{!loading && finalData && (
				<motion.header
					variants={bannerFadeInVariants}
					initial='initial'
					animate='animate'
					exit='exit'
					className="Banner"
					style={{backgroundImage: `url(${finalData?.poster_path})`}}
				>
					<motion.div
						className="Banner__content"
						variants={staggerOne}
						initial='initial'
						animate='animate'
						exit='exit'
					>
						<motion.h1 variants={bannerFadeInUpVariants} className="Banner__content--title">{fallbackTitle}</motion.h1>
						<motion.div variants={bannerFadeInUpVariants} className="Banner__buttons">
							<Link
								className="Banner__button"
								onClick={handlePlayer}
                to={{pathname: `/play`, search: `?file=${finalData?.id}&title=${encodeURIComponent(finalData?.title)}`}}
                >
								<FaPlay />
								<span>Play</span>
							</Link>
							<button
								className="Banner__button"
								onClick={handleModalOpening}
							>
								<BiInfoCircle size="1.5em" />
								<span>More info</span>
							</button>
						</motion.div>
						<motion.p variants={bannerFadeInUpVariants} className="Banner__content--description">{description}</motion.p>
					</motion.div>
					<div className="Banner__panel" />
					<div className="Banner__bottom-shadow" />
				</motion.header>
			)}
		</>
	)
}

export default React.memo(Banner);