import "./tvSeries.scss"
import Row from "../../components/Row/Row"
import Banner from "../../components/Banner/Banner"
import { useRetrieveData } from "../../hooks/useRetrieveData";
import { motion } from "framer-motion";

const TVSeries = () => {
    const rows = useRetrieveData('series');
    let easing = [0.6, -0.05, 0.01, 0.99];
    const fadeIn = {
        initial: { opacity: 0, transition: { duration: .6, ease: easing }, willChange: "opacity, transform" },
        animate: { opacity: 1, transition: { duration: .6, ease: easing }, willChange: "opacity, transform" },
        exit: { opacity: 0, transition: { duration: .6, ease: easing }, willChange: "opacity, transform" }
    };

    return (
        <motion.div
            className="TVSeries"
            variants={fadeIn}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Banner type='series' />
            {rows && rows.map(props => (
                <Row key={props.id} {...props} />
            ))}
        </motion.div>
    )
}

export default TVSeries
