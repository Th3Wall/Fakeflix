import "./category.scss"
import Poster from "../../components/Poster/Poster";
import { useRef, useEffect, useState, useCallback } from "react";
import { useRetrieveCategory } from "../../hooks/useRetrieveCategory";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Category = ({match}) => {
    const [page, setPage] = useState(2);
    const { url } = match;
    const slicedUrl = url.split("/");
    const { categoryName } = useParams();
    const categoryData = useRetrieveCategory(slicedUrl[1], categoryName, page);
    const preventUndefinedSelector = () => undefined;
    const selector = categoryData ? categoryData.selector : preventUndefinedSelector;
    const selectedGenre = useSelector(selector);

    const containerRef = useRef(null)
    const currentExtractedRef = containerRef.current;

    const callbackFunction = useCallback((entries) => {
        const [ entry ] = entries;
        if (entry.isIntersecting) {
            setPage(page => page + 1);
        }
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction)
        if (currentExtractedRef) observer.observe(currentExtractedRef)

        return () => {
            if(currentExtractedRef) observer.unobserve(currentExtractedRef)
        }
    }, [currentExtractedRef, callbackFunction])

    return (
        <div className="Category">
            {categoryData && (
                <>
                    <h2 className="Category__title">{categoryData.title}</h2>

                    <div className="Category__wrp">
                        {selectedGenre.data && selectedGenre.data.length > 0
                            && selectedGenre.data.map(result => (
                                <Poster
                                    key={result.id}
                                    item={result}
                                    {...result}
                                />
                            ))
                        }
                        {selectedGenre.loading && <div className='Category__subtitle'>Loading...</div>}
                        {selectedGenre.error && <div className='Category__subtitle'>Error occurred.</div>}
                        <div className="box" ref={containerRef} />
                    </div>
                </>
            )}
        </div>
    )
}

export default Category
