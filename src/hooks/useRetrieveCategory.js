import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchMovieDataConfig, fetchPopularDataConfig, fetchSeriesDataConfig } from "../dataConfig";

export const useRetrieveCategory = (slicedUrl, categoryName, page) => {

	const dispatch = useDispatch();
	const [categoryData, setCategoryData] = useState();

	useEffect(() => {
		switch (slicedUrl) {
			case "browse":
			case "movies":
				{
					const [data] = fetchMovieDataConfig.filter(el => el.genre === categoryName);
					dispatch(data.thunk(`${data.url}&page=${page}`));
					setCategoryData(data);
				}
				break
			case "tvseries":
				{
					const [data] = fetchSeriesDataConfig.filter(el => el.genre === categoryName);
					dispatch(data.thunk(`${data.url}&page=${page}`));
					setCategoryData(data);
				}
				break
			case "popular":
				{
					const [data] = fetchPopularDataConfig.filter(el => el.genre === categoryName);
					dispatch(data.thunk(`${data.url}&page=${page}`));
					setCategoryData(data);
				}
				break
			default:
				break
		}
	}, [dispatch, categoryName, slicedUrl, page])

	return categoryData;
}