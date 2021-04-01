import "./rowPoster.scss"
import { BASE_IMG_URL } from "../../requests"
import { useDispatch } from 'react-redux';
import { addToFavourites, removeFromFavourites } from "../../redux/favourites/favourites.actions";
import { FaPlus, FaMinus, FaPlay, FaChevronDown } from "react-icons/fa";
import useGenreConversion from "../../hooks/useGenreConversion";

const RowPoster = result => {
    const { item: { title, original_name, original_title, name, genre_ids }, image, isLarge, isFavourite } = result;
    let fallbackTitle = title || original_title || name || original_name;
    const dispatch = useDispatch();

    const genresConverted = useGenreConversion(genre_ids);
    
    const handleAdd = () => {
        dispatch(addToFavourites(result));
    }
    const handleRemove = () => {
        dispatch(removeFromFavourites(result));
    }

    return (
        <div className={`Row__poster ${isLarge ? "Row__poster--big" : ""}`}>
            <img src={`${BASE_IMG_URL}/${image}`} alt={fallbackTitle} />

            <div className="Row__poster-info">
                <div className="Row__poster-info--iconswrp">
                    <button className='Row__poster-info--icon icon--play'>
                        <FaPlay />
                    </button>
                    <button className='Row__poster-info--icon icon--favourite'>
                        {!isFavourite
                            ? <FaPlus onClick={handleAdd} />
                            : <FaMinus onClick={handleRemove} />
                        }
                    </button>

                    <button className='Row__poster-info--icon icon--toggleModal'>
                        <FaChevronDown />
                    </button>
                </div>
                <div className="Row__poster-info--title">
                    <span>{fallbackTitle}</span>
                </div>
                <div className="Row__poster-info--genres">
                    {genresConverted && genresConverted.map(genre => (
                        <span key={`Genre--id_${genre}`} className="genre-title">{genre}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RowPoster
