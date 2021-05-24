import "./myList.scss"
import Poster from "../../components/Poster/Poster";
import { motion } from "framer-motion";
import { useSelector } from "react-redux"
import { selectFavouritesList } from "../../redux/favourites/favourites.selectors"

const MyList = () => {

    const favs = useSelector(selectFavouritesList);
    let easing = [0.6, -0.05, 0.01, 0.99];
    const fadeIn = {
        initial: { opacity: 0, transition: { duration: .6, ease: easing }, willChange: "opacity, transform" },
        animate: { opacity: 1, transition: { duration: .6, ease: easing }, willChange: "opacity, transform" },
        exit: { opacity: 0, transition: { duration: .6, ease: easing }, willChange: "opacity, transform" }
    };
    const stagger = {
        animate: { transition: { staggerChildren: .05 }}
    }

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
        </motion.div>
    )
}

export default MyList