import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import React from "react";
import Swal from "sweetalert2";

export function ListFacility() {
    const navigate = useNavigate();
    function deleteFacility(id, name) {
        Swal.fire({
            title: 'Are you sure?',
            text: "Delete " + name + " ?",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#3085d6',
            confirmButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // deleteUsersss(id).then(r => null)
            }
        })
    }
    return (
        <>
            <header style={{zIndex :"-1"}}>
                <div id="indicators" className="carousel " data-ride="carousel" >
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active img">
                            <img className="img"
                                 src="https://www.goldentour.vn/files/thumb/848/360/uploads/furama.jpg" border="none" width="100%" height={350}
                                 alt="new"
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h3 className="display-3 h3-form ">LOẠI PHÒNG</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="row room-grid" style={{margin: "0 10%"}}>
                <div className="col-sm-6 col-lg-4">
                    <div className="room-card">
                        <div className="room-card-photo">
                            <img
                                width={370}
                                height={239}
                                src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg"
                                className="img-fluid wp-post-image"
                                alt=""
                                srcSet="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg 370w, https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-300x194.jpg 300w, https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-768x497.jpg 768w, https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-871x563.jpg 871w, https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-145x94.jpg 145w, https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F.jpg 900w"
                                sizes="(max-width: 370px) 100vw, 370px"
                            />
                            <div className="flex-wrap-center"></div>
                        </div>
                        <div className="room-card-info">
                            <div className="row">
                                <div className="col">
                                    <h4 className="room-type font-weight-bold">
                                        PHÒNG STUDIO SUITE HƯỚNG BIỂN
                                    </h4>
                                </div>
                            </div>
                            <div className="room-size mt-1">
                                Diện Tích Phòng: 40.1 m<sup>2</sup>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="room-price">
                                        <span/>
                                    </div>
                                </div>
                                <div className="col-auto mt-0 justify-content-between d-flex">
                                    <div style={{paddingRight:"10px"}}>
                                        <Link to={`/editFacility`}
                                              className="btn btn-primary room-qview border-0"
                                              style={{backgroundColor: "#0d6056",}}
                                        >
                                            SỬA
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            className="btn btn-primary border-0"
                                            style={{backgroundColor: "darkred"}}
                                            data-bs-target="#exampleModal"
                                            // onClick={() => deleteFacility(`${user.id}`, `${user.name}`)}
                                            onClick={() => deleteFacility(2, 'Name')}
                                        >
                                            XÓA
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*phân trang*/}
            <nav aria-label="Page navigation example" className="mt-5">
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
        </>
    )
}