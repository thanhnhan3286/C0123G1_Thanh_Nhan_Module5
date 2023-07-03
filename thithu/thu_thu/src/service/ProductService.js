import axios from "axios";

export const search = async (values) => {
    try {
        return (await axios.get(`http://localhost:8000/products?name_like=${values.name}&typeId_like=${values.typeId}&_sort=id&_order=desc`)).data
    }catch (e) {
        console.log(e)
    }
}


export const savePro = async (param) => {
    try{
        await axios.put('http://localhost:8000/products/'+param.id,param)
    }catch (e) {
        console.log(e)
    }
}


export const findById = async (id) => {
    try {
        return (await axios.get('http://localhost:8000/products/'+id)).data
    }catch (e) {
        console.log(e)
    }
}


export const createPro = async (values) => {
    try{
        await axios.post('http://localhost:8000/products',values)
    }catch (e) {
        console.log(e)
    }
}


export const deleteProduct = async (id)=>
{
    try {
        await axios.delete('http://localhost:8000/products/' + id)
    }catch (e) {
        console.log(e)
    }
}


export const findAllType = async () => {
    try{
        return (await axios.get('http://localhost:8000/type')).data
    }catch (e) {
        console.log(e)
    }

}


export const findAll = async () =>  {
    try {
        return (await axios.get('http://localhost:8000/products?_sort=id&_order=desc')).data
    }catch (e) {
        console.log(e)
    }
}
