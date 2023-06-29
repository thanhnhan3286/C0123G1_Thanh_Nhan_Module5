import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import * as customerService from "../../service/CustomerService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import {ThreeDots} from "react-loader-spinner";
import * as facilityService from "../../service/FacilityService";

export function EditCustomer() {
    const navigate = useNavigate()
    const param = useParams();
    const [customer, setCustomer] = useState();
    const [gender, setGender] = useState([]);
    const [customerTypes, setCustomerTypes] = useState([]);
    useEffect(() => {
        const getCustomer = async () => {
            const res = await customerService.getCustomerApi(param.id);
            console.log(res)
            setCustomer(res);
        }
        getCustomer()
    }, [param.id])
    const getListGenderApi = async () => {
        const res = await customerService.getListGender();
        setGender(res);
    };

    const getListCustomerTypesApi = async () => {
        const res = await customerService.getListCustomerTypes();
        setCustomerTypes(res);
    };

    useEffect(() => {
        getListGenderApi();
        getListCustomerTypesApi();
    }, []);
    if(!customer)
        return null
    return (
        <>
            <Formik
                initialValues={{
                    id:customer?.id,
                    name: customer?.name,
                    birthday: customer?.birthday,
                    gender: customer?.gender,
                    cmnd: customer?.cmnd,
                    phone: customer?.phone,
                    email: customer?.email,
                    customerType: customer?.customerType,
                    address: customer?.address,

                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('Không đượng để trống!!!'),
                    // .matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/, 'Viết không dấu, in hoa chữ đầu'),
                    birthday: Yup.date()
                        .required('Không được để trống!!!'),
                    gender: Yup.number()
                        .min(1, 'Chưa chọn giới tính!!!'),
                    cmnd: Yup.string()
                        .required('Không được để trống!!!'),
                    // .matches(/^\d{9}$/, 'Chứng minh nhân nhân đủ 9 số'),
                    phone: Yup.string()
                        .required('Không được để trống!!!'),
                    // .matches(/^((\+84)|0)[0-9]{9}$/, 'Số điện thoại bắt buộc 10 số bắt đầu bằng 0 hoặc +84'),
                    email: Yup.string()
                        .required('Không được để trống!!!'),
                    // .matches(/^[a-zA-Z0-9+_-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Nhập đúng định dạng Email(vd: adc098@gmail.com)"),
                    customerType: Yup.number().min(1, 'Chưa chọn loại khách!!!')
                        .required('Không được để trống'),
                    address: Yup.string()
                        .required('Không được để trống')
                })}
                onSubmit={async (values, {setSubmitting, resetForm}) => {
                    setSubmitting(false)
                    console.log(values)
                    const create = async () => {
                        await customerService.save({
                            ...values,
                            gender: +values.gender,
                            customerType: +values.customerType,
                        })
                        navigate("/customer")
                        await Swal.fire({
                            icon: "success",
                            title: "Thay đổi thông tinh khách hàng thành công!!!",
                            timer: 2000
                        })
                        resetForm();
                    }
                    create()
                }
                }
    >
                {  ({isSubmitting}) => (
                    <div
                        className="container boxed"
                        style={{marginTop: "2%", width: 600, height: "auto"}}
                    >
                        <h2 style={{textAlign: "center", marginTop: 20}}>Chỉnh sửa thông tin khách hàng</h2>
                        <div
                            id="form"
                            className="form"
                            style={{marginLeft: "10%", marginRight: "10%"}}
                        >
                            <Form action="#" method="POST" noValidate="novalidate">
                                <div className="input-group input-group-sm mg" style={{marginTop: 30}}>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Họ tên</span>
                                    </div>
                                    <Field
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        aria-label="Small"
                                        aria-describedby="inputGroup-sizing-sm"
                                    />
                                </div>
                                <ErrorMessage name="name" component="span" className="error-mess m-lg-3"/>

                                <div className="input-group input-group-sm mg">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Ngày sinh</span>
                                    </div>
                                    <Field
                                        type="date"
                                        name="birthday"
                                        className="form-control"
                                        aria-label="Small"
                                        aria-describedby="inputGroup-sizing-sm"
                                    />
                                </div>
                                <ErrorMessage name="birthday" component="span" className="error-mess m-lg-3"/>

                                <div className="input-group input-group-sm mg">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Giới tính</span>
                                    </div>
                                    <Field
                                        as="select"
                                        name="gender"
                                        className="form-control"
                                        aria-label="Small"
                                        aria-describedby="inputGroup-sizing-sm"
                                    >
                                        <option value={0}>--Chọn giới tính--</option>
                                        {
                                            gender.map((g, index) => (
                                                    <option key={index} value={g.id}>{g.gender}</option>
                                                )
                                            )
                                        }
                                    </Field>
                                </div>
                                <ErrorMessage name="gender" component="span" className="error-mess m-lg-3"/>

                                <div className="input-group input-group-sm mg">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Số CMND</span>
                                    </div>
                                    <Field
                                        type="text"
                                        name="cmnd"
                                        className="form-control"
                                        aria-label="Small"
                                        aria-describedby="inputGroup-sizing-sm"
                                    />
                                </div>
                                <ErrorMessage name="cmnd" component="span" className="error-mess m-lg-3"/>
                                <div className="input-group input-group-sm mg">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Số điện thoại</span>
                                    </div>
                                    <Field
                                        type="text"
                                        name="phone"
                                        className="form-control"
                                        aria-label="Small"
                                        aria-describedby="inputGroup-sizing-sm"
                                    />
                                </div>
                                <ErrorMessage name="phone" component="span" className="error-mess m-lg-3"/>
                                <p style={{color: "red"}}/>
                                <div className="input-group input-group-sm mg">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Email</span>
                                    </div>
                                    <Field
                                        type="text"
                                        name="email"
                                        className="form-control"
                                        aria-label="Small"
                                        aria-describedby="inputGroup-sizing-sm"
                                    />
                                </div>
                                <ErrorMessage name="email" component="span" className="error-mess m-lg-3"/>
                                <p style={{color: "red"}}/>
                                <div className="input-group input-group-sm mg">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Loại khách</span>
                                    </div>
                                    <Field
                                        as="select"
                                        name="customerType"
                                        className="form-control"
                                        aria-label="Small"
                                        aria-describedby="inputGroup-sizing-sm"
                                    >
                                        <option value={0}>--Chọn loại khách--</option>
                                        {
                                            customerTypes.map((ct, index) => (
                                                    <option key={index} value={ct.id}>{ct.name}</option>
                                                )
                                            )
                                        }
                                    </Field>
                                </div>
                                <ErrorMessage name="customerType" component="span" className="error-mess m-lg-3"/>
                                <div className="input-group input-group-sm mg">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Địa chỉ</span>
                                    </div>
                                    <Field
                                        type="text"
                                        name="address"
                                        className="form-control"
                                        aria-label="Small"
                                        aria-describedby="inputGroup-sizing-sm"
                                    />
                                </div>
                                <ErrorMessage name="address" component="span" className="error-mess m-lg-3"/>
                                <p style={{color: "red"}}/>
                                <br/>
                                <div className="mb-4 text-center">
                                    {
                                        isSubmitting ? <ThreeDots visible={true}/> :
                                            <button type="submit" className="btn btn-success">
                                                Lưu thông tin
                                            </button>
                                    }
                                </div>
                            </Form>
                        </div>
                    </div>
                )
                }
            </Formik>
        </>
    )
}