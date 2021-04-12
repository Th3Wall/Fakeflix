import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchMovieDataConfig, fetchPopularDataConfig, fetchSeriesDataConfig } from "../dataConfig";

export const useRetrieveCategory = match => {

	const dispatch = useDispatch();
	const [categoryData, setCategoryData] = useState();
	const { url, params: { categoryName } } = match;
	const slicedUrl = url.split("/");

	useEffect(() => {
		switch (slicedUrl[1]) {
			case "browse":
			case "movies":
				{
					const [data] = fetchMovieDataConfig.filter(el => el.genre === categoryName);
					setCategoryData(data);
					break;
				}
			case "tvseries":
				{
					const [data] = fetchSeriesDataConfig.filter(el => el.genre === categoryName);
					setCategoryData(data);
					break;
				}
			case "popular":
				{
					const [data] = fetchPopularDataConfig.filter(el => el.genre === categoryName);
					setCategoryData(data);
					break;
				}
			default:
				break;
		}
	}, [match, categoryName, slicedUrl, dispatch])

	return [categoryData];
}