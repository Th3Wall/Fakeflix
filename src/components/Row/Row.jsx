import "./row.scss"
import RowPoster from "../RowPoster/RowPoster"
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { fetchActionMoviesAsync } from "../../redux/movies/movies.actions"
import { selectActionMoviesSelector } from "../../redux/movies/movies.selectors"

const Row = ({ title, fetchUrl, isLarge }) => {
    
    const data = useSelector(selectActionMoviesSelector)
    const dispatch = useDispatch();
    const {loading, error, results} = data;

    useEffect(() => {
        dispatch(fetchActionMoviesAsync(fetchUrl))
    }, [])

    return (
        <div className="Row">
            <h3 className="Row__title">{title}</h3>

            {loading && <div>Loading...</div>}
            {error && <div>Error occurred.</div>}
            <div className="Row__poster--wrp">
                {results && results.map(({ id, poster_path, backdrop_path, title }) => (
                    <RowPoster
                        key={id}
                        id={id}
                        image={isLarge ? poster_path : backdrop_path}
                        title={title}
                        isLarge={isLarge}
                    />
                ))}
            </div>
        </div>
    )
}

export default Row
