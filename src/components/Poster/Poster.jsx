import "./poster.scss"
import { BASE_IMG_URL, FALLBACK_IMG_URL } from "../../requests";

const Poster = result => {
    const {item: {backdrop_path}, title, original_title, name, original_name} = result;
    let fallbackTitle = title || original_title || name || original_name;

    return (
        <div className='Poster'>
            {backdrop_path ? (
                <img src={`${BASE_IMG_URL}/${backdrop_path}`} alt={fallbackTitle} />
            ) : (
                <>
                    <img src={FALLBACK_IMG_URL} alt={fallbackTitle} />
                    <div className='Poster__fallback'>
                        <span>{fallbackTitle}</span>
                    </div>
                </>
            )}
        </div>
    )
}

export default Poster
