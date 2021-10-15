import "./myList.scss"
import Poster from "../../components/Poster/Poster";
import Credits from "../../components/Credits/Credits";
import { motion } from "framer-motion";
import { staggerHalf, defaultPageFadeInVariants } from "../../motionUtils";
import { useSelector } from "react-redux"
import { selectFavouritesList } from "../../redux/favourites/favourites.selectors"
import { BiInfoCircle } from "react-icons/bi";
import Tooltip from "../../components/Tooltip/Tooltip"

const MyList = () => {
    const favs = useSelector(selectFavouritesList);

    return (
        <motion.div
            className="MyList"
            variants={defaultPageFadeInVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {favs && favs.length > 0 && (
              <Tooltip text="Stored locally on your Browser. If you clear your cache, your list will be gone. We are working on making in permanent!">
                <div className="MyList__titleBox">
                  <h2 className="MyList__title">My List</h2>
                  <BiInfoCircle size="1.5em"/>
                </div>
              </Tooltip>

            )}
            <motion.div
                className="MyList__wrp"
                variants={staggerHalf}
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
                            Sorry, you don&apos;t have a favourite movie or tv-show yet.
                        </h2>
                    )
                }
            </motion.div>
            <Credits />
        </motion.div>
    )
}

export default MyList