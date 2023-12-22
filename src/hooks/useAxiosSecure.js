import axios from "axios"


const axiosSecure = axios.create({
    // baseURL: "http://localhost:4000"
    baseURL: "https://task-lac-chi.vercel.app"
})

const useAxiosSecure = () => {
  return (
   axiosSecure
  )
}

export default useAxiosSecure