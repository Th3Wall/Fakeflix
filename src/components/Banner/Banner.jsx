import "./banner.scss";
import { BASE_IMG_URL } from "../../requests";
import { FaPlay } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";
import { randomize, truncate } from "../../utils";
import { Link } from "react-router-dom";
import { selectNetflixMovies } from "../../redux/movies/movies.selectors";
import { selectNetflixSeries } from "../../redux/series/series.selectors";
import { useSelector } from "react-redux";

const Banner = ({ type }) => {
	let selector = null;
	switch (type) {
		case "movies":
			selector = selectNetflixMovies;
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
	let fallbackTitle = finalData?.title || finalData?.name || finalData?.original_name;

	const handlePlayAnimation = event => {
		event.stopPropagation();
	};

	return (
		<>
			{loading && <div className='Banner'>Loading...</div>}
			{error && <div className='Row__not-loaded'>Error occurred.</div>}

			{!loading &&
				finalData && (
					<header
						className="Banner"
						style={{
							backgroundImage: `url(${BASE_IMG_URL}/${finalData.backdrop_path})`,
						}}
					>
						<div className="Banner__content">
							<h1 className="Banner__content--title">{fallbackTitle}</h1>
							<div className="Banner__buttons">
								<Link
									className="Banner__button"
									onClick={handlePlayAnimation}
									to={'/play'}
								>
									<FaPlay />
									<span>Play</span>
								</Link>
								<button className="Banner__button">
									<BiInfoCircle size={"1.5em"}/>
									<span>More info</span>
								</button>
							</div>
							<p className="Banner__content--description">{truncate(finalData.overview, 280)}</p>
						</div>
						<div className="Banner__panel" />
						<div className="Banner__bottom-shadow" />
					</header>
				)
			}
		</>
	);
};

export default Banner;
