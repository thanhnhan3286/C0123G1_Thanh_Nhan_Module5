import axios from "axios";

export const deleteOr = async (id) => {
    try {
        await axios.delete('http://localhost:8080/api/order/delete/'+id);
    }catch (e) {
        console.log(e)
    }
}


export const create = async (values) => {
    try {
        await axios.post('http://localhost:8080/api/order/create',values);
    }catch (e) {
        console.log(e)
    }
}


export const findAll = async () => {
try{
    return (await axios.get('http://localhost:8080/api/order/list')).data;
}catch (e) {
    console.log(e)
}
}
