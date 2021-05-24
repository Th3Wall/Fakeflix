import "./banner.scss";
import { motion } from "framer-motion";
import { BASE_IMG_URL } from "../../requests";
import { FaPlay } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";
import { randomize, truncate } from "../../utils";
import { Link } from "react-router-dom";
import SkeletonBanner from "../SkeletonBanner/SkeletonBanner";
import { selectTrendingMovies, selectNetflixMovies } from "../../redux/movies/movies.selectors";
import { selectNetflixSeries } from "../../redux/series/series.selectors";
import { useSelector } from "react-redux";

const Banner = ({ type }) => {
	let selector;
	switch (type) {
		case "movies":
			selector = selectTrendingMovies;
			break;
		case "series":
			selector = selectNetflixSeries;
			break;
		default:
			selector = selectNetflixMovies;
			break;
	}

	const myData = useSelector(selector);
	const { loading, error, data: results } = myData;
	const finalData = results[randomize(results)];
	const fallbackTitle = finalData?.title || finalData?.name || finalData?.original_name;
	const description = truncate(finalData?.overview, 150);

	const handlePlayAnimation = event => {
		event.stopPropagation();
	};

	let easing = [0.6, -0.05, 0.01, 0.99];
	const fadeIn = {
		initial: { opacity: 0, transition: { duration: .8, ease: easing }, willChange: "opacity, transform" },
		animate: { opacity: 1, transition: { duration: .8, ease: easing }, willChange: "opacity, transform" },
		exit: { opacity: 0, transition: { delay: .4, duration: .8, ease: easing }, willChange: "opacity, transform" }
	};
	const fadeInLoadSection = {
		initial: { opacity: 0, transition: { duration: .4, ease: easing }},
		animate: { opacity: 1, transition: { duration: .4, ease: easing }},
		exit: { opacity: 0, transition: { duration: .4, ease: easing }}
	};
	const fadeInUp = {
		initial: { y: 60, opacity: 0, transition: { duration: .8, ease: easing }, willChange: "opacity, transform" },
		animate: { y: 0, opacity: 1, transition: { delay: .8, duration: .8, ease: easing }, willChange: "opacity, transform" },
		exit: { y: 60, opacity: 0, transition: { duration: .8, ease: easing }, willChange: "opacity, transform" }
	};
	const stagger = {
		animate: { transition: { staggerChildren: .1 }}
	}

	return (
		<>
			<motion.section
				variants={fadeInLoadSection}
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
					variants={fadeIn}
					initial='initial'
					animate='animate'
					exit='exit'
					className="Banner"
					style={{backgroundImage: `url(${BASE_IMG_URL}/${finalData.backdrop_path})`}}
				>
					<motion.div
						className="Banner__content"
						variants={stagger}
						initial='initial'
						animate='animate'
						exit='exit'
					>
						<motion.h1 variants={fadeInUp} className="Banner__content--title">{fallbackTitle}</motion.h1>
						<motion.div variants={fadeInUp} className="Banner__buttons">
							<Link
								className="Banner__button"
								onClick={handlePlayAnimation}
								to={"/play"}
							>
								<FaPlay />
								<span>Play</span>
							</Link>
							<button className="Banner__button">
								<BiInfoCircle size="1.5em" />
								<span>More info</span>
							</button>
						</motion.div>
						<motion.p variants={fadeInUp} className="Banner__content--description">{description}</motion.p>
					</motion.div>
					<div className="Banner__panel" />
					<div className="Banner__bottom-shadow" />
				</motion.header>
			)}
		</>
	)
}

export default Banner;