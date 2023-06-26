import "bootstrap/dist/css/bootstrap.css";
import React from "react";

import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {FidgetSpinner} from "react-loader-spinner"
export default function FormComponent() {
    return (
        <>
            <Formik
                initialValues={{
                    name: 'Nhan',
                    email: 'nhan123@gmail.com',
                    phone: '0123456789'
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('Required')
                        .matches(/^[a-zA-Z]+$/, 'Incorect!!!'),
                    email: Yup.string()
                        .required('Required')
                        .matches(/^[a-zA-Z0-9+-]+@[a-zA-Z0-9-.]+$/, 'Incorect!!!'),
                    phone: Yup.string()
                        .required('Required')
                        .matches(/^0[1-9][0-9]{8}$/, 'Incorect!!!')

                })
                }
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        setSubmitting(false)
                        console.log(values)
                        toast(`Add contact successfully!!!`)
                    }, 1000)
                }}
            >

                {
                    ({isSubmitting}) => (
                        <div
                            className="container boxed"
                            style={{marginTop: "2%", width: 700, height: "auto"}}
                        >
                            <h2 style={{textAlign: "center", marginTop: 20}}>Contact Form</h2>
                            <div
                                id="form"
                                className="form"
                                style={{marginLeft: "10%", marginRight: "10%", textAlign: "center"}}
                            >
                                <Form>
                                    <div>
                                        <div className="input-group input-group-sm mg" style={{marginTop: 30}}>
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">Name</span>
                                            </div>
                                            <Field
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                aria-label="Small"
                                                aria-describedby="inputGroup-sizing-sm"
                                            />

                                        </div>
                                        <ErrorMessage name='name' component='span' className='form-err'/>
                                        <p style={{color: "red"}}/>
                                        <div className="input-group input-group-sm mg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">Email</span>
                                            </div>
                                            <Field
                                                type="text"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                aria-label="Small"
                                                aria-describedby="inputGroup-sizing-sm"
                                            />

                                        </div>
                                        <ErrorMessage name='email' component='span' className='form-err'/>
                                        <p style={{color: "red"}}/>
                                        <div className="input-group input-group-sm mg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">Phone</span>
                                            </div>
                                            <Field
                                                type="text"
                                                className="form-control"
                                                id="phone"
                                                name="phone"
                                                aria-label="Small"
                                                aria-describedby="inputGroup-sizing-sm"
                                            />

                                        </div>
                                        <ErrorMessage name='phone' component='span' className='form-err'/>
                                        <p style={{color: "red"}}/>
                                        <div className="input-group input-group-sm mg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">Message</span>
                                            </div>
                                            <Field
                                                type="text"
                                                className="form-control"
                                                id="message"
                                                name="message"
                                                as="textarea"
                                                aria-label="Small"
                                                aria-describedby="inputGroup-sizing-sm"
                                            />
                                        </div>
                                        <p style={{color: "red"}}/>
                                        <br/>
                                            <div className="mb-4 text-center">
                                                {
                                                isSubmitting ? <FidgetSpinner
                                                    />:
                                                <button type="submit" className="btn btn-success">
                                                    Submit
                                                </button>
                                                }
                                            </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    )}
            </Formik>
            <ToastContainer/>
        </>
    )
}