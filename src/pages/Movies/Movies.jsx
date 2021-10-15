import "./movies.scss"
import Banner from "../../components/Banner/Banner"
import Row from "../../components/Row/Row"
import Credits from "../../components/Credits/Credits";
import { useRetrieveData } from "../../hooks/useRetrieveData";
import { motion } from "framer-motion";
import { defaultPageFadeInVariants } from "../../motionUtils";
import { selectFavouritesList } from "../../redux/favourites/favourites.selectors"
import { useSelector } from "react-redux";

const Movies = () => {
    const rows = useRetrieveData('movies');
    const favs = useSelector(selectFavouritesList);

    return (
        <motion.div
            className="Movies"
            variants={defaultPageFadeInVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Banner type='movies' />
            {rows && rows.map(props => (
                <Row key={props.id} {...props} favs={favs} />
            ))}
            <Credits />
        </motion.div>
    )
}

export default Movies
