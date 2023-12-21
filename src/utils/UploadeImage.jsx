import useAxiosLocal from "../hooks/useAxiosLocal";

const UploadeImage = async (image) => {
    const axiosLocal = useAxiosLocal()
    const formData = new FormData();
    formData.append("image", image)
    const res = await axiosLocal.post(`https://api.imgbb.com/1/upload?key=39dd76e8fdda7e46d4d734a809c09d5a`, formData)
    return res?.data?.data?.url
}

export default UploadeImage