import "./favouritePoster.scss"
import { BASE_IMG_URL } from "../../requests"

const FavouritePoster = result => {
    const {item: {backdrop_path}, title} = result;

    return (
        <div className='FavouritePoster'>
            <img src={`${BASE_IMG_URL}/${backdrop_path}`} alt={title} />
        </div>
    )
}

export default FavouritePoster
