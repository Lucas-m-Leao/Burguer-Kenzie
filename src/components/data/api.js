import axios from "axios";

const Data = axios.create({
    baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com",
    timeout: 15000
})
export default Data