import './banner.scss'
import requests from '../../requests';
import axios from '../../utils';
import { useState, useEffect } from 'react';

const Banner = () => {
    const base_url = "https://image.tmdb.org/t/p/original"
    const [ movie, setMovie ] = useState([]);
    
    useEffect(() => {
        async function fetchBannerData() {
            const res = await axios.get(requests.fetchNetflixOriginals);
            const randomize = Math.floor(Math.random() * res.data.results.length - 1);
            setMovie(res.data.results[randomize]);
        }
        fetchBannerData();
    }, [])

    const truncate = (text, n) => {
        return text?.length > n ? text.substr(0, n - 1) + '...' : text;
    }

    return (
        <header className='Banner' style={{backgroundImage: `url(${base_url}${movie?.backdrop_path})`}}>
            <div className="Banner__panel" />
            <div className="Banner__content">
                <h1 className='Banner__content--title'>{movie?.title || movie?.name || movie?.original_name }</h1>
                <div className="Banner__buttons">
                    <button className="Banner__button">Play</button>
                    <button className="Banner__button">Add to Favourites</button>
                </div>
                <p className='Banner__content--description'>{truncate(movie?.overview, 280)}</p>
            </div>
            <div className="Banner__bottom-shadow" />
        </header>
    )
}

export default Banner
