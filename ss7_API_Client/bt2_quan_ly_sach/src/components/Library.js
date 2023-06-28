import "bootstrap/dist/css/bootstrap.css"
import React, {useEffect, useState} from "react";
import * as bookService from "../service/BookService"
import {Link} from "react-router-dom";
import Swal from "sweetalert2";

export function Library() {
    const [books, setBook] = useState([])
    const fetchApi = async () => {
        const result = await bookService.findAll()
        setBook(result);
    }
    const deleteBook = async (id) => {
        await bookService.deleteBook(id)
        await Swal.fire(
            {
                title: "Deleted!",
                test: 'Your file has been deleted.',
                icon: 'success',
                timer: 2000
            }
        )
        fetchApi()
    }
    const deleteBooks = async (id,title) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!" + title,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteBook(id)
            }
        })
    }
    useEffect(() => {
        fetchApi()
    }, [])
    return (
        <>
            <div className="w-75 m-auto mt-5">
                <div className="d-flex justify-content-between" style={{paddingLeft: "5%", paddingRight: "5%"}}>
                    <h1 className="font-monospace">Library</h1>
                    <Link to={`/add`} className="btn btn-primary font-monospace m-auto">Add new book</Link>
                </div>
                <table className="table mt-4">
                    <thead>
                    <tr>
                        <th className="w-50" style={{paddingLeft: "8%"}}>Title</th>
                        <th className="text-center">Quantity</th>
                        <th colSpan="2" className="text-center">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        books.map((book) => (
                            <tr key={book.id}>
                                <th scope="row" style={{paddingLeft: "5%"}}>{book.title}</th>
                                <th className="text-center">{book.quantity}</th>
                                <td style={{paddingLeft: "10%"}}>
                                    <Link to={`/update/${book.id}`}
                                          className="btn btn-warning font-monospace">Update</Link>
                                </td>
                                <td>
                                    <button className="btn btn-danger font-monospace"
                                            onClick={() => deleteBooks(`${book.id}`,`${book.title}`)}
                                    >Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>

            </div>
        </>
    )
}