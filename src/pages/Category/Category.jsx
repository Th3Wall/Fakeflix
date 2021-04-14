import "./category.scss"
import { useState } from "react";
import { useRetrieveCategory } from "../../hooks/useRetrieveCategory";

const Category = ({match}) => {
    const [page, setPage] = useState(1);
    const categoryData = useRetrieveCategory(match, page);
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
