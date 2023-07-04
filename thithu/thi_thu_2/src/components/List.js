import React, {useEffect, useState} from "react";
import * as productService from "../service/ProductService"
import {Link} from "react-router-dom";
import Swal from "sweetalert2";

export function ProductList() {
    const [productList, setProductList] = useState([]);
    const [typeProduct, setTypeProduct] = useState([]);
    const getList = async () => {
        const res = await productService.findAllProduct();
        console.log(res)
        setProductList(res);
    }
    const getType = async () => {
        const res = await productService.findTypeProduct();
        setTypeProduct(res);
    }
    useEffect(() => {
        getList();
        getType();
    }, [])
    const deletePro = async (id) => {
        await productService.deleteProduct(id);
        getList();
        await Swal.fire({
            title: 'DELETEED!!!',
            icon: 'success',
            timer: 2000
        })
    }

    function deleteProduct(id, name) {
        Swal.fire({
            title: 'ARE YOU SURE?',
            text: "DELETE PRODUCT " + name + " ?",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#3085d6',
            cancelButtonText: 'CANCE',
            confirmButtonColor: '#d33',
            confirmButtonText: 'DELELE'
        }).then((result) => {
                if (result.isConfirmed) {
                    deletePro(id).then(r => null);
                }
            }
        )
    }

    return (
        <>
            <div>
                <h1>List</h1>
                <Link to='/create' className="btn btn-outline-secondary">Create</Link>
                <table>
                    <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Create Time</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        productList.map((list, index) => (
                            <tr key={index}>
                                <td>{list.id}</td>
                                <td>{list.name}</td>
                                <td>{typeProduct.find((t) => t.id === list.typeId)?.name}</td>
                                <td>{list.price}</td>
                                <td>{list.image}</td>
                                <td>{list.createAT}</td>
                                <td>
                                    <button>Edit</button>
                                </td>
                                <td>
                                    <button onClick={() => deleteProduct(`${list.id}`, `${list.name}`)}>Delete</button>
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