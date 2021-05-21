import "./myList.scss"
import Poster from "../../components/Poster/Poster";
import { motion } from "framer-motion";
import { useSelector } from "react-redux"
import { selectFavouritesList } from "../../redux/favourites/favourites.selectors"

const MyList = () => {

    const favs = useSelector(selectFavouritesList);
    const stagger = {
        animate: { transition: { staggerChildren: .05 }}
    }
    
    return (
        <div className="MyList">
            {favs && favs.length > 0 && (
                <h2 className="MyList__title">My List</h2>
            )}
            <motion.div
                className="MyList__wrp"
                variants={stagger}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                {favs && favs.length > 0
                    ? favs.map(result => (
                        <Poster
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
            </motion.div>
        </div>
    )
}

export default MyList