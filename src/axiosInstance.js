import axios from "axios"

const instance = axios.create({
    baseURL: "https://cdn.jwplayer.com/v2",
})

export default instance
