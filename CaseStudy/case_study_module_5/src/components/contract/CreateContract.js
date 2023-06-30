import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.css"
import {useNavigate} from "react-router";
import * as customerService from "../../service/CustomerService";
import * as facilityService from "../../service/FacilityService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";
import * as contractService from "../../service/ContractService";
import * as Swal from "sweetalert2";
import {ThreeDots} from "react-loader-spinner";


export function CreateContract() {
    const navigate = useNavigate()
    const [customer, setCustomer] = useState([]);
    const [facility, setFacility] = useState([]);
    const getListCustomerApi = async () => {
        const res = await customerService.findAll();
        setCustomer(res);
    };

    const getListFacilityTypesApi = async () => {
        const res = await facilityService.findAll();
        setFacility(res);
    };

    useEffect(() => {
        getListCustomerApi();
        getListFacilityTypesApi();
    }, []);
    return (
        <>
            <Formik initialValues={{
                customerId: 0,
                facilityId: 0,
                contractCode: '',
                startDay: '',
                endDay: '',
                deposit: '',
                totalPrice: ''
            }}
                    validationSchema={yup.object({
                        customerId: yup.number().required('Không được để trống!!!').min(1, 'Chưa chọn khách hàng!!!'),
                        facilityId: yup.number().required('Không được để trống!!!').min(1, 'Chưa chọn khách hàng!!!'),
                        contractCode: yup.string().required('Không được để trống!!!')
                            // .matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/, 'Viết không dấu, in hoa chữ đầu'),
                            .matches(/^(VL-|HO-|RO-)(\d){5}$/, 'Vd: HO-12345'),
                        startDay: yup.date().required('Không được để trống!!!'),
                        endDay: yup.date().required('Không được để trống!!!'),
                        deposit: yup.number().required('Không được để trống!!!').min(800, 'Đặt cọc ít nhất 800$'),
                        totalPrice: yup.number().required('Không được để trống!!!').min(1500, 'Tổng thanh toán ít nhất 1500$')
                    })}
                    onSubmit={async (values, {setSubmitting, resetForm}) => {
                        setSubmitting(false)
                        const create = async () => {
                            await contractService.create({
                                ...values,
                                customerId: +values.customerId,
                                facilityId: +values.facilityId
                            })
                            navigate("/contract")
                            await Swal.fire({
                                icon: "success",
                                title: "Them moi thanh cong!!!",
                                timer: 2000
                            })
                            resetForm();
                        }
                        create()
                    }}>
                {
                    ({isSubmitting}) => (
                        <div
                            className="container boxed"
                            style={{marginTop: "2%", width: 650, height: "auto"}}
                        >
                            <h2 style={{textAlign: "center", marginTop: 20}}>
                                Tạo hợp đồng Khách hàng thuê dịch vụ ở Furama
                            </h2>
                            <div
                                id="form"
                                className="form"
                                style={{marginLeft: "10%", marginRight: "10%"}}
                            >
                                <Form action="#" method="POST" noValidate="novalidate">
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Chọn khách hàng</span>
                                        </div>
                                        <Field
                                            as="select"
                                            name="customerId"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        >
                                            <option value={0}>--Chọn khách hàng--</option>
                                            {
                                                customer.map((c, index) => (
                                                        <option key={index} value={c.id}>{c.id} - {c.name}</option>
                                                    )
                                                )
                                            }
                                        </Field>
                                    </div>
                                    <ErrorMessage name="customerId" component="span" className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Chọn dịch vụ</span>
                                        </div>
                                        <Field
                                            as="select"
                                            name="facilityId"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        >
                                            <option value={0}>--Chọn dịch vụ--</option>
                                            {
                                                facility.map((f, index) => (
                                                    <option key={index}
                                                            value={f.id}>{f.id} - {f.name} - {f.useArea}m<sup>2</sup>
                                                    </option>
                                                ))
                                            }
                                        </Field>
                                    </div>
                                    <ErrorMessage name="facilityId" component="span" className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg" style={{marginTop: 30}}>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Mã hợp đồng</span>
                                        </div>
                                        <Field
                                            type="text"
                                            name="contractCode"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="contractCode" component="span" className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg" style={{marginTop: 30}}>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Ngày bắt đầu</span>
                                        </div>
                                        <Field
                                            type="date"
                                            name="startDay"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="startDay" component="span" className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Ngày kết thúc</span>
                                        </div>
                                        <Field
                                            type="date"
                                            name="endDay"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="endDay" component="span" className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Số tiền cọc trước ($)</span>
                                        </div>
                                        <Field
                                            type="number"
                                            name="deposit"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="deposit" component="span"
                                                  className="error-mess m-lg-3 error-404"/>
                                    <p style={{color: "red"}}/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Tổng số tiền thanh toán</span>
                                        </div>
                                        <Field
                                            type="text"
                                            name="totalPrice"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="totalPrice" component="span" className="error-mess m-lg-3"/>
                                    <p style={{color: "red"}}/>
                                    <br/>
                                    <div className="mb-4 text-center">
                                        {
                                            isSubmitting ? <ThreeDots visible={true}/> :
                                                <button type="submit" className="btn btn-success">
                                                    Tạo hợp đồng
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