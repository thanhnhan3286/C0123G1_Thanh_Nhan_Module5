import {userService} from "../../service/UserService"
import {DELETE_USER, GET_ALL_USER} from "./Type";

export const getAll = () => async (dispatch) => {
    try {
        const result = await userService.findALL();
        dispatch({
            type: GET_ALL_USER,
            payload: result.data
        })
    } catch (e) {
        console.log(e)
    }
}
export const deleteUser = (id) => async (dispatch) => {
    try {
        const result = await userService.deleteUser(id);
        dispatch({
            type: DELETE_USER,
            payload: result.data
        })
    } catch (e) {
        console.log(e)
    }
}