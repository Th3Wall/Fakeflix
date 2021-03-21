import "./rowPoster.scss"
import { BASE_IMG_URL } from "../../requests"
import { useDispatch } from 'react-redux';
import { addToFavourites, removeFromFavourites } from "../../redux/favourites/favourites.actions";
// import { useSelector } from 'react-redux';
// import { selectFavouritesList } from "../../redux/favourites/favourites.selectors";
import { FaPlus, FaMinus } from "react-icons/fa"

const RowPoster = result => {
    const { image, title, isLarge, isFavourite } = result;
    const dispatch = useDispatch();
    // const selector = useSelector(selectFavouritesList);
    // let isFavourite = selector.includes(result) ? true : false;
    
    const handleAdd = () => {
        dispatch(addToFavourites(result));
    }
    const handleRemove = () => {
        dispatch(removeFromFavourites(result));
    }

    return (
        <div className={`Row__poster ${isLarge ? "Row__poster--big" : ""}`}>
            <button className='Button'>
                {!isFavourite
                    ? <FaPlus onClick={handleAdd} />
                    : <FaMinus onClick={handleRemove} />
                }
            </button>
            <img src={`${BASE_IMG_URL}/${image}`} alt={title} />
        </div>
    )
}

export default RowPoster
