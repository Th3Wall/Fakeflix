import "./myList.scss"
import Poster from "../../components/Poster/Poster";
import { motion } from "framer-motion";
import { defaultEasing, staggerHalf } from "../../motionUtils";
import { useSelector } from "react-redux"
import { selectFavouritesList } from "../../redux/favourites/favourites.selectors"

const MyList = () => {

    const favs = useSelector(selectFavouritesList);
    const fadeIn = {
        initial: { opacity: 0, transition: { duration: .6, ease: defaultEasing }, willChange: "opacity, transform" },
        animate: { opacity: 1, transition: { duration: .6, ease: defaultEasing }, willChange: "opacity, transform" },
        exit: { opacity: 0, transition: { duration: .6, ease: defaultEasing }, willChange: "opacity, transform" }
    };

    return (
        <motion.div
            className="MyList"
            variants={fadeIn}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {favs && favs.length > 0 && (
                <h2 className="MyList__title">My List</h2>
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
                            {`Sorry, you don't have a favourite movie or tv-show yet.`}
                        </h2>
                    )
                }
            </motion.div>
        </motion.div>
    )
}

export default MyList