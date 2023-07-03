import axios from "axios"

export const save = async (facility) => {
    try {
        await  axios.put('http://localhost:8080/facility/'+ facility.id, facility)
    } catch (e) {
        console.log(e)
    }
}
export const getFacilityApi = async (id) => {
    try {
        return (await axios.get('http://localhost:8080/facility/'+ id)).data
    }catch (e) {
        console.log(e)
    }
}


export const create = async (values) => {
    try {
        await axios.post('http://localhost:8080/facility', values)
    } catch (e) {
        console.log(e)
    }
}


export async function findAllRoomStandard() {
    try {
        return (await axios.get('http://localhost:8080/roomStandard')).data
    } catch (e) {
        console.log(e)
    }
}


export const findAllFacilityType = async () => {
    try {
        return (await axios.get('http://localhost:8080/type')).data
    } catch (e) {
        console.log(e)
    }

}


export async function findAllRentalType() {
    try {
        const result = await axios.get('http://localhost:8080/rentalType')
        return result.data;
    } catch (e) {
        console.log(e)
    }
}


export async function deleteFacility(id) {
    try {
        await axios.delete('http://localhost:8080/facility/' + id)
    } catch (e) {
        console.log(e)
    }
}


export const findAll = async () => {
    try {
        const result = await axios.get('http://localhost:8080/facility?_sort=id&_order=desc')
        return result.data
    } catch (e) {
        console.log(e)
    }
}