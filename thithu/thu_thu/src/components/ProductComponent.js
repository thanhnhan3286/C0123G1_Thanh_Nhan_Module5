import React, {useEffect, useState} from "react";
import * as productService from "../service/ProductService"
import {Link} from "react-router-dom";
import Swal from "sweetalert2";
import {Field, Form, Formik} from "formik";


export function ProductComponent() {
    const [product, setProduct] = useState([])
    const [type, setType] = useState([])
    const getList = async () => {
        const res = await productService.findAll();
        console.log(res);
        setProduct(res);
    }
    const getType = async () => {
        const res = await productService.findAllType();
        setType(res);
    }
    const deletePro = async (id) => {
        await productService.deleteProduct(id);
        await getList();
        await Swal.fire({
            title: 'Xóa thành công!!!',
            icon: "success",
            timer: 2000
        })
    }

    function deleteProduct(id, name) {
        Swal.fire({
            title: 'ARE YOU SURE?',
            text: "DELETE PRODUCT " + <span style={{color: "red"}}> name </span> + " ?",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#3085d6',
            cancelButtonText: 'CANCE',
            confirmButtonColor: '#d33',
            confirmButtonText: 'DELELE'
        }).then((result) => {
            if (result.isConfirmed) {
                deletePro(id).then(r => null)
            }
        })
    }

    useEffect(() => {
        getList();
        getType()
    }, [])
    return (
        <>
            <div style={{textAlign: "center"}}
                 className="mt-4">
                <h1>Product List</h1>
                <Link to={'/create'}>
                    <button className="btn btn-secondary">
                        Create
                    </button>
                </Link>
                <Formik
                    initialValues={{
                        name: '',
                        typeId: ''
                    }}
                    onSubmit={ async (values, {resetForm}) => {
                        const search = async () => {
                            const res = await productService.search(values);
                            console.log(res)
                            setProduct(res);
                        }
                        search();
                        // resetForm();
                    }}>
                    <div className="text-center d-flex" style={{width: "1000px", margin: "20px 30%"}}
                    >
                        <Form className="text-center d-flex">
                            <Field type="text" name="name" className="form-control me-2" placeholder="Name product"
                                   aria-label="Search" style={{width: "300px"}}/>
                            <Field as="select" name="typeId" className="form-control me-2">
                                <option value="">--Choose Type Product--</option>
                                {
                                    type.map((t) => (
                                            <option key={t.id} value={t.id}>{t.name}</option>
                                        )
                                    )
                                }
                            </Field>
                            <button type="submit" className="btn btn-outline-secondary me-2">Search</button>
                            <button onClick={() => getList()} type="reset"
                                    className="btn btn-outline-secondary me-2">Reset
                            </button>
                        </Form>
                    </div>
                </Formik>

                <table style={{
                    margin: "50px auto", width: "600px"
                }} className="table">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Type</th>
                        <th>Image</th>
                        <th colSpan="2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        product.map((list) => (
                            <tr key={list.id}>
                                <td>{list.id}</td>
                                <td>{list.name}</td>
                                <td>{list.price}</td>
                                <td>{type.find((t) => t.id === list.typeId)?.name}</td>
                                <td>{list.image}</td>
                                <td>

                                    <Link className="btn btn-outline-warning" to={`/update/${list.id}`}
                                    >Update</Link>


                                </td>
                                <td>
                                    <button className="btn btn-outline-danger"
                                            onClick={() => deleteProduct(`${list.id}`, `${list.name}`)}>
                                        Delete
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

