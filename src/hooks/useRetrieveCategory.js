import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { fetchMovieDataConfig, fetchPopularDataConfig, fetchHomeDataConfig, fetchCartoonsDataConfig } from "../dataConfig";

export const useRetrieveCategory = (slicedUrl, categoryName) => {
  let selected;
	switch (slicedUrl) {
      case "browse":
        selected = fetchHomeDataConfig;
				break;
      case "movies":
        selected = fetchMovieDataConfig;
        break;
      case "cartoons":
        selected = fetchCartoonsDataConfig;
        break;
			case "popular":
				selected = fetchPopularDataConfig;
				break;
			default:
				break;
	}
  const [data] = selected.filter(el => el.genre === categoryName);
  const selectedGenre = useSelector(data.selector);
	const dispatch = useDispatch();
	const [categoryData, setCategoryData] = useState();
  
	useEffect(() => {
		dispatch(data.thunk(`${data.url}?page_limit=500&page_offset=${selectedGenre.data.length + 1}`));
		setCategoryData(data);
	}, [dispatch, categoryName, slicedUrl, data, selectedGenre])

	return categoryData;
}