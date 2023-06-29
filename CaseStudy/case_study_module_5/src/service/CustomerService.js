import axios from "axios";

export const save = async (customer) => {
    try{
        await axios.put('http://localhost:8080/customer/'+customer.id,customer)
    }catch (e) {
        console.log(e)
    }
}


export const getCustomerApi = async (id) => {
    try{
        return (await axios.get('http://localhost:8080/customer/'+id)).data;
    }catch (e) {
        console.log(e)
    }
}


export const create = async (value) => {
    try {
        await axios.post('http://localhost:8080/customer', value)
    } catch (e) {
        console.log(e)
    }
}


export const getListCustomerTypes = async () => {
    try {
        return (await axios.get('http://localhost:8080/customerType')).data
    } catch (e) {
        console.log(e)
    }
}


export const find = async (id) => {
    try {
        return (await axios.get('http://localhost:8080/gender/' + id)).data
    } catch (e) {
        console.log(e)
    }
}


export const getListGender = async () => {
    try {
        return (await axios.get('http://localhost:8080/gender')).data
    } catch (e) {
        console.log(e)
    }
}


export const deleteCustomer = async (id) => {
    try {
        await axios.delete('http://localhost:8080/customer/' + id)
    } catch (e) {
        console.log(e)
    }
}


export const findAll = async () => {
    try {
        return (await axios.get('http://localhost:8080/customer')).data;
    } catch (e) {
        console.log(e)
    }
}