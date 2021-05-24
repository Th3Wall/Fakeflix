import "./homepage.scss"
import Row from "../../components/Row/Row"
import Banner from "../../components/Banner/Banner"
import { useRetrieveData } from "../../hooks/useRetrieveData";
import { motion } from "framer-motion";

const Homepage = () => {

    const rows = useRetrieveData('movies');

    let easing = [0.6, -0.05, 0.01, 0.99];
    const fadeIn = {
        initial: { opacity: 0, transition: { duration: .6, ease: easing }, willChange: "opacity, transform" },
        animate: { opacity: 1, transition: { duration: .6, ease: easing }, willChange: "opacity, transform" },
        exit: { opacity: 0, transition: { duration: .6, ease: easing }, willChange: "opacity, transform" }
    };

    return (
        <motion.div
            className="Homepage"
            variants={fadeIn}
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
