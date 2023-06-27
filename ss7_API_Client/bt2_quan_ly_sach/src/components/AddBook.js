import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import * as bookService from "../service/BookService"
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router";

export function AddBook() {
    const navigate = useNavigate();
    return (
        <>
            <Formik
                initialValues={{
                    title: '',
                    quantity: ''
                }}
                validationSchema={Yup.object({
                    title: Yup.string()
                        .required('Không được để trống!!!'),
                    quantity: Yup.number()
                        .required('Không được để trống!!!')
                        .min(1, 'Ít nhất là 1 quyển!!!')
                        .max(1000, 'Nhiều nhất 1000 quyển!!!'),
                })}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    const add = async () => {
                        setSubmitting(false)
                        await bookService.save(values)
                        toast(`ADDED!!!`);
                        resetForm();
                        navigate("/")
                    }
                    add()
                }}
            >
                {
                    ({isSubmitting}) => (
                        <div>
                            <div className="container mt-5 mb-5 ">
                                <div className="row height d-flex justify-content-center align-items-center"
                                     style={{zIndex: -1}}>
                                    <div className="col-md-4">
                                        <div className="card px-5 py-4">
                                            <div style={{textAlign: "center"}}>
                                                <h2 style={{color: "black"}}>Add a new Book</h2>
                                            </div>
                                            <Form>
                                                <div className="mt-3 ">
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        id="title"
                                                        name="title"
                                                        placeholder="Title"
                                                    />
                                                    <ErrorMessage name="title" component="span" className="error-r"/>
                                                </div>
                                                <div className="mt-3 ">
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        id="title"
                                                        name="quantity"
                                                        placeholder="Quantity"
                                                    />
                                                    <ErrorMessage name="quantity" component="span" className="error-r"/>
                                                </div>
                                                <div className="text-center m-auto mt-2">
                                                    <button type="submit" className=" btn btn-success ">
                                                        <b className="text-center">ADD</b>
                                                    </button>
                                                </div>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </Formik>
            <ToastContainer/>
        </>
    )
}