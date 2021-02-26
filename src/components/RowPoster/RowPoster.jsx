import "./rowPoster.scss"
import { BASE_IMG_URL } from '../../requests';

const RowPoster = ({ id, image, title, isLarge }) => {
    return (
        <div key={id} className={`Row__poster ${isLarge ? "Row__poster--big" : ""}`}>
            <img src={`${BASE_IMG_URL}${image}`} alt={title} loading="lazy" />
        </div>
    )
}

export default RowPoster
