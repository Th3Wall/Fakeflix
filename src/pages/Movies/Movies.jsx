import "./movies.scss"
import Row from "../../components/Row/Row"
import Banner from "../../components/Banner/Banner"
import { useRetrieveData } from "../../hooks/useRetrieveData";
import { motion } from "framer-motion";
import { defaultEasing } from "../../motionUtils";

const Movies = () => {

    const rows = useRetrieveData('movies');
    const fadeIn = {
        initial: { opacity: 0, transition: { duration: .6, ease: defaultEasing }, willChange: "opacity, transform" },
        animate: { opacity: 1, transition: { duration: .6, ease: defaultEasing }, willChange: "opacity, transform" },
        exit: { opacity: 0, transition: { duration: .6, ease: defaultEasing }, willChange: "opacity, transform" }
    };

    return (
        <motion.div
            className="Movies"
            variants={fadeIn}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Banner type='movies' />
            {rows && rows.map(props => (
                <Row key={props.id} {...props} />
            ))}
        </motion.div>
    )
}

export default Movies
