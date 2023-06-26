import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {toast, ToastContainer} from "react-toastify";
import {ThreeDots} from "react-loader-spinner";
import 'react-toastify/dist/ReactToastify.css'
import "bootstrap/dist/css/bootstrap.css";

export function KhaiBaoYte() {
    return (
        <>
            <Formik
                initialValues={{
                    ten: '',
                    cmnd: '',
                    namSinh: '',
                    gioiTinh: '',
                    quocTich: '',
                    congTy: '',
                    boPhan: '',
                    coTheBaoHiemYte: '',
                    tinhThanh: '',
                    quanHuyen: '',
                    phuongXa: '',
                    soNha: '',
                    dienThoai: '',
                    email: '',
                    diaDiemDiQua: '',
                    trieuChung: '',
                    tiepXuc: ''
                }}
                validationSchema={Yup.object({
                        ten: Yup.string()
                            .required('Không được để trống'),
                        cmnd: Yup.number()
                            .required('Không được để trống'),
                            // .matches(/^[0-9]+$/, 'Chưa đúng định dạng email!!!'),
                        namSinh: Yup.number()
                            .required('Không được để trống'),
                            // .matches(/^[1-2][0-9]{3}$/, 'Chưa đúng định dạng email!!!'),
                        quocTich: Yup.string()
                            .required('Không được để trống'),
                        tinhThanh: Yup.string()
                            .required('Không được để trống'),
                        quanHuyen: Yup.string()
                            .required('Không được để trống'),
                        phuongXa: Yup.string()
                            .required('Không được để trống'),
                        soNha: Yup.string()
                            .required('Không được để trống'),
                        dienThoai: Yup.string()
                            .required('Không được để trống'),
                            // .matches(/^(0)[1-9][0-9]{8}$/, 'Số điện thoại phải có 10 số!!!'),
                        email: Yup.string()
                            .required('Không được để trống!!!')
                            .matches(/^[a-zA-Z0-9+-]+@[a-zA-Z0-9-.]+$/, 'Chưa đúng định dạng email!!!')
                        // .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/, 'Chưa đúng định dạng email!!!')
                    }
                )}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        setSubmitting(false)
                        toast('Đã hoàn thành tờ khai y tế!!!');
                    }, 1000)
                }}
            >
                {
                    ({isSubmitting}) => (
                        <div className="container w-50">
                            <h1 className="text-center">Tờ khai y tế</h1>
                            <Form>
                                <div className="mb-3">
                                    <label className="form-label">Họ tên</label>
                                    <Field type="text" className="form-control"
                                           name="ten"
                                    />
                                    <ErrorMessage name="ten" component='span' className="error-mess"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Số hộ chiếu/CMND</label>
                                    <Field type="text" className="form-control"
                                           name="cmnd"
                                    />
                                    <ErrorMessage name="cmnd" component='span' className="error-mess"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Năm sinh</label>
                                    <Field type="text" className="form-control"
                                           name="namSinh"
                                    />
                                    <ErrorMessage name="namSinh" component='span' className="error-mess"/>
                                </div>

                                <div className="mb-3 flex">
                                    <label className="form-label">Giới tính</label>
                                    <div className="form-check form-check-inline" style={{marginLeft: "10%"}}>
                                        <label className="form-label">Nam</label>
                                        <Field type="radio" className="form-check-input"
                                               value="Nam"
                                               name="gioiTinh"
                                        />
                                    </div>
                                    <div className="form-check form-check-inline" style={{marginLeft: "10%"}}>
                                        <label className="form-label">Nữ</label>
                                        <Field type="radio" className="form-check-input"
                                               value="Nu"
                                               name="gioiTinh"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Quốc tịch</label>
                                    <Field type="text" className="form-control"
                                           name="quocTich"
                                    />
                                    <ErrorMessage name="quocTich" component='span' className="error-mess"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Công ty làm việc</label>
                                    <Field type="text" className="form-control"
                                           name="congTy"
                                    />
                                    <ErrorMessage name="congTy" component='span' className="error-mess"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Bộ phận làm việc</label>
                                    <Field type="text" className="form-control"
                                           name="boPhan"
                                    />
                                    <ErrorMessage name="boPhan" component='span' className="error-mess"/>
                                </div>
                                <div className="mb-3 ">
                                    <label className="form-label">Có thẻ bảo hiểm y tế</label>
                                    <Field type="checkbox" className="form-check-input" style={{marginLeft: "10%"}}
                                           value="có"
                                           name="coTheBaoHiemYte"
                                    />
                                </div>
                                <h3>Địa chỉ liên lạc tại Việt Nam</h3>
                                <div className="mb-3">
                                    <label className="form-label">Tỉnh Thành</label>
                                    <Field type="text" className="form-control"
                                           name="tinhThanh"
                                    />
                                    <ErrorMessage name="tinhThanh" component='span' className="error-mess"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Quận/Huyện</label>
                                    <Field type="text" className="form-control"
                                           name="quanHuyen"
                                    />
                                    <ErrorMessage name="quanHuyen" component='span' className="error-mess"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Phường/xã</label>
                                    <Field type="text" className="form-control"
                                           name="phuongXa"
                                    />
                                    <ErrorMessage name="phuongXa" component='span' className="error-mess"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Số nhà, phố, tổ dân phố /thôn /đội</label>
                                    <Field type="text" className="form-control"
                                           name="soNha"
                                    />
                                    <ErrorMessage name="soNha" component='span' className="error-mess"/>
                                </div>


                                <div className="mb-3">
                                    <label className="form-label">Điện thoại</label>
                                    <Field type="number" className="form-control"
                                           name="dienThoai"
                                    />
                                    <ErrorMessage name="dienThoai" component='span' className="error-mess"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <Field type="text" className="form-control"
                                           name="email"
                                    />
                                    <ErrorMessage name="email" component='span' className="error-mess"/>
                                </div>
                                <div className="mb-3">
                                    <h3>Trong vòng 14 ngày qua Anh/chị có đến quốc gia vùng lãnh thỗ nào(có thể đi qua
                                        nhiều quốc gia)</h3>
                                    <Field type="text" className="form-control" as="textarea"
                                           name="diaDiemDiQua"
                                    />
                                </div>
                                <h3>Trong vòng 14 ngày qua Anh/chị có xuất hiện triệu chứng nào sau đây không?</h3>
                                <div className="mb-3 d-flex">
                                    <Field type="checkbox" className="form-check-input"
                                           value="sốt"
                                           name="trieuChung"
                                    />
                                    <label className="form-check">sốt</label>
                                </div>
                                <div className="mb-3 d-flex">
                                    <Field type="checkbox" className="form-check-input"
                                           value="ho"
                                           name="trieuChung"
                                    />
                                    <label className="form-check">Ho</label>

                                </div>
                                <div className="mb-3 d-flex">
                                    <Field type="checkbox" className="form-check-input"
                                           value="Khó thở"
                                           name="symptom"
                                    />
                                    <label className="form-check">Khó thở</label>

                                </div>
                                <div className="mb-3 d-flex">
                                    <Field type="checkbox" className="form-check-input"
                                           value="Viêm phổi"
                                           name="trieuChung"
                                    />
                                    <label className="form-check">Viêm phổi</label>

                                </div>
                                <div className="mb-3 d-flex">
                                    <Field type="checkbox" className="form-check-input"
                                           value="Đau họng"
                                           name="trieuChung"
                                    />
                                    <label className="form-check">Đau họng </label>

                                </div>
                                <div className="mb-3 d-flex">
                                    <Field type="checkbox" className="form-check-input"
                                           value="Mệt mỏi"
                                           name="trieuChung"
                                    />
                                    <label className="form-check">Mệt mỏi</label>
                                </div>
                                <h3>Trong vòng 14 ngày qua Anh/chị có tiếp xúc với?</h3>
                                <div className="mb-3 d-flex">
                                    <Field type="checkbox" className="form-check-input"
                                           value="Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19"
                                           name="tiepXuc"
                                    />
                                    <label className="form-check">Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19</label>
                                </div>
                                <div className="mb-3 d-flex">
                                    <Field type="checkbox" className="form-check-input"
                                           value="Người từ nước có bệnh COVID-19"
                                           name="tiepXuc"
                                    />
                                    <label className="form-check">Người từ nước có bệnh COVID-19</label>

                                </div>
                                <div className="mb-3 d-flex">
                                    <Field type="checkbox" className="form-check-input"
                                           value="Người có biểu hiện (số, ho, khó thở, viêm phổi)"
                                           name="tiepXuc"
                                    />
                                    <label className="form-check">Người có biểu hiện (số, ho, khó thở, viêm
                                        phổi)</label>

                                </div>
                                <div className="text-center">
                                {
                                    isSubmitting ?
                                        <ThreeDots visible={true}/>
                                        :
                                        <button type="submit" className="btn btn-primary"
                                        style={{width: "80px"}}
                                        >Submit</button>
                                }
                                </div>
                            </Form>
                        </div>
                    )
                }
            </Formik>
            <ToastContainer/>
        </>
    )
}