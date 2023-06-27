import React from "react";

export function EditCustomer() {
    return (
        <>
            <div
                className="container boxed"
                style={{ marginTop: "3%", width: 700, height: "auto" }}
            >
                <h2 style={{ textAlign: "center", marginTop: 20 }}>
                    Chỉnh sửa thông tin khách hàng
                </h2>
                <div
                    id="form"
                    className="form"
                    style={{ marginLeft: "10%", marginRight: "10%" }}
                >
                    <form action="#" method="POST" noValidate="novalidate">
                        <div className="input-group input-group-sm mg" style={{ marginTop: 30 }}>
                            <div className="input-group-prepend">
                                <span className="input-group-text">Họ tên</span>
                            </div>
                            <input
                                type="text"
                                defaultValue="Đỗ Thành Nhân"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <p style={{ color: "red" }} />
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Ngày sinh</span>
                            </div>
                            <input
                                type="text"
                                defaultValue="06/03/2000"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <p style={{ color: "red" }} />
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Giới tính</span>
                            </div>
                            <input
                                type="text"
                                defaultValue="Nam"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <p style={{ color: "red" }} />
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Số CMND</span>
                            </div>
                            <input
                                type="text"
                                defaultValue={123456789}
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <p style={{ color: "red" }} />
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Số điện thoại</span>
                            </div>
                            <input
                                type="text"
                                defaultValue={'0123456789'}
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <p style={{ color: "red" }} />
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Email</span>
                            </div>
                            <input
                                type="text"
                                defaultValue="nhan012@gmail.com"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <p style={{ color: "red" }} />
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Loại khách</span>
                            </div>
                            <select className="form-select">
                                <option>Diamond</option>
                                <option>Platinium</option>
                                <option>Gold</option>
                                <option>Silver</option>
                                <option> Member</option>
                            </select>
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Địa chỉ</span>
                            </div>
                            <input
                                type="text"
                                defaultValue="Huế"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                                required=""
                            />
                        </div>
                        <p style={{ color: "red" }} />
                        <br />
                        <div className="mb-4 text-center">
                            <button type="submit" className="btn btn-success">
                                Lưu
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}