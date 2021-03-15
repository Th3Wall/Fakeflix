import "./banner.scss"
import requests, { BASE_IMG_URL } from "../../requests"
import axios from "../../utils"
import { useState, useEffect } from "react"
import { FaPlay, FaStar } from "react-icons/fa"

const {
    fetchNetflixOriginals,
    discoverMovies,
    discoverSeries
} = requests;

const Banner = ({ type }) => {
    const [banner, setBanner] = useState([])
    let fetchReq = null;

    switch (type) {
        case 'movies':
            fetchReq = discoverMovies;
            break;
        case 'series':
            fetchReq = discoverSeries;
            break;
        default:
            fetchReq = fetchNetflixOriginals;
            break;
    }

    useEffect(() => {
        const fetchBannerData = async () => {
            const res = await axios.get(fetchReq);
            const {data: { results }} = res;
            const randomize = Math.floor(Math.random() * results.length - 1);
            setBanner(results[randomize])
        }

        fetchBannerData();
    }, [fetchReq])

    const truncate = (text, n) => {
        return text?.length > n ? text.substr(0, n - 1) + "..." : text
    }

    return (
        <>
            {
                banner && (
                    <header
                        className="Banner"
                        style={{
                            backgroundImage: `url(${BASE_IMG_URL}/${banner.backdrop_path})`,
                        }}
                    >
                        <div className="Banner__content">
                            <h1 className="Banner__content--title">
                                {banner.title || banner.name || banner.original_name}
                            </h1>
                            <div className="Banner__buttons">
                                <button className="Banner__button">
                                    <FaPlay />
                                    <span>Play</span>
                                </button>
                                <button className="Banner__button">
                                    <FaStar />
                                    <span>Add to Favourites</span>
                                </button>
                            </div>
                            <p className="Banner__content--description">
                                {truncate(banner.overview, 280)}
                            </p>
                        </div>
                        <div className="Banner__panel" />
                        <div className="Banner__bottom-shadow" />
                    </header>
                )
            }
        </>
    )
}

export default Banner
