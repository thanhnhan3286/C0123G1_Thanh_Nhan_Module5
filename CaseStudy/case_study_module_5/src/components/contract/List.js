import "bootstrap/dist/css/bootstrap.css";

export function List() {
    return (
        <>
            <div className="row room-grid text-center" style={{margin: "0 10%"}}>
                <h1 className="mt-5">Danh sách các hợp đồng tại Furama</h1>
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
                                                    width: "10%",
                                                    color: "black",
                                                    textAlign: "center"
                                                }}
                                            >
                                                Mã hợp đồng
                                            </th>
                                            <th style={{fontSize: 16, width: "20%", color: "black"}}>
                                                Tên khách hàng
                                            </th>
                                            <th style={{fontSize: 16, width: "15%", color: "black"}}>
                                                Ngày làm hợp đồng
                                            </th>
                                            <th style={{fontSize: 16, width: "15%", color: "black"}}>
                                                Ngày kết thúc hợp đồng
                                            </th>
                                            <th
                                                style={{
                                                    fontSize: 16,
                                                    width: "20%",
                                                    color: "black",
                                                    textAlign: "center"
                                                }}
                                            >
                                                Số tiền đặt cọc
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th style={{textAlign: "center"}}>1</th>
                                            <th>Đỗ Thành Nhân</th>
                                            <th>06/03/2023</th>
                                            <th>12/03/2023</th>
                                            <th>1200</th>
                                        </tr>
                                        <tr>
                                            <th style={{textAlign: "center"}}>2</th>
                                            <th>Huỳnh Đức Định</th>
                                            <th>06/08/2023</th>
                                            <th>24/08/2023</th>
                                            <th>90000</th>
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