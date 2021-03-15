import { useEffect } from "react"
import { useDispatch } from "react-redux"
import requests from "../requests"
import {
    fetchActionAdventureSeriesAsync,
    fetchAnimationSeriesAsync,
    fetchComedySeriesAsync,
    fetchCrimeSeriesAsync,
    fetchDocumentarySeriesAsync,
    fetchFamilySeriesAsync,
    fetchKidsSeriesAsync,
    fetchNetflixSeriesAsync,
    fetchSciFiFantasySeriesAsync
} from "../redux/series/series.actions"

const {
    fetchActionAdventureSeries,
    fetchAnimationSeries,
    fetchComedySeries,
    fetchCrimeSeries,
    fetchDocumentarySeries,
    fetchFamilySeries,
    fetchKidsSeries,
    fetchNetflixOriginals,
    fetchSciFiFantasySeries
} = requests

export const useRetrieveAllSeries = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchActionAdventureSeriesAsync(fetchActionAdventureSeries))
        dispatch(fetchAnimationSeriesAsync(fetchAnimationSeries))
        dispatch(fetchComedySeriesAsync(fetchComedySeries))
        dispatch(fetchCrimeSeriesAsync(fetchCrimeSeries))
        dispatch(fetchDocumentarySeriesAsync(fetchDocumentarySeries))
        dispatch(fetchFamilySeriesAsync(fetchFamilySeries))
        dispatch(fetchKidsSeriesAsync(fetchKidsSeries))
        dispatch(fetchNetflixSeriesAsync(fetchNetflixOriginals))
        dispatch(fetchSciFiFantasySeriesAsync(fetchSciFiFantasySeries))
    }, [dispatch])
}
