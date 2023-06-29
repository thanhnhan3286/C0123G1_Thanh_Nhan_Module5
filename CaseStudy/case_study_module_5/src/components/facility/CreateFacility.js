import React, {useEffect, useState} from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./formCreateEdit.css"
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {ThreeDots} from "react-loader-spinner";
import * as facilityService from "../../service/FacilityService";
import Swal from "sweetalert2";
import {useNavigate} from "react-router";

export function CreateFacility() {
    const navigate = useNavigate()
    const [type, setType] = useState([]);
    const [rentalType, setRentalType] = useState([]);
    const [roomStandard, setRoomStandard] = useState([]);
    const fetchApi = async () => {
        const rentalTypeList = await facilityService.findAllRentalType()
        // console.log(rentalTypeList);
        setRentalType(rentalTypeList);
        const facilityType = await facilityService.findAllFacilityType()
        // console.log(facilityType);
        setType(facilityType);
        const roomStandard = await facilityService.findAllRoomStandard()
        // console.log(roomStandard);
        setRoomStandard(roomStandard);
    }
    useEffect(() => {
        fetchApi().then(r => null)
    }, [])
    return (
        <>
            <Formik
                initialValues={{
                    typeId: 0,
                    name: '',
                    useArea: 0,
                    rentalCosts: 0,
                    maxNumberOfPeople: 0,
                    rentalTypeId: 0,
                    roomStandardId: 0,
                    otherUtilities: '',
                    quantityOfFloor: 0,
                    areaOfPool: 0,
                    freeServiceIncluded: '',
                    image: ''
                }}
                validationSchema={Yup.object({
                    typeId: Yup.number().required('Không được để trống').min(1, 'Chưa chọn loại dịch vụ'),
                    name: Yup.string()
                        .required('Required'),
                    useArea: Yup.number()
                        .required('Required')
                        .min(40, 'Min: 40m2'),
                    rentalCosts: Yup.number()
                        .required('Required')
                        .min(1000, 'Min: 1000')
                        .max(990000000, 'Max: 10000000'),
                    maxNumberOfPeople: Yup.number()
                        .required('Required')
                        .min(2, 'Min: 2')
                        .max(30, 'Max: 30'),
                    rentalTypeId: Yup.number().required('Không được để trống').min(1, 'Chưa chọn kiểu thuê'),
                    roomStandardId: Yup.number()
                        .required('Required').min(1, 'Chưa chọn loại phòng'),
                    otherUtilities: Yup.string(),
                    quantityOfFloor: Yup.number()
                        .required('Required')
                        .min(0, 'Min: 0')
                        .max(10, 'Max: 10'),
                    areaOfPool: Yup.number()
                        .required('Required')
                        .min(0, 'Min: 0m2 = no pool')
                        .max(1000, 'Mã: 1000m2')
                })}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    setSubmitting(false)
                    const create = async () => {
                        await facilityService.create({
                            ...values,
                            typeId: +values.typeId,
                            rentalTypeId: +values.rentalTypeId,
                            roomStandardId: +values.roomStandardId
                        })
                        navigate("/")
                        await Swal.fire({
                            icon: "success",
                            title: "Them moi thanh cong!!!",
                            timer: 2000
                        })
                        resetForm();
                    }
                    create()
                }}
            >
                {
                    ({isSubmitting}) => (
                        <div
                            className="container boxed"
                            style={{marginTop: "2%", width: 600, height: "auto"}}
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
                                            <span className="input-group-text">Loại dịch vụ</span>
                                        </div>
                                        <Field
                                            as="select"
                                            name="typeId"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        >
                                            <option value={0}>--Chọn loại dịch vụ--</option>
                                            {
                                                type.map((type) => (
                                                    <option key={type.id} value={type.id}>{type.name}</option>
                                                ))
                                            }
                                        </Field>
                                    </div>
                                        <ErrorMessage name="typeId" component="span" className="error-mess m-lg-3"/>
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
                                            type="number"
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
                                    <ErrorMessage name="maxNumberOfPeople" component='span'
                                                  className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Loại hình cho thuê</span>
                                        </div>
                                        <Field as="select" className="form-select" name="rentalTypeId">
                                            <option value={0}>--Chọn loại hình cho thuê--</option>
                                            {
                                                rentalType.map((rentalType) => (
                                                    <option key={rentalType.id}
                                                            value={rentalType.id}>{rentalType.name}</option>
                                                ))
                                            }
                                        </Field>
                                    </div>
                                    <ErrorMessage name="rentalTypeId" component='span' className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Tiêu chuẩn phòng</span>
                                        </div>
                                        <Field
                                            as="select"
                                            name="roomStandardId"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                            required=""
                                        >
                                            <option value={0}>--Chọn tiêu chuẩn phòng--</option>
                                            {
                                                roomStandard.map((roomStandard) => (
                                                    <option key={roomStandard.id}
                                                            value={roomStandard.id}>{roomStandard.name}</option>
                                                ))
                                            }
                                        </Field>
                                    </div>
                                    <ErrorMessage name="roomStandardId" component='span' className="error-mess m-lg-3"/>
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
                                            min={0}
                                            max={10}
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="quantityOfFloor" component='span'
                                                  className="error-mess m-lg-3"/>
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
                                    <ErrorMessage name="freeServiceIncluded" component='span'
                                                  className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">URL hình ảnh</span>
                                        </div>
                                        <Field
                                            type="text"
                                            name="image"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="image" component='span' className="error-mess m-lg-3"/>
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