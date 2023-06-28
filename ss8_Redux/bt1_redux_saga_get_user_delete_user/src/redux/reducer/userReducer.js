import {DELETE_USER, GET_ALL_USER} from "../action/Type";

const initialState = []
export const userReducer  = (user = initialState, action) => {
    const {type,payload} = action
switch (type) {
    case GET_ALL_USER:
        return payload
    case DELETE_USER:
    default:
        return user
}
}