import "./favouritePoster.scss"
import { BASE_IMG_URL } from "../../requests"

const FavouritePoster = result => {
    const {item: {id, backdrop_path}, title} = result;

    return (
        <div key={id} className='FavouritePoster'>
            <img src={`${BASE_IMG_URL}/${backdrop_path}`} alt={title} />
        </div>
    )
}

export default FavouritePoster
