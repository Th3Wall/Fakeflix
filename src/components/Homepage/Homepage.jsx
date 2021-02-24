
import { useEffect, useState } from "react";

const Homepage = () => {
    const [movies, setMovies] = useState([]);

    const getPopularMovies = () => {
        return fetch('https://api.themoviedb.org/3/movie/popular?api_key=e8d53ad78d99a4722c3f0f0f6a5c9014&language=en-US&page=1')
            .then(response => response.json())
            .then(data => setMovies(data.results))
    }

    useEffect(() => {
        getPopularMovies();
    }, [])

    return (
        <div className='movies__wrp'>
            {
                movies.map(({id, title, overview, vote_average}) => (
                    <div key={id} className='movie'>
                        <h5>{title}</h5>
                        <p>{overview}</p>
                        <h6>{vote_average}</h6>
                    </div>
                ))
            }
        </div>
    )
}

export default Homepage;