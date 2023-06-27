import axios from "axios";

export async function findById(id) {
    try {
        const result = await axios.get('http://localhost:8080/book/'+id)
        return result.data
    }catch (e) {
        console.log(e)
    }
}
export const update = async (book) => {
    try {
        await axios.put('http://localhost:8080/book/'+book.id,book)
    }catch (e) {
        console.log(e)
    }
}

export const findAll = async () => {
    try {
        const result = await axios.get('http://localhost:8080/book')
        return result.data;
    }catch (e) {
        console.log(e)
    }
}
export const save = async (book) => {
    try{
        await axios.post('http://localhost:8080/book',book)
    }catch (e) {
        console.log(e)
    }
}
export const deleteBook = async (id) => {
    try {
        await axios.delete('http://localhost:8080/book/'+id)
    }catch (e) {
        console.log(e)
    }
}
