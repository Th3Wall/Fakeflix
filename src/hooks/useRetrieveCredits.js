import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { LANG } from "../requests";
import axios from "../axiosInstance";

export const useRetrieveCredits = (type, id) => {

    const dispatch = useDispatch();
    const [credits, setCredits] = useState(null);

    console.log("type => ", type);
    console.log("id => ", id);

    useEffect(() => {
        switch (type) {
            case "movie":
                {
                    axios
                        .get(`/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&page=1&language=${LANG}`)
                        .then(response => {
                            const { data } = response;
                            setCredits(data);
                        })
                        .catch(err => {
                            console.log('Fetch failed => ', err);
                        })
                }
                break
            case "tv":
                {
                    axios
                        .get(`/tv/${id}/aggregate_credits?api_key=${process.env.REACT_APP_API_KEY}&page=1&language=${LANG}`)
                        .then(response => {
                            const { data } = response;
                            setCredits(data);
                        })
                        .catch(err => {
                            console.log('Fetch failed => ', err);
                        })
                }
                break
            default:
                console.log("wrong type");
                setCredits(null);
                break;
        }
    }, [type, id, dispatch])

    return credits
}
