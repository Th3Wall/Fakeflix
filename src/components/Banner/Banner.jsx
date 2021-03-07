import "./banner.scss"
import requests, { BASE_IMG_URL } from "../../requests"
import axios from "../../utils"
import { useState, useEffect } from "react"
import { FaPlay, FaStar } from "react-icons/fa"

const Banner = () => {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        const fetchBannerData = async () => {
            const res = await axios.get(requests.fetchNetflixOriginals)
            const {data: { results }} = res
            const randomize = Math.floor(Math.random() * results.length - 1)
            setMovie(results[randomize])
        }
        fetchBannerData()
    }, [])

    const truncate = (text, n) => {
        return text?.length > n ? text.substr(0, n - 1) + "..." : text
    }

    return (
        <header
            className="Banner"
            style={{
                backgroundImage: `url(${BASE_IMG_URL}/${movie?.backdrop_path})`,
            }}
        >
            <div className="Banner__content">
                <h1 className="Banner__content--title">
                    {movie?.title || movie?.name || movie?.original_name}
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
                    {truncate(movie?.overview, 280)}
                </p>
            </div>
            <div className="Banner__panel" />
            <div className="Banner__bottom-shadow" />
        </header>
    )
}

export default Banner
