import axios from "axios";

export const deleteProduct = async (id)=>{
    try{
        await axios.delete('http://localhost:8001/products/'+id)
    }catch (e) {
        console.log(e)
    }
}





export const findTypeProduct = async () => {
    try{
        return (await axios.get('http://localhost:8001/type')).data;
    }catch (e) {
        console.log(e)
    }
}


export const findAllProduct = async () => {
    try{
        return (await axios.get('http://localhost:8001/products?_sort=id&_order=desc')).data;
    }catch (e) {
        console.log(e);
    }
}
