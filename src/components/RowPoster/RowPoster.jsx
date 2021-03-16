import "./rowPoster.scss"
import { BASE_IMG_URL } from "../../requests"
import { useDispatch } from 'react-redux';
import { addToFavourites, removeFromFavourites } from "../../redux/favourites/favourites.actions";
import { useSelector } from 'react-redux';
import { selectFavouritesList } from "../../redux/favourites/favourites.selectors";

const RowPoster = result => {
    const {id, image, title, isLarge} = result;
    const dispatch = useDispatch();
    const selector = useSelector(selectFavouritesList);
    let isFavourite = selector.includes(result) ? true : false;
    
    const handleAdd = () => {
        dispatch(addToFavourites(result));
    }
    const handleRemove = () => {
        dispatch(removeFromFavourites(result));
    }

    return (
        <div key={id} className={`Row__poster ${isLarge ? "Row__poster--big" : ""}`}>
            <button onClick={!isFavourite ? handleAdd : handleRemove}>{`${isFavourite ? 'Remove from' : 'Add to'} Favourites`}</button>
            <img src={`${BASE_IMG_URL}/${image}`} alt={title} loading="lazy" />
        </div>
    )
}

export default RowPoster
