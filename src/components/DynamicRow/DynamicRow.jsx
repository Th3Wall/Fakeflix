import "./dynamicRow.scss"
import RowPoster from "../RowPoster/RowPoster"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { allGenreFetchMovies, changeCurrentGenre } from "../../redux/movies/movies.actions"
import { selectMoviesByCurrentGenre } from "../../redux/movies/movies.selectors"

const DynamicRow = ({ title, genre, fetchUrl, isLarge }) => {
    
    // const emptyData = { loading: false, error: false, results: null };

    console.log({genre})
    const data = useSelector(selectMoviesByCurrentGenre)
    // const {loading, error, results} = data || emptyData;

    const dispatch = useDispatch();
    const [ hasError, setHasError ] = useState(false);    
    const [ isLoading, setIsLoading ] = useState(true)
    const [ dataResults, setDataResults ] = useState(null)

    useEffect(() => {
        dispatch(changeCurrentGenre(genre))
        const actionToCall = getFetchMovies(genre)
        dispatch(actionToCall(fetchUrl))
    }, [])

    // useEffect(() => {
    //     const actionToCall = getFetchMovies(genre)
    //     dispatch(actionToCall(fetchUrl))
    // }, [genre])

    useEffect(() => {
        console.log('useEffect - data')
        console.log({data})
        if(data) {
            const { loading, error, results } = data;
            console.log('useEffect - data')
            console.log({data})
            setIsLoading(loading)
            setHasError(error ? true : false)
            setDataResults(results)
        }
    }, [data])

    const getFetchMovies = (genre) => {
        if(genre) {
            setHasError(false)
            const allFetch = allGenreFetchMovies()
            console.log(genre)
            console.log(allFetch)
            const fetchToCall = allFetch.filter(f => f.name.toLowerCase() == genre.toLowerCase())
            console.log({fetchToCall})
            if(fetchToCall && fetchToCall.length == 1) {
                const actionToCall = fetchToCall[0].value;
                console.log({actionToCall})
                // dispatch(actionToCall(fetchUrl[0]))
                return actionToCall;
            }
        }
        setHasError(true)
    }

    return (
        <div className="Row">
            <h3 className="Row__title">{title}</h3>
            {hasError && (<span>Ops... an error occurred</span>)}

            {!hasError && isLoading && <div>Loading...</div>}
            {!hasError && dataResults && dataResults.length > 0 && (
                <div className="Row__poster--wrp">
                    {dataResults && dataResults.map(({ id, poster_path, backdrop_path, title }) => (
                        <RowPoster
                            key={id}
                            id={id}
                            image={isLarge ? poster_path : backdrop_path}
                            title={title}
                            isLarge={isLarge}
                        />
                    ))}
                </div>
            )}
            {!hasError && (!dataResults || dataResults.length == 0) && (
                <span>No movie for this genre</span>
            )}
        </div>
    )
}

export default DynamicRow
