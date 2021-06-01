import "./homepage.scss"
import Row from "../../components/Row/Row"
import Banner from "../../components/Banner/Banner"
import { useRetrieveData } from "../../hooks/useRetrieveData";
import { motion } from "framer-motion";
import { defaultPageFadeInVariants } from "../../motionUtils";

const Homepage = () => {
    const rows = useRetrieveData('movies');

    return (
        <motion.div
            className="Homepage"
            variants={defaultPageFadeInVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Banner />
            {rows && rows.map(props => (
                <Row key={props.id} {...props} />
            ))}
        </motion.div>
    )
}

export default Homepage
