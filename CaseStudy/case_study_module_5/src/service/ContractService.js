import axios from "axios";

export const createContractCode = async (facilityId, code) => {
    try {
        if (facilityId === '1') {
            return ('VI-' + code);
        } else if (facilityId === '2') {
            return ('HO-' + code)
        } else {
            return ('RO-' + code)
        }
    } catch (e) {
        console.log(e)
    }
}

export const createCode = async () => {
    try {
        let code = (Math.floor(Math.random() * 10000) + 1);
        if(code>=10000){
            code = code.toString();
        }else if(code>=1000){
            code = "0"+ code.toString();
        }else if(code>=100){
            code = "00"+code.toString();
        }else if (code>=10){
            code = "000" + code.toString();
        }else {
            code = "0000" + code.toString();
        }
        return code;
    } catch
        (e) {
        console.log(e)
    }
}


export const create = async (param) => {
    try {
        await axios.post('http://localhost:8080/contract', param)
    } catch (e) {
        console.log(e)
    }
}


export const deleteContract = async (id) => {
    try {
        await axios.delete('http://localhost:8080/contract/' + id)
    } catch (e) {
        console.log(e)
    }
}


export async function findAll() {
    try {
        return (await axios.get('http://localhost:8080/contract')).data
    } catch (e) {
        console.log(e)
    }
}
