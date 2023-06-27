import React from "react";

export function ListCustomer() {
    return (
        <>
            <div className="row room-grid text-center" style={{margin: "0 5%"}}>
                <h1 className="mt-5">Danh sách khách hàng</h1>
                <div className="tab-content" id="orders-table-tab-content">
                    <div
                        className="tab-pane fade show active"
                        id="orders-all"
                        role="tabpanel"
                        aria-labelledby="orders-all-tab"
                    >
                        <div className="app-card app-card-orders-table shadow-sm mb-5">
                            <div className="app-card-body">
                                <div className="table-responsive">
                                    <table className="table app-table-hover mb-0 text-left">
                                        <thead>
                                        <tr>
                                            <th
                                                style={{
                                                    fontSize: 16,
                                                    width: "5%",
                                                    color: "black",
                                                    textAlign: "center"
                                                }}
                                            >
                                                ID
                                            </th>
                                            <th style={{fontSize: 16, width: "20%", color: "black"}}>
                                                Họ tên
                                            </th>
                                            <th style={{fontSize: 16, width: "10%", color: "black"}}>
                                                Ngày sinh
                                            </th>
                                            <th style={{fontSize: 16, width: "15%", color: "black"}}>
                                                Giới tính
                                            </th>
                                            <th
                                                style={{
                                                    fontSize: 16,
                                                    width: "10%",
                                                    color: "black",
                                                    textAlign: "center"
                                                }}
                                            >
                                                Số CMND
                                            </th>
                                            <th style={{fontSize: 16, width: "18%", color: "black"}}>
                                                Số điện thoại
                                            </th>
                                            <th style={{fontSize: 16, width: "10%", color: "black"}}>
                                                Email
                                            </th>
                                            <th style={{fontSize: 16, width: "20%", color: "black"}}>
                                                Loại khách
                                            </th>
                                            <th
                                                colSpan={2}
                                                style={{fontSize: 16, width: "10%", color: "black"}}
                                            >
                                                Chức năng
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th style={{textAlign: "center"}}>1</th>
                                            <th>Đỗ Thành Nhân</th>
                                            <th>06/03/2000</th>
                                            <th>Nam</th>
                                            <th>123456789</th>
                                            <th>0123456789</th>
                                            <th>nhan012@gmail.com</th>
                                            <th>Diamond</th>
                                            <th>
                                                <a href="@{/orderController/detail/{id}(id=${page.id})}">
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary text-capitalize"
                                                        data-bs-toggle="modal"
                                                        fdprocessedid="q2sbyt"
                                                    >
                                                        Sửa
                                                        {/*                                            th:attr="onclick=|detail('${productCoffeeModelPage.id}','${productCoffeeModelPage.nameProduct}')|">Detail*/}
                                                    </button>
                                                </a>
                                            </th>
                                            <th>
                                                <button
                                                    type="button"
                                                    className=" btn-del btn btn-danger"
                                                    fdprocessedid="q2sbyt"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                    attr="onclick=|deletes('${page.id}')|"
                                                >
                                                    Xóa
                                                </button>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th style={{textAlign: "center"}}>2</th>
                                            <th>Đỗ Thành Nhân</th>
                                            <th>06/03/2000</th>
                                            <th>Nam</th>
                                            <th>123456789</th>
                                            <th>0123456789</th>
                                            <th>nhan012@gmail.com</th>
                                            <th>Diamond</th>
                                            <th>
                                                <a href="@{/orderController/detail/{id}(id=${page.id})}">
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary text-capitalize"
                                                        data-bs-toggle="modal"
                                                        fdprocessedid="q2sbyt"
                                                    >
                                                        Sửa
                                                        {/*                                            th:attr="onclick=|detail('${productCoffeeModelPage.id}','${productCoffeeModelPage.nameProduct}')|">Detail*/}
                                                    </button>
                                                </a>
                                            </th>
                                            <th>
                                                <button
                                                    type="button"
                                                    className=" btn-del btn btn-danger"
                                                    fdprocessedid="tkcp7c"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                    attr="onclick=|deletes('${page.id}')|"
                                                >
                                                    Xóa
                                                </button>
                                            </th>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/*//table-responsive*/}
                            </div>
                            {/*//app-card-body*/}
                        </div>
                        {/*//app-card*/}
                    </div>
                </div>
                {/*//tab-content*/}
            </div>
        </>
    )
}