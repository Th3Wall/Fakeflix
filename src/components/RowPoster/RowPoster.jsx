import "./rowPoster.scss"

const RowPoster = ({ id, poster_path, title }) => {
    const base_url = "https://image.tmdb.org/t/p/original/"

    return (
        <div key={id} className="Row__poster">
            <img src={`${base_url}${poster_path}`} alt={title} loading="lazy" />
        </div>
    )
}

export default RowPoster
