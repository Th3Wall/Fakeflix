import "./row.scss"
import RowPoster from "../RowPoster/RowPoster"
import { useSelector } from "react-redux";

const Row = ({ title, selector, isLarge }) => {
    
    const rowData = useSelector(selector)
    const {loading, error, movies: {results}} = rowData;

    return (
        <div className="Row">
            <h3 className="Row__title">{title}</h3>

            {loading && <div>Loading...</div>}
            {error && <div>Error occurred.</div>}
            <div className="Row__poster--wrp">
                {!loading && results && results.map(({ id, poster_path, backdrop_path, title }) => (
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
