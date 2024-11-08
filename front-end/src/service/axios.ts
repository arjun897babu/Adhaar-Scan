import Axios from "axios";

export const server = Axios.create({
    baseURL:'http://localhost:3001',
    headers:{"Content-Type":'multipart/formData'}
})

