import "bootstrap/dist/css/bootstrap.css"
import {useEffect, useState} from "react";
import * as orderService from "../service/OrderService"
import * as productService from "../service/ProductService"
import {Link} from "react-router-dom";
import Swal from "sweetalert2";


export function ListOrder() {
    const [orders, setOrders] = useState([]);
    // const [products, setProducts] = useState([]);
    // const [types, setTypes] = useState([]);
    // const getListType = async () => {
    //     const res = await productService.findAllType();
    //     console.log(res);
    //     setTypes(res);
    // }
    // const getListProduct = async () => {
    //     const res = await productService.findAll();
    //     console.log(res);
    //     setProducts(res);
    // }
    const getListOrder = async () => {
        const res = await orderService.findAll();
        console.log(res)
        setOrders(res);
    }
    useEffect(() => {
        getListOrder();
        // getListProduct();
        // getListType()
    }, [])

    const deleteOrd = async (id) => {
        await orderService.deleteOr(id);
        // setOrders(res);
        await getListOrder();
        await Swal.fire({
            title: 'XÓA THÀNH CÔNG',
            icon: 'success',
            timer: 2000
        })

    }

    function deleteOrder(id) {
        console.log(id);
        Swal.fire({
            title: 'XÓA ĐƠN HÀNG',
            text: 'Xóa đơn hàng số ' + id + " ?",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#3085d6',
            cancelButtonText: 'Hủy',
            confirmButtonColor: '#d33',
            confirmButtonText: 'Xóa'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteOrd(+id).then(r => null)
            }
        })
        return undefined;
    }

    return (
        <>
            <div className="row room-grid text-center" style={{margin: "0 5%"}}>
                <h1 className="mt-5">Thống kê đơn hàng</h1>
                <div className="w-25 text-center d-flex mb-4">
                    <Link to={'/create'} className="btn btn-secondary">
                        Thêm mới
                    </Link>

                </div>

                <div className="tab-content" id="orders-table-tab-content">
                    <div className="tab-pane fade show active" id="orders-all" role="tabpanel"
                         aria-labelledby="orders-all-tab">
                        <div className="app-card app-card-orders-table shadow-sm mb-5">
                            <div className="app-card-body">
                                <div className="table-responsive">
                                    <table className="table app-table-hover mb-0 text-left">
                                        <thead>
                                        <tr>
                                            <th style={{
                                                fontSize: "16px",
                                                width: "5%",
                                                color: " black",
                                                textAlign: "center"
                                            }}>STT
                                            </th>
                                            <th style={{
                                                fontSize: "16px",
                                                width: "10%",
                                                color: " black",
                                                textAlign: "center"
                                            }}>Mã đơn hàng
                                            </th>
                                            <th style={{fontSize: "16px", width: "20%", color: " black"}}>Tên sản phẩm
                                            </th>
                                            <th style={{fontSize: "16px", width: "7%", color: " black"}}>Giá(USD)
                                            </th>
                                            <th style={{fontSize: "16px", width: "15%", color: " black"}}>Loại sản
                                                phẩm
                                            </th>
                                            <th style={{fontSize: "16px", width: "15%", color: " black"}}>Ngày mua</th>
                                            <th style={{fontSize: "16px", width: "10%", color: " black"}}>Số lượng</th>
                                            <th style={{fontSize: "16px", width: "15%", color: " black"}}>Tổng
                                                tiền(USD)
                                            </th>
                                            <th style={{fontSize: "16px", width: "15%", color: " black"}}>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            orders.map((list, index) => (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{list.id}</td>
                                                        <td>{list.product.name}</td>
                                                        <td>{list.priceProduct}</td>
                                                        {/*<td>{types.find((t) => t.id === ({products.find((p) => p.id === list.productId)?.type}))}</td>*/}
                                                        <td>{list.product.type.name}</td>
                                                        <td>{list.buyDay}</td>
                                                        <td>{list.quantity}</td>
                                                        <td>{list.totalPrice}</td>

                                                        <td>
                                                            <a>
                                                                <button type="button"
                                                                        className="btn btn-primary text-capitalize"
                                                                        data-bs-toggle="modal"
                                                                        fdprocessedid="q2sbyt">Sửa
                                                                </button>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <button type="button"
                                                                    className=" btn-del btn btn-danger"
                                                                    fdprocessedid="tkcp7c"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#exampleModal"
                                                                    onClick={() => deleteOrder(`${list.id}`)}
                                                            >Xóa
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            )
                                        }
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
            {/*// <!-- Button trigger modal -->*/}
            {/*// <!--<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">-->*/}
            {/*// <!--    Launch demo modal-->*/}
            {/*// <!--</button>-->*/}
            {/*//*/}
            {/*// <!-- Modal -->*/}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Xóa Khách Hàng</h5>
                            <button type="button" className="btn-close"
                                    data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body" style={{textAlign: "center"}}>
                <span>
                    Bạn có muốn xóa khách hàng số....
                </span>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-del btn btn-primary"
                                    data-bs-dismiss="modal" style={{backgroundColor: "#0d6056"}}>Hủy
                            </button>
                            <button type="button" className="btn-del btn btn-danger">Xóa</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}