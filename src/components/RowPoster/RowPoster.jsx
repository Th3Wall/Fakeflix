import "./rowPoster.scss"

const RowPoster = ({ id, image, title, isLarge }) => {
    const base_url = "https://image.tmdb.org/t/p/original"

    return (
        <div key={id} className={`Row__poster ${isLarge ? "Row__poster--big" : ""}`}>
            <img src={`${base_url}${image}`} alt={title} loading="lazy" />
        </div>
    )
}

export default RowPoster
