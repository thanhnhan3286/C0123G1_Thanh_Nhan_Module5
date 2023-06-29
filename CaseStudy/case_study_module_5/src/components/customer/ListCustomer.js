import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import * as customerService from "../../service/CustomerService"
import Swal from "sweetalert2";

export function ListCustomer() {
    const navigate = useNavigate();
    const [customer, setCustomer] = useState([]);
    const [gender, setGender] = useState([]);
    const [customerTypes, setCustomerTypes] = useState([]);

    const getListGenderApi = async () => {
        const res = await customerService.getListGender();
        setGender(res);
    };

    const getListCustomerTypesApi = async () => {
        const res = await customerService.getListCustomerTypes();
        console.log(res)
        setCustomerTypes(res);
    };

    useEffect(() => {
        getListGenderApi();
        getListCustomerTypesApi();
    }, []);

    const fetchApi = async () => {
        const res = await customerService.findAll();
        console.log(res);
        setCustomer(res);
    }
    useEffect(() => {
        fetchApi()
    },[])
    const deleteCustomerApi = async (id) => {
        await customerService.deleteCustomer(id)
        fetchApi()
        await Swal.fire(
            {
                title: "Xóa thành công!",
                icon: 'success',
                timer: 2000
            }
        )
    }
    function deleteCustomer(id, name) {
        Swal.fire({
            title: 'BẠN CÓ CHẮC CHẮN?',
            text: "XÓA KHÁCH HÀNG " + name + " KHÔNG?",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#3085d6',
            cancelButtonText: 'HỦY',
            confirmButtonColor: '#d33',
            confirmButtonText: 'XÓA'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteCustomerApi(id).then(r => null)
            }
        })
    }

    return (
        <>
            <div className="row room-grid text-center" style={{margin: "0 10%"}}>
                <h1 className="mt-5 font-weight-bold">Danh sách khách hàng</h1>
                <div className="text-center">
                    <Link to={`/createCustomer`} className="btn btn-secondary font-weight-light"
                          style={{backgroundColor: "#046056"}}>Thêm mới</Link>
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
                                                    width: "8%",
                                                    color: "black",
                                                    textAlign: "center"
                                                }}
                                            >
                                                ID
                                            </th>
                                            <th style={{fontSize: 16, width: "16%", color: "black"}}>
                                                Họ tên
                                            </th>
                                            <th style={{fontSize: 16, width: "10%", color: "black"}}>
                                                Ngày sinh
                                            </th>
                                            <th style={{fontSize: 16, width: "10%", color: "black"}}>
                                                Giới tính
                                            </th>
                                            <th
                                                style={{
                                                    fontSize: 16,
                                                    width: "10%",
                                                    color: "black"
                                                }}
                                            >
                                                Số CMND
                                            </th>
                                            <th style={{fontSize: 16, width: "12%", color: "black"}}>
                                                Số điện thoại
                                            </th>
                                            <th style={{fontSize: 16, width: "15%", color: "black"}}>
                                                Email
                                            </th>
                                            <th style={{fontSize: 16, width: "15%", color: "black"}}>
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
                                        {
                                            customer.map((c, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <th style={{textAlign: "center"}}>{c.id}</th>
                                                        <th>{c.name}</th>
                                                        <th>{c.birthday}</th>
                                                        <th>{gender.find((g) => g.id === c.gender)?.gender}</th>
                                                        <th>{c.cmnd}</th>
                                                        <th>{c.phone}</th>
                                                        <th>{c.email}</th>
                                                        <th>{customerTypes.find((ct) => ct.id===c.customerType)?.name}</th>
                                                        <th>
                                                                <Link to={`/editCustomer/${c.id}`}
                                                                    type="button"
                                                                    className="btn btn-secondary"
                                                                    data-bs-toggle="modal"
                                                                    style={{backgroundColor: "#0d6056", border: "0"}}
                                                                >
                                                                    Sửa
                                                                    {/*                                            th:attr="onclick=|detail('${productCoffeeModelPage.id}','${productCoffeeModelPage.nameProduct}')|">Detail*/}
                                                                </Link>
                                                        </th>
                                                        <th>
                                                            <button
                                                                type="button"
                                                                className=" btn btn-danger"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal"
                                                                onClick={() => deleteCustomer(`${c.id}`, `${c.name}`)}
                                                            >
                                                                Xóa
                                                            </button>
                                                        </th>
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
            </div>
        </>
    )
}