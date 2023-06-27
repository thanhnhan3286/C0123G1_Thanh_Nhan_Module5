import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

export function ListFacility() {
    const navigate = useNavigate();
    return (
        <>
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
                                    <h4 className="room-type">
                                        <a href="https://furamavietnam.com/vi/rooms/ocean-studio-suite/">
                                            PHÒNG STUDIO SUITE HƯỚNG BIỂN
                                        </a>
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
                                <div className="col-auto  mt-0">
                                    <a href="http://localhost:63342/Module%205/edit.html?_ijt=nhohba0flmabmd9hrut9rfj4ln">
                                        <Link to={`/editFacility`}
                                            className="btn btn-primary room-qview"
                                            style={{backgroundColor: "#0d6056"}}
                                        >
                                            SỬA
                                        </Link>
                                    </a>
                                    <a href="#">
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            style={{backgroundColor: "darkred"}}
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                        >
                                            XÓA
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                                    <h4 className="room-type">
                                        <a href="https://furamavietnam.com/vi/rooms/ocean-studio-suite/">
                                            PHÒNG STUDIO SUITE HƯỚNG BIỂN
                                        </a>
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
                                <div className="col-auto  mt-0">
                                    <a href="http://localhost:63342/Module%205/edit.html?_ijt=nhohba0flmabmd9hrut9rfj4ln">
                                        <Link to={`/editFacility`}
                                            className="btn btn-primary room-qview"
                                            style={{backgroundColor: "#0d6056"}}
                                        >
                                            SỬA
                                        </Link>
                                    </a>
                                    <a href="#">
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            style={{backgroundColor: "darkred"}}
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                        >
                                            XÓA
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                                    <h4 className="room-type">
                                        <a href="https://furamavietnam.com/vi/rooms/ocean-studio-suite/">
                                            PHÒNG STUDIO SUITE HƯỚNG BIỂN
                                        </a>
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
                                <div className="col-auto  mt-0">
                                    <a href="http://localhost:63342/Module%205/edit.html?_ijt=nhohba0flmabmd9hrut9rfj4ln">
                                        <Link to={`/editFacility`}
                                              className="btn btn-primary room-qview"
                                              style={{backgroundColor: "#0d6056"}}
                                        >
                                            SỬA
                                        </Link>
                                    </a>
                                    <a href="#">
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            style={{backgroundColor: "darkred"}}
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                        >
                                            XÓA
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                                    <h4 className="room-type">
                                        <a href="https://furamavietnam.com/vi/rooms/ocean-studio-suite/">
                                            PHÒNG STUDIO SUITE HƯỚNG BIỂN
                                        </a>
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
                                <div className="col-auto  mt-0">
                                    <a href="http://localhost:63342/Module%205/edit.html?_ijt=nhohba0flmabmd9hrut9rfj4ln">
                                        <Link to={`/editFacility`}
                                              className="btn btn-primary room-qview"
                                              style={{backgroundColor: "#0d6056"}}
                                        >
                                            SỬA
                                        </Link>
                                    </a>
                                    <a href="#">
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            style={{backgroundColor: "darkred"}}
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                        >
                                            XÓA
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                                    <h4 className="room-type">
                                        <a href="https://furamavietnam.com/vi/rooms/ocean-studio-suite/">
                                            PHÒNG STUDIO SUITE HƯỚNG BIỂN
                                        </a>
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
                                <div className="col-auto  mt-0">
                                    <a href="http://localhost:63342/Module%205/edit.html?_ijt=nhohba0flmabmd9hrut9rfj4ln">
                                        <Link to={`/editFacility`}
                                              className="btn btn-primary room-qview"
                                              style={{backgroundColor: "#0d6056"}}
                                        >
                                            SỬA
                                        </Link>
                                    </a>
                                    <a href="#">
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            style={{backgroundColor: "darkred"}}
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                        >
                                            XÓA
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                                    <h4 className="room-type">
                                        <a href="https://furamavietnam.com/vi/rooms/ocean-studio-suite/">
                                            PHÒNG STUDIO SUITE HƯỚNG BIỂN
                                        </a>
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
                                <div className="col-auto  mt-0">
                                    <a href="http://localhost:63342/Module%205/edit.html?_ijt=nhohba0flmabmd9hrut9rfj4ln">
                                        <Link to={`/editFacility`}
                                              className="btn btn-primary room-qview"
                                              style={{backgroundColor: "#0d6056"}}
                                        >
                                            SỬA
                                        </Link>
                                    </a>
                                    <a href="#">
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            style={{backgroundColor: "darkred"}}
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                        >
                                            XÓA
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                                    <h4 className="room-type">
                                        <a href="https://furamavietnam.com/vi/rooms/ocean-studio-suite/">
                                            PHÒNG STUDIO SUITE HƯỚNG BIỂN
                                        </a>
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
                                <div className="col-auto  mt-0">
                                    <a href="http://localhost:63342/Module%205/edit.html?_ijt=nhohba0flmabmd9hrut9rfj4ln">
                                        <Link to={`/editFacility`}
                                              className="btn btn-primary room-qview"
                                              style={{backgroundColor: "#0d6056"}}
                                        >
                                            SỬA
                                        </Link>
                                    </a>
                                    <a href="#">
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            style={{backgroundColor: "darkred"}}
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                        >
                                            XÓA
                                        </button>
                                    </a>
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