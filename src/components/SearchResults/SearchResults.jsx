import "./searchResults.scss"
import { BASE_IMG_URL } from "../../requests"

const SearchResults = result => {
    const {item: {backdrop_path}, title} = result;

    return (
        <div className='SearchResults'>
            <img src={`${BASE_IMG_URL}/${backdrop_path}`} alt={title} />
        </div>
    )
}

export default SearchResults
