import "./search.scss";
import Poster from "../../components/Poster/Poster";
import { motion } from "framer-motion";
import { staggerHalf } from "../../motionUtils";
import { useSelector } from "react-redux";
import { selectSearchInputValue } from "../../redux/search/search.selectors";

const Search = (searchResults) => {
    const { results } = searchResults;
    const selectInputValue = useSelector(selectSearchInputValue);

    if (!results || results.length === 0) {
        return (
            <div className="Search">
                <motion.div
                    className="Search__wrp"
                    variants={staggerHalf}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <h2 className="Search__title">
                        Sorry, we searched everywhere but we did not found any
                        movie or tv-show with that title.
                    </h2>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="Search">
            <h2 className="Search__title">
                Search results for: {selectInputValue}
            </h2>

            <motion.div
                className="Search__wrp"
                variants={staggerHalf}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                {results.map((result) => (
                    <Poster key={result.id} item={result} {...result} />
                ))}
            </motion.div>
        </div>
    );
};

export default Search;
