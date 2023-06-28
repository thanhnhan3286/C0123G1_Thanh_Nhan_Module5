import React from "react";
import "bootstrap/dist/css/bootstrap.css"

export function CreateContract() {
    return (
        <>
            <div
                className="container boxed"
                style={{ marginTop: "2%", width: 800, height: "auto" }}
            >
                <h2 style={{ textAlign: "center", marginTop: 20 }}>
                    Tạo hợp đồng Khách hàng thuê dịch vụ ở Furama
                </h2>
                <div
                    id="form"
                    className="form"
                    style={{ marginLeft: "10%", marginRight: "10%" }}
                >
                    <form action="#" method="POST" noValidate="novalidate">
                        <div className="input-group input-group-sm mg" style={{ marginTop: 30 }}>
                            <div className="input-group-prepend">
                                <span className="input-group-text">Ngày bắt đầu</span>
                            </div>
                            <input
                                type="date"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <p style={{ color: "red" }} />
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Ngày kết thúc</span>
                            </div>
                            <input
                                type="date"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <p style={{ color: "red" }} />
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Số tiền cọc trước</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <p style={{ color: "red" }} />
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Tổng số tiền thanh toán</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <p style={{ color: "red" }} />
                        <br />
                        <div className="mb-4 text-center">
                            <button type="submit" className="btn btn-success">
                                Tạo hợp đồng
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}