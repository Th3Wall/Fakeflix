import "./row.scss"
import RowPoster from "../RowPoster/RowPoster"
import useFetch from "../../hooks/useFetch"

const Row = ({ title, fetchUrl, isLarge }) => {
    const [response, loading, hasError] = useFetch(fetchUrl)

    return (
        <div className="Row">
            <h3 className="Row__title">{title}</h3>

            {loading && <div>Loading...</div>}
            {hasError && <div>Error occured.</div>}
            <div className="Row__poster--wrp">
                {response.map(({ id, poster_path, backdrop_path, title }) => (
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
