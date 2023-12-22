
import axios from "axios"

const axiosLocal = axios.create({
    baseURL: "https://task-lac-chi.vercel.app"
    // baseURL: "http://localhost:4000"
})

const useAxiosLocal = () => {

    return axiosLocal
}

export default useAxiosLocal

