import "./category.scss"

const Category = ({match}) => {
    const { params: { categoryName } } = match;
    
    return (
        <div className="Category">
            <h2 className="Category__title">{categoryName}</h2>
        </div>
    )
}

export default Category
