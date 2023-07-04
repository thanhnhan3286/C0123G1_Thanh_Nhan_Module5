import axios from "axios";

export const findById = async (price) => {
    try{
        return (await axios.get('http://localhost:8080/products/'+price)).data;
    }catch (e) {
        console.log(e)
    }
}


export const findAll = async () => {
    try {
        return (await axios.get('http://localhost:8080/api/product/list')).data;
    }catch (e) {
        console.log(e)
    }
}
export const findAllType = async () => {
    try {
        return (await axios.get('http://localhost:8080/types')).data;
    }catch (e) {
        console.log(e)
    }
}
