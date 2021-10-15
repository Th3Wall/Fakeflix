import "./homepage.scss"
import Banner from "../../components/Banner/Banner"
import Row from "../../components/Row/Row"
import Credits from "../../components/Credits/Credits";
import { useRetrieveData } from "../../hooks/useRetrieveData";
import { motion } from "framer-motion";
import { defaultPageFadeInVariants } from "../../motionUtils";
import { selectFavouritesList } from "../../redux/favourites/favourites.selectors"
import { useSelector } from "react-redux";

const Homepage = () => {
    const rows = useRetrieveData('browse');
    const favs = useSelector(selectFavouritesList);

    return (
        <motion.div
            className="Homepage"
            variants={defaultPageFadeInVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Banner />
            {rows && rows.filter(el => el.genre !== 'banner' ).map(props => (
                <Row key={props.id} {...props } favs={favs} />
            ))}
            <Credits />
        </motion.div>
    )
}

export default Homepage
