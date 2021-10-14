import "./category.scss"
import Poster from "../../components/Poster/Poster";
import SkeletonPage from "../../components/SkeletonPage/SkeletonPage";
import SkeletonPoster from "../../components/SkeletonPoster/SkeletonPoster";
import { motion } from "framer-motion";
import { staggerHalf } from "../../motionUtils";
import { useRetrieveCategory } from "../../hooks/useRetrieveCategory";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Category = ({ match }) => {
    const { url } = match;
    const slicedUrl = url.split("/");
    const { categoryName } = useParams();
    const categoryData = useRetrieveCategory(slicedUrl[1], categoryName);
    const preventUndefinedSelector = () => undefined;
    const selector = categoryData ? categoryData.selector : preventUndefinedSelector;
    const selectedGenre = useSelector(selector);

    return (
        <div className="Category">
            {categoryData ? (
                <>
                    <h2 className="Category__title">{categoryData.title}</h2>

                    <motion.div
                        className="Category__wrp"
                        variants={staggerHalf}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        {selectedGenre.data && selectedGenre.data.length > 0
                            && selectedGenre.data.map(result => (
                                <Poster
                                    key={result.id}
                                    item={result}
                                    {...result}
                                />
                            ))
                        }
                        {selectedGenre.loading && <div className='Category__subtitle'><SkeletonPoster /></div>}
                        {selectedGenre.error && <div className='Category__subtitle'>Oops, an error occurred.</div>}
                        <div className='Category__endPage'/>
                    </motion.div>
                </>
            ) : <SkeletonPage />}
        </div>
    )
}

export default Category
