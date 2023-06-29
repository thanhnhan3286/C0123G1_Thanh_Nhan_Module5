import "bootstrap/dist/css/bootstrap.css";
import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import * as contractService from "../../service/ContractService";
import Swal from "sweetalert2";

export function ListContract() {
    const navigate = useNavigate();
    const [contract, setContract] = useState([]);
    const fetchApi = async () => {
        const res = await contractService.findAll();
        console.log(res);
        setContract(res);
    }
    useEffect(() => {
        fetchApi()
    },[])
    // const deleteContractApi = async (id) => {
    //     await contractService.deleteContract(id)
    //     fetchApi()
    //     await Swal.fire(
    //         {
    //             title: "Xóa thành công!",
    //             icon: 'success',
    //             timer: 2000
    //         }
    //     )
    // }
    // function deleteContract(id, name) {
    //     Swal.fire({
    //         title: 'BẠN CÓ CHẮC CHẮN?',
    //         text: "XÓA HỢP ĐỒNG " + name + " KHÔNG?",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         cancelButtonColor: '#3085d6',
    //         cancelButtonText: 'HỦY',
    //         confirmButtonColor: '#d33',
    //         confirmButtonText: 'XÓA'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             deleteContractApi(id).then(r => null)
    //         }
    //     })
    // }
    return (
        <>
            <div className="row room-grid text-center" style={{margin: "0 20%"}}>
                <h1 className="mt-5 font-weight-bold">Danh sách các hợp đồng tại Furama</h1>
                <div className="text-center">
                    <Link to={`/createContract`} className="btn btn-secondary font-weight-light"
                    style={{backgroundColor:"#046056"}}>Thêm mới</Link>
                </div>
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
                                    <table className="table app-table-hover mb-0 mt-5 text-left">
                                        <thead>
                                        <tr>
                                            <th
                                                style={{
                                                    fontSize: 16,
                                                    width: "14%",
                                                    color: "black",
                                                    textAlign: "center"
                                                }}
                                            >
                                                Mã hợp đồng
                                            </th>
                                            {/*<th style={{fontSize: 16, width: "20%", color: "black"}}>*/}
                                            {/*    Tên khách hàng*/}
                                            {/*</th>*/}
                                            <th style={{fontSize: 16, width: "16%", color: "black"}}>
                                                Ngày làm hợp đồng
                                            </th>
                                            <th style={{fontSize: 16, width: "16%", color: "black"}}>
                                                Ngày kết thúc hợp đồng
                                            </th>
                                            <th
                                                style={{
                                                    fontSize: 16,
                                                    width: "15%",
                                                    color: "black"
                                                }}
                                            >
                                                Số tiền đặt cọc
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            contract.map((c, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <th style={{textAlign: "center"}}>{c.numberService}</th>
                                                        {/*<th>{c.nameCustomer}</th>*/}
                                                        <th>{c.startDay}</th>
                                                        <th>{c.endDay}</th>
                                                        <th>{c.deposit}</th>
                                                    </tr>
                                                )
                                            })
                                        }
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
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center ">
                        <li className="page-item ">
                            <a
                                className="page-link"
                                href="@{'/orderController/'(page=${orderPage.number -1})}"
                                if="${orderPage.hasPrevious()}"
                            >
                                Previous
                            </a>
                        </li>
                        {/*                        <li style="border: 1px solid #CCCCCC" class="page-item active" ><a class="page-link active" th:text="${pageNo}" th:href="@{/(page=${pageNo})}"></a></li>*/}
                        <li className="page-item    ">
                            <a className="page-link" text="${orderPage.number +1}">
                                1
                            </a>
                        </li>
                        <li className="page-item">
                            <a
                                className="page-link"
                                href="@{'/orderController/'(page=${orderPage.number +1})}"
                                if="${orderPage.hasNext()}"
                            >
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}