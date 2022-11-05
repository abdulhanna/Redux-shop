import axios from "axios"

const hostedAxios = axios.create({
    baseURL: "https://fakestoreapi.com",
})
export default hostedAxios