import "./searchResults.scss"
import { BASE_IMG_URL } from "../../requests"

const SearchResults = result => {
    const {item: {poster_path}, title} = result;

    return (
        <div className='SearchResults'>
            <img src={`${BASE_IMG_URL}/${poster_path}`} alt={title} />
        </div>
    )
}

export default SearchResults
