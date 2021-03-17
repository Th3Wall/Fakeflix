import "./myList.scss"
import RowPoster from "../../components/RowPoster/RowPoster"
import { useSelector } from "react-redux"
import { selectFavouritesList } from "../../redux/favourites/favourites.selectors"

const MyList = () => {

    const favs = useSelector(selectFavouritesList);
    
    return (
        <div className="MyList">
            {favs && favs.length > 0
                ? favs.map(props => (
                    <RowPoster
                        key={props.id}
                        {...props}
                    />
                ))
                : (
                    <h2>{`Sorry, you don't have a favourite movie or tv-show yet.`}</h2>
                )
            }
        </div>
    )
}

export default MyList
