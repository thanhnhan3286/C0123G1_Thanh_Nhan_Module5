import {useNavigate, useParams} from "react-router";
import * as Yup from "yup";
import * as bookService from "../service/BookService";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import React, {useEffect, useState} from "react";

export function UpdateBook() {
    const navigate = useNavigate()
    const param = useParams()
    const [books, setBook] = useState()
    useEffect(() => {
        const fetchApi = async () => {
            const result = await bookService.findById(param.id)
            console.log(result)
            setBook(result);
        }
        fetchApi()
    }, [])
    if (!books){
        return null;
    }
    return (
        <>
            <Formik
                initialValues={{
                    id: books.id,
                    title: books.title,
                    quantity: books.quantity
                }}
                validationSchema={Yup.object({
                    title: Yup.string()
                        .required('Required!!!'),
                    quantity: Yup.number()
                        .required('Required!!!')
                        .min(1, 'Ít nhất là 1 quyển!!!')
                        .max(1000, 'Nhiều nhất 1000 quyển!!!'),
                })}
                onSubmit={(values,{setSubmitting}) => {
                    setSubmitting(false)
                    const update = async () => {
                        await bookService.update(values)
                        toast('Updated!!!');
                        navigate("/")
                    }
                    update()
                }}
            >
                {
                    <div className="container mt-5 mb-5 ">
                        <div className="row height d-flex justify-content-center align-items-center"
                             style={{zIndex: -1}}>
                            <div className="col-md-4">
                                <div className="card px-5 py-4">
                                    <div style={{textAlign: "center"}}>
                                        <h2 style={{color: "black"}}>Update a Book</h2>
                                    </div>
                                    <Form>
                                        {/*<div key={books.id}>*/}
                                        <div className="mt-3 ">
                                            <label  htmlFor="title">Title</label>
                                            <Field
                                                type="text"
                                                className="form-control"
                                                id="title"
                                                name="title"
                                                // value={books.title}
                                            />
                                            <ErrorMessage name="title" component="span" className="error-r"/>
                                        </div>
                                        <div className="mt-3 ">
                                            <label  htmlFor="title">Quantity</label>
                                            <Field
                                                type="text"
                                                className="form-control"
                                                id="title"
                                                name="quantity"
                                                // value={books.quantity}
                                            />
                                            <ErrorMessage name="quantity" component="span" className="error-r"/>
                                        </div>
                                        <div className="text-center m-auto mt-2">
                                            <button type="submit" className=" btn btn-success ">
                                                <b className="text-center">SAVE</b>
                                            </button>
                                        </div>
                                        {/*</div>*/}
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </Formik>
        </>
    )
}