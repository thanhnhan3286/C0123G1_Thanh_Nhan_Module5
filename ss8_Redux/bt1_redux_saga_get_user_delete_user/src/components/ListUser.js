import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import Swal from "sweetalert2";
import {deleteUser, getAll} from "../redux/action/User";

export function ListUser() {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const getAllUser = async () => {
        dispatch(getAll())
    }
    useEffect(() => {
        getAllUser().then(r => null)
    }, [])
    const deleteUsersss = async (id) => {
        await dispatch(deleteUser(id))
        await getAllUser()
        await Swal.fire(
            {
                title: "Deleted!",
                test: 'Your file has been deleted.',
                icon: 'success',
                timer: 2000
            }
        )

    }

    function deleteUsers(id, name) {
        Swal.fire({
            title: 'Are you sure?',
            text: "Delete " + name + " ?",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#3085d6',
            confirmButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteUsersss(id).then(r => null)
            }
        })
    }

    return (
        <>
            <div className="w-75 m-auto mt-5">
                <div className="text-center">
                    <h1>User List</h1>
                </div>
                <div style={{margin: "0 auto"}}>
                    <table className="table mt-4">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Website</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {user.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.website}</td>
                                <td>
                                    <button className="btn btn-danger"
                                            onClick={() => deleteUsers(`${user.id}`, `${user.name}`)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}