import "./row.scss"
import RowPoster from "../RowPoster/RowPoster"
import { useSelector } from "react-redux";

const Row = ({ title, selector, isLarge }) => {
    
    const rowData = useSelector(selector)
    const {loading, error, data: {results}} = rowData;

    return (
        <div className="Row">
            <h3 className="Row__title">{title}</h3>

            {loading && <div>Loading...</div>}
            {error && <div>Error occurred.</div>}
            <div className="Row__poster--wrp">
                {!loading && results && results.map(result => (
                    <RowPoster
                        item={result}
                        title={title}
                        isLarge={isLarge}
                        key={result.id}
                        image={isLarge ? result.poster_path : result.backdrop_path}
                    />
                ))}
            </div>
        </div>
    )
}

export default Row
