import * as yup from "yup";
import * as productService from "../service/ProductService";
import Swal from "sweetalert2";
import {Link, useNavigate, useParams} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import React, {useEffect, useState} from "react";

export function Edit() {
    const navigate = useNavigate();
    const param = useParams();
    const [product, setProduct] = useState();
    const [type, setType] = useState([]);
    const getType = async () => {
        const res = await productService.findAllType();
        setType(res)
    }
    useEffect(() => {
        const getProduct = async () =>{
            const res = await productService.findById(param.id)
            setProduct(res)
        }
        getProduct();
    },[param.id])
    useEffect(() => {
        getType();
    },[])
    if(!product){
        return null;
    }
    return (
        <>
            <Formik
                initialValues={{
                    id:product?.id,
                    name: product?.name,
                    typeId: product?.typeId,
                    price: product?.price,
                    image: product?.image
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
                        await productService.savePro({
                            ...values,
                            typeId: +values.typeId
                        });
                        navigate('/');
                        await Swal.fire({
                            title: 'Updated!!!',
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
                            <h1>Update</h1>
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
                                        Save
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