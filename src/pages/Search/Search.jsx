import "./search.scss"
import SearchResults from "../../components/SearchResults/SearchResults";

const Search = searchResults => {
	const { results } = searchResults;

    return (
		<div className="Search">
			{results && results.length > 0 && (
				<h2 className="Search__title">Search results for </h2>
			)}
			{results &&
				results.length > 0 &&
				results.map(result => (
                    <SearchResults
						key={result.id}
                        item={result}
                        {...result}
                    />)
                )
			}
		</div>
	);
}

export default Search
