import axios, { AxiosError } from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api/',
    params:{
        key:'dc17805cf8ec4aab933474f2a65ebea6'
    }
});

export {AxiosError}