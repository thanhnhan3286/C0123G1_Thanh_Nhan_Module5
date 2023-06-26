import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./formCreateEdit.css"
export function CreateFacility() {
    return (
        <>
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
                    <form action="#" method="POST" noValidate="novalidate">
                        <div className="input-group input-group-sm mg" style={{marginTop: 30}}>
                            <div className="input-group-prepend">
                                <span className="input-group-text">Tên dịch vụ</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Diện tích sử dụng</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Chi phí thuê</span>
                            </div>
                            <input
                                type="number"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Số người tối đa</span>
                            </div>
                            <input
                                type="number"
                                min={2}
                                max={30}
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Loại hình cho thuê</span>
                            </div>
                            <select className="form-select">
                                <option>Year</option>
                                <option>Month</option>
                                <option>Day</option>
                                <option>Hour</option>
                            </select>
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Tiêu chuẩn phòng</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                                required=""
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Mô tả các tiện ích khác</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Số tầng</span>
                            </div>
                            <input
                                type="number"
                                min={1}
                                max={10}
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Diện tích hồ bơi</span>
                            </div>
                            <input
                                type="number"
                                min={40}
                                max={1000}
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Dịch vụ miễn phí đi kèm</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <br/>
                        <div style={{textAlign: "center", marginBottom: 30}}>
                            <button type="submit" className="btn btn-success">
                                Thêm mới
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}