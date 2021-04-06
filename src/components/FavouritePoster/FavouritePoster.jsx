import "./favouritePoster.scss"
import { BASE_IMG_URL, FALLBACK_IMG_URL } from "../../requests";

const FavouritePoster = result => {
    const {item: {backdrop_path}, title} = result;

    return (
        <div className='FavouritePoster'>
            {backdrop_path ? (
                <img src={`${BASE_IMG_URL}/${backdrop_path}`} alt={title} />
            ) : (
                <>
                    <img src={FALLBACK_IMG_URL} alt={title} />
                    <div className='FavouritePoster__fallback'>
                        <span>{title}</span>
                    </div>
                </>
            )}
        </div>
    )
}

export default FavouritePoster
