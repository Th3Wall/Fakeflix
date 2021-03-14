import axios from "../utils"
import { useState, useEffect } from "react"

const useFetch = url => {
    const [response, setResponse] = useState([])
    const [loading, setLoading] = useState("")
    const [error, setError] = useState("")

    useEffect(() => {
        setLoading(true)
        axios
            .get(url)
            .then(response => {
                const {
                    data: { results },
                } = response
                setResponse(results)
                setLoading(false)
            })
            .catch(err => {
                setError(true, err)
                setLoading(false)
            })
    }, [url])

    return [response, loading, error]
}

export default useFetch
