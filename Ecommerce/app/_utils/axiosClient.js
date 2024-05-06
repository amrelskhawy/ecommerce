import axios from "axios"

const ApiKey = process.env.NEXT_PUBLIC_REST_API_KEY
const ApiUrl = 'http://localhost:1337/api'

const axiosClient = axios.create({
    baseURL: ApiUrl,
    headers: {
        Authorization: `Bearer ${ApiKey}`
    }
})

export default axiosClient