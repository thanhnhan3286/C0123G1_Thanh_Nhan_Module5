import "./formCreateEdit.css"
import React, {useEffect, useState} from "react";

import "bootstrap/dist/css/bootstrap.css";
import {useNavigate, useParams} from "react-router";
import * as facilityService from "../../service/FacilityService";
import * as Yup from "yup";
import Swal from "sweetalert2";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {ThreeDots} from "react-loader-spinner";

export function EditFacility() {
    const navigate = useNavigate();
    const param = useParams();
    const [facility, setFacility] = useState();
    const [type, setType] = useState([]);
    const [rentalType, setRentalType] = useState([]);
    const [roomStandard, setRoomStandard] = useState([]);
    useEffect(() => {
        const getFacility = async () => {
            const res = await facilityService.getFacilityApi(param.id);
            console.log(res)
            setFacility(res);
        }
        getFacility()
    }, [param.id])
    const fetchApi = async () => {
        const rentalTypeList = await facilityService.findAllRentalType()
        setRentalType(rentalTypeList);
        const facilityType = await facilityService.findAllFacilityType()
        setType(facilityType);
        const roomStandard = await facilityService.findAllRoomStandard()
        setRoomStandard(roomStandard);
    }
    useEffect(() => {
        fetchApi().then(r => null)
    }, [])

    if (!facility) {
        return null;
    }
    return (
        <>
            <Formik
                initialValues={{
                    id: facility?.id,
                    typeId: facility?.typeId,
                    name: facility?.name,
                    useArea: facility?.useArea,
                    rentalCosts: facility?.rentalCosts,
                    maxNumberOfPeople: facility?.maxNumberOfPeople,
                    rentalTypeId: facility?.rentalTypeId,
                    roomStandardId: facility?.roomStandardId,
                    otherUtilities: facility?.otherUtilities,
                    quantityOfFloor: facility?.quantityOfFloor,
                    areaOfPool: facility?.areaOfPool,
                    freeServiceIncluded: facility?.freeServiceIncluded,
                    image: facility?.image
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
                        await facilityService.save({
                            ...values,
                            typeId: +values.typeId,
                            rentalTypeId: +values.rentalTypeId,
                            roomStandardId: +values.roomStandardId
                        })
                        navigate("/")
                        await Swal.fire({
                            icon: "success",
                            title: "Thay đổi thông tinh dịch vụ thành công!!!",
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
                            <h2 style={{textAlign: "center", marginTop: 20}}> Chỉnh sửa thông tin dịch vụ</h2>
                            <div
                                id="form"
                                className="form"
                                style={{marginLeft: "10%", marginRight: "10%"}}
                            >
                                <Form>
                                    <div className="input-group input-group-sm mg" style={{marginTop: 30}}>
                                        <div className="">
                                            <label className="input-group-text input-group-prepend" htmlFor="typeId">Loại
                                                dịch vụ</label>
                                        </div>
                                        <Field
                                            as="select"
                                            name="typeId"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        >
                                            <option>--Chọn loại dịch vụ--</option>
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
                                            <label className="input-group-text" htmlFor="name">Tên dịch vụ</label>
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
                                            <option>--Chọn loại hình cho thuê--</option>
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
                                            <option>--Chọn tiêu chuẩn phòng--</option>
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
            {/*<div*/}
            {/*    className="container boxed"*/}
            {/*    style={{marginTop: "2%", width: 700, height: "auto"}}*/}
            {/*>*/}
            {/*    <h2 style={{textAlign: "center", marginTop: 20}}>*/}
            {/*        Chỉnh sửa thông tin dịch vụ*/}
            {/*    </h2>*/}
            {/*    <div*/}
            {/*        id="form"*/}
            {/*        className="form"*/}
            {/*        style={{marginLeft: "10%", marginRight: "10%"}}*/}
            {/*    >*/}
            {/*        <form action="#" method="POST" noValidate="novalidate">*/}
            {/*            <div className="input-group input-group-sm mg" style={{marginTop: 30}}>*/}
            {/*                <div className="input-group-prepend">*/}
            {/*                    <span className="input-group-text">Tên dịch vụ</span>*/}
            {/*                </div>*/}
            {/*                <input*/}
            {/*                    type="text"*/}
            {/*                    defaultValue="PHÒNG STUDIO SUITE HƯỚNG BIỂN"*/}
            {/*                    className="form-control"*/}
            {/*                    aria-label="Small"*/}
            {/*                    aria-describedby="inputGroup-sizing-sm"*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <div className="input-group input-group-sm mg">*/}
            {/*                <div className="input-group-prepend">*/}
            {/*                    <span className="input-group-text">Diện tích sử dụng</span>*/}
            {/*                </div>*/}
            {/*                <input*/}
            {/*                    type="number"*/}
            {/*                    defaultValue="40.1"*/}
            {/*                    min={40}*/}
            {/*                    className="form-control"*/}
            {/*                    aria-label="Small"*/}
            {/*                    aria-describedby="inputGroup-sizing-sm"*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <div className="input-group input-group-sm mg">*/}
            {/*                <div className="input-group-prepend">*/}
            {/*                    <span className="input-group-text">Chi phí thuê</span>*/}
            {/*                </div>*/}
            {/*                <input*/}
            {/*                    type="number"*/}
            {/*                    defaultValue={7500}*/}
            {/*                    min={1000}*/}
            {/*                    className="form-control"*/}
            {/*                    aria-label="Small"*/}
            {/*                    aria-describedby="inputGroup-sizing-sm"*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <div className="input-group input-group-sm mg">*/}
            {/*                <div className="input-group-prepend">*/}
            {/*                    <span className="input-group-text">Số người tối đa</span>*/}
            {/*                </div>*/}
            {/*                <input*/}
            {/*                    type="number"*/}
            {/*                    defaultValue={2}*/}
            {/*                    min={2}*/}
            {/*                    max={30}*/}
            {/*                    className="form-control"*/}
            {/*                    aria-label="Small"*/}
            {/*                    aria-describedby="inputGroup-sizing-sm"*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <div className="input-group input-group-sm mg">*/}
            {/*                <div className="input-group-prepend">*/}
            {/*                    <span className="input-group-text">Loại hình cho thuê</span>*/}
            {/*                </div>*/}
            {/*                <select className="form-select">*/}
            {/*                    <option>Year</option>*/}
            {/*                    <option>Month</option>*/}
            {/*                    <option>Day</option>*/}
            {/*                    <option>Hour</option>*/}
            {/*                </select>*/}
            {/*            </div>*/}
            {/*            <div className="input-group input-group-sm mg">*/}
            {/*                <div className="input-group-prepend">*/}
            {/*                    <span className="input-group-text">Tiêu chuẩn phòng</span>*/}
            {/*                </div>*/}
            {/*                <input*/}
            {/*                    type="text"*/}
            {/*                    className="form-control"*/}
            {/*                    aria-label="Small"*/}
            {/*                    aria-describedby="inputGroup-sizing-sm"*/}
            {/*                    required=""*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <div className="input-group input-group-sm mg">*/}
            {/*                <div className="input-group-prepend">*/}
            {/*                    <span className="input-group-text">Mô tả các tiện ích khác</span>*/}
            {/*                </div>*/}
            {/*                <input*/}
            {/*                    type="text"*/}
            {/*                    className="form-control"*/}
            {/*                    aria-label="Small"*/}
            {/*                    aria-describedby="inputGroup-sizing-sm"*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <div className="input-group input-group-sm mg">*/}
            {/*                <div className="input-group-prepend">*/}
            {/*                    <span className="input-group-text">Số tầng</span>*/}
            {/*                </div>*/}
            {/*                <input*/}
            {/*                    type="number"*/}
            {/*                    defaultValue={1}*/}
            {/*                    min={1}*/}
            {/*                    max={10}*/}
            {/*                    className="form-control"*/}
            {/*                    aria-label="Small"*/}
            {/*                    aria-describedby="inputGroup-sizing-sm"*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <div className="input-group input-group-sm mg">*/}
            {/*                <div className="input-group-prepend">*/}
            {/*                    <span className="input-group-text">Diện tích hồ bơi</span>*/}
            {/*                </div>*/}
            {/*                <input*/}
            {/*                    type="number"*/}
            {/*                    min={40}*/}
            {/*                    max={1000}*/}
            {/*                    className="form-control"*/}
            {/*                    aria-label="Small"*/}
            {/*                    aria-describedby="inputGroup-sizing-sm"*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <div className="input-group input-group-sm mg">*/}
            {/*                <div className="input-group-prepend">*/}
            {/*                    <span className="input-group-text">Dịch vụ miễn phí đi kèm</span>*/}
            {/*                </div>*/}
            {/*                <input*/}
            {/*                    type="text"*/}
            {/*                    className="form-control"*/}
            {/*                    aria-label="Small"*/}
            {/*                    aria-describedby="inputGroup-sizing-sm"*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <br/>*/}
            {/*            <div style={{textAlign: "center", marginBottom: 30}}>*/}
            {/*                <button type="submit" className="btn btn-success">*/}
            {/*                    Lưu thông tin*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        </form>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}