import "./search.scss"
import SearchResults from "../../components/SearchResults/SearchResults";

const Search = searchResults => {
	const { results } = searchResults;

    return (
		<div className="Search">
			{results && results.length > 0 && (
				<h2 className="Search__title">Search results for </h2>
			)}
			<div className="MyList__wrp">
				{results && results.length > 0
					? results.map(result => (
						<SearchResults
							key={result.id}
							item={result}
							{...result}
						/>)
					)
					: (
						<h2 className="Search__title">
							Sorry, we searched everywhere but we did not found any movie or tv-show with that title.
						</h2>
					)
				}
			</div>
		</div>
	);
}

export default Search
