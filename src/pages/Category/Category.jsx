import "./category.scss"
import { useState } from "react";
import { useRetrieveCategory } from "../../hooks/useRetrieveCategory";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Category = ({match}) => {
    const [page, setPage] = useState(1);
    const { url } = match;
    const slicedUrl = url.split("/");
    const { categoryName } = useParams();
    const categoryData = useRetrieveCategory(slicedUrl[1], categoryName, page);

    const selectorThatReturnsUndefined = () => undefined
    const selector = categoryData ? categoryData.selector : selectorThatReturnsUndefined
    const data = useSelector(selector)
    console.log("data => ", data);

    return (
        <>
            {categoryData && (
                <div className="Category">
                    <h2 className="Category__title">{categoryData.title}</h2>
                    <button onClick={()=> setPage(page+1)}>Change page</button>
                </div>
            )}
        </>
    )
}

export default Category
