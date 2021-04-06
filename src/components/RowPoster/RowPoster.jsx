import "./rowPoster.scss"
import { BASE_IMG_URL } from "../../requests"
import { useDispatch } from 'react-redux';
import { addToFavourites, removeFromFavourites } from "../../redux/favourites/favourites.actions";
import { FaPlus, FaMinus, FaPlay, FaChevronDown } from "react-icons/fa";
import useGenreConversion from "../../hooks/useGenreConversion";
import { showModalDetail } from "../../redux/modal/modal.actions";

const RowPoster = result => {
    const { item, item: { title, original_name, original_title, name, genre_ids }, image, isLarge, isFavourite } = result;
    let fallbackTitle = title || original_title || name || original_name;
    const genresConverted = useGenreConversion(genre_ids);
    const dispatch = useDispatch();

    const handleAdd = (event) => {
        event.stopPropagation();
        dispatch(addToFavourites(result));
    }
    const handleRemove = (event) => {
        event.stopPropagation();
        dispatch(removeFromFavourites(result));
    }
    const handleModalOpening = () => {
        dispatch(showModalDetail({ ...item, fallbackTitle, genresConverted, isFavourite, result }));
    }
    const handlePlayAction = (event) => {
        event.stopPropagation();
    }

    return (
        <div className={`Row__poster ${isLarge ? "Row__poster--big" : ""}`} onClick={handleModalOpening}>
            <img src={`${BASE_IMG_URL}/${image}`} alt={fallbackTitle}/>

            <div className="Row__poster-info">
                <div className="Row__poster-info--iconswrp">
                    <button
                        className='Row__poster-info--icon icon--play'
                        onClick={handlePlayAction}
                    >
                        <FaPlay />
                    </button>
                    {!isFavourite
                        ? (
                            <button className='Row__poster-info--icon icon--favourite' onClick={handleAdd}>
                                <FaPlus />
                            </button>
                        ): (
                            <button className='Row__poster-info--icon icon--favourite' onClick={handleRemove}>
                                <FaMinus />
                            </button>
                    )}
                    <button className='Row__poster-info--icon icon--toggleModal'>
                        <FaChevronDown onClick={handleModalOpening}/>
                    </button>
                </div>
                <div className="Row__poster-info--title">
                    <h3>{fallbackTitle}</h3>
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