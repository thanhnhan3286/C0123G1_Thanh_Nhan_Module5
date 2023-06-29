import axios from "axios";

export const deleteContract = async (id) => {
    try{
        await axios.delete('http://localhost:8080/contract/' +id)
    }catch (e) {
        console.log(e)
    }
}


export async function findAll() {
    try{
        return (await axios.get('http://localhost:8080/contract')).data
    }catch (e) {
        console.log(e)
    }
}
