import "./category.scss"
import { useRetrieveCategory } from "../../hooks/useRetrieveCategory";

const Category = ({match}) => {
    const [ categoryData ] = useRetrieveCategory(match);

    return (
        <>
            {categoryData && (
                <div className="Category">
                    <h2 className="Category__title">{categoryData.title}</h2>
                </div>
            )}
        </>
    )
}

export default Category
