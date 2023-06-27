import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./formCreateEdit.css"
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {ThreeDots} from "react-loader-spinner";

export function CreateFacility() {

    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    useArea: '',
                    rentalCosts: '',
                    maxNumberOfPeople: '',
                    rentalType: '',
                    roomStandard: '',
                    otherUtilities: '',
                    quantityOfFloor: '',
                    areaOfPool: '',
                    freeServiceIncluded: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('Required'),
                    useArea: Yup.number()
                        .required('Required')
                        .min(40, 'Min: 40m2'),
                    rentalCosts: Yup.number()
                        .required('Required')
                        .min(1000, 'Min: 1000'),
                    maxNumberOfPeople: Yup.number()
                        .required('Required')
                        .min(2, 'Min: 2')
                        .max(30, 'Max: 30'),
                    roomStandard: Yup.string()
                        .required('Required'),
                    otherUtilities: Yup.string(),
                    quantityOfFloor: Yup.number()
                        .required('Required')
                        .min(1,'Min: 1')
                        .max(10,'Max: 10'),
                    areaOfPool: Yup.number()
                        .required('Required')
                        .min(0, 'Min: 0m2 = no pool')
                        .max(1000, 'Mã: 1000m2')
                })}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        setSubmitting(false)
                        toast(`Add successfully!!!`)
                    }, 1000)
                }}
            >
                {
                    ({isSubmitting}) => (
                        <div
                            className="container boxed"
                            style={{marginTop: "2%", width: 700, height: "auto"}}
                        >
                            <h2 style={{textAlign: "center", marginTop: 20}}> Thêm mới dịch vụ</h2>
                            <div
                                id="form"
                                className="form"
                                style={{marginLeft: "10%", marginRight: "10%"}}
                            >
                                <Form>
                                    <div className="input-group input-group-sm mg" style={{marginTop: 30}}>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Tên dịch vụ</span>
                                        </div>
                                        <Field
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="name" component='span' className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Diện tích sử dụng</span>
                                        </div>
                                        <Field
                                            type="text"
                                            name="useArea"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="useArea" component='span' className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Chi phí thuê</span>
                                        </div>
                                        <Field
                                            type="number"
                                            name="rentalCosts"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="rentalCosts" component='span' className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Số người tối đa</span>
                                        </div>
                                        <Field
                                            type="number"
                                            name="maxNumberOfPeople"
                                            min={2}
                                            max={30}
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="maxNumberOfPeople" component='span' className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Loại hình cho thuê</span>
                                        </div>
                                        <select className="form-select" name="rentalType">
                                            <option>Year</option>
                                            <option>Month</option>
                                            <option>Day</option>
                                            <option>Hour</option>
                                        </select>
                                    </div>
                                    <ErrorMessage name="rentalType" component='span' className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Tiêu chuẩn phòng</span>
                                        </div>
                                        <Field
                                            type="text"
                                            name="roomStandard"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                            required=""
                                        />
                                    </div>
                                    <ErrorMessage name="roomStandard" component='span' className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Mô tả các tiện ích khác</span>
                                        </div>
                                        <Field
                                            type="text"
                                            name="otherUtilities"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="otherUtilities" component='span' className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Số tầng</span>
                                        </div>
                                        <Field
                                            type="number"
                                            name="quantityOfFloor"
                                            min={1}
                                            max={10}
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="quantityOfFloor" component='span' className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Diện tích hồ bơi</span>
                                        </div>
                                        <Field
                                            type="number"
                                            name="areaOfPool"
                                            min={40}
                                            max={1000}
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="areaOfPool" component='span' className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Dịch vụ miễn phí đi kèm</span>
                                        </div>
                                        <Field
                                            type="text"
                                            name="freeServiceIncluded"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="freeServiceIncluded" component='span' className="error-mess m-lg-3"/>
                                    <br/>
                                    <div style={{textAlign: "center", marginBottom: 30}}>
                                        {
                                            isSubmitting ? <ThreeDots visible={true}/> :
                                                <button type="submit" className="btn btn-success">
                                                    Thêm mới
                                                </button>
                                        }
                                    </div>
                                </Form>
                            </div>
                        </div>
                    )
                }
            </Formik>
            <ToastContainer/>
        </>
    )
}