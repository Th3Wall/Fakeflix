import "./myList.scss"
import FavouritePoster from "../../components/FavouritePoster/FavouritePoster"
import { useSelector } from "react-redux"
import { selectFavouritesList } from "../../redux/favourites/favourites.selectors"

const MyList = () => {

    const favs = useSelector(selectFavouritesList);
    
    return (
        <div className="MyList">
            {favs && favs.length > 0 && (
                <h2 className="MyList__title">My List</h2>
            )}
            <div className="MyList__wrp">
                {favs && favs.length > 0
                    ? favs.map(result => (
                        <FavouritePoster
                            key={result.id}
                            item={result}
                            {...result}
                        />
                    ))
                    : (
                        <h2 className="MyList__title">
                            {`Sorry, you don't have a favourite movie or tv-show yet.`}
                        </h2>
                    )
                }
            </div>
        </div>
    )
}

export default MyList