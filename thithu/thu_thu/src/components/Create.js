import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup"
import * as productService from "../service/ProductService"
import Swal from "sweetalert2";

export function Create() {
    const navigate = useNavigate()
    const [type, setType] = useState([])
    const getType = async () => {
        const res = await productService.findAllType()
        setType(res)
    }
    useEffect(() => {
        getType();
    }, [])
    return (
        <>

            <Formik
                initialValues={{
                    name: '',
                    typeId: 0,
                    price: '',
                    image: ''
                }}
                validationSchema={yup.object({
                    name: yup.string().required('Required!!!'),
                    typeId: yup.number().min(1, 'Choose type product!!!'),
                    price: yup.number().min(10, 'Min: 10k!!!'),
                    image: yup.string()
                })}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    setSubmitting(false);
                    const create = async () => {
                        await productService.createPro({
                            ...values,
                            typeId: +values.typeId,
                        });
                        navigate('/');
                        await Swal.fire({
                            title: 'Created!!!',
                            icon: 'success',
                            timer: 2000
                        })
                        resetForm();
                    }
                    create();
                }}>
                {
                    ({isSubmitting}) => (
                        <div className="w-50 justify-content-center border-1 border">
                            <h1>Create</h1>
                            <Link to='/' style={{}}>
                                <button className="btn btn-outline-secondary" style={{fontWeight: "bold"}}>
                                    Back
                                </button>
                            </Link>
                            <br/>
                            <div className="table ">
                                <Form className="table">
                                    <Field name="name" type="text" className="form-control w-50 mt-3"
                                           placeholder="Name Product"/>
                                    <ErrorMessage name="name" compnent="span" className="error-mes m-lg-3"/>
                                    <Field name="typeId" as="select" className="form-control w-50 mt-3">
                                        <option value="0">--Choose Type Product--</option>
                                        {
                                            type.map((t) => (
                                                <option key={t.id} value={t.id}>{t.name}</option>
                                            ))
                                        }
                                    </Field>
                                    <ErrorMessage name="typeId" compnent="span" className="error-mes m-lg-3"/>
                                    <Field name="price" type="text" className="form-control w-50 mt-3"
                                           placeholder="Price Product"/>
                                    <ErrorMessage name="price" compnent="span" className="error-mes m-lg-3"/>
                                    <Field name="image" type="text" className="form-control w-50 mt-3"
                                           placeholder="Image Product"/>
                                    <ErrorMessage name="image" compnent="span" className="error-mes m-lg-3"/>
                                    <button type="submit" className="btn btn-outline-secondary"
                                            style={{fontWeight: "bold"}}>
                                        Create
                                    </button>
                                </Form>
                            </div>
                        </div>
                    )
                }
            </Formik>
        </>
    )
}