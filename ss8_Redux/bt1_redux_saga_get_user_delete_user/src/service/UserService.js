import request from '../components/HttpComponent';

const findALL =() => {
    return request.get('/user')
}
const deleteUser = (id) => {
    return request.delete('/user/'+id)
}
export const userService = {
    findALL,
    deleteUser
}