import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchMovieDataConfig, fetchPopularDataConfig, fetchSeriesDataConfig } from "../dataConfig";

export const useRetrieveCategory = (slicedUrl, categoryName, page) => {

	const dispatch = useDispatch();
	const [categoryData, setCategoryData] = useState();

	useEffect(() => {
		let selectedConfigArray = null;
		switch (slicedUrl) {
			case "browse":
			case "movies":
				selectedConfigArray = fetchMovieDataConfig;
				break;
			case "tvseries":
				selectedConfigArray = fetchSeriesDataConfig;
				break;
			case "popular":
				selectedConfigArray = fetchPopularDataConfig;
				break;
			default:
				break;
		}

		const [data] = selectedConfigArray.filter(el => el.genre === categoryName);
		dispatch(data.thunk(`${data.url}&page=${page}`));
		setCategoryData(data);

	}, [dispatch, categoryName, slicedUrl, page])

	return categoryData;
}