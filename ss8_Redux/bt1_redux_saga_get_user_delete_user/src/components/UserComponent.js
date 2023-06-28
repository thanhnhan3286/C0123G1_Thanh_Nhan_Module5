import "bootstrap/dist/css/bootstrap.css"
import React from "react";
import {Link} from "react-router-dom";

export function UserComponent() {
    return (
        <>
            <div className="w-75 m-auto mt-5">
                <div className="text-center">
                    <h1>User List</h1>
                    <Link to={`/getList`} className="btn bg-body-secondary">Get User</Link>
                </div>
            </div>
        </>
    )
}