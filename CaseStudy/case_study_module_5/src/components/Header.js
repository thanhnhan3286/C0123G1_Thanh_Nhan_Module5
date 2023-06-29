import "./styleHeader.css"
import {useNavigate} from "react-router";
import React from "react";
import {Link} from "react-router-dom";

export function Header() {
    const navigate = useNavigate();
    return (
        <>
            <div className="sticky-wrapper"
                style={{position: "sticky", width: "100%", zIndex: 100, top: 0}}>
                <div className="header-nav js-header-nav ">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg">
                            <div className="navbar-collapse">
                                <ul
                                    id="menu-furama-vi"
                                    className="menu navbar-nav js-main-menu"
                                    style={{ width: "80%", marginLeft:"5%"}}
                                >
                                    <li id="nav-menu-item-5006"
                                        className="nav-item menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                    >
                                        <div className=" d-flex align-items-center bestel-logo">
                                            <Link to={`/`} className="header-logo">
                                                <img
                                                    src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png"
                                                    alt="logo "
                                                    className="img-fluid"
                                                    width={43}
                                                    height={50}
                                                />
                                            </Link>
                                        </div>
                                    </li>
                                    <li
                                        id="nav-menu-item-5006"
                                        className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        style={{marginLeft:"4%"}}
                                    >
                                        <Link to={`/`}
                                              className="nav-link main-menu-link"
                                        >
                                            LOẠI PHÒNG
                                        </Link>
                                    </li>
                                    <li
                                        id="nav-menu-item-5006"
                                        className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"

                                    >
                                        <Link to={`/customer`}
                                              className="nav-link main-menu-link"
                                        >
                                            KHÁCH HÀNG
                                        </Link>
                                    </li>
                                    <li
                                        id="nav-menu-item-5006"
                                        className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"

                                    >
                                        <Link to={`/contract`}
                                              className="nav-link main-menu-link"
                                        >
                                            HỢP ĐỒNG
                                        </Link>
                                    </li>
                                    <li
                                        id="nav-menu-item-5008"
                                        className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                    >
                                        <a
                                            href="https://furamavietnam.com/vi/culinary/"
                                            className="nav-link main-menu-link"
                                        >
                                            ẨM THỰC
                                        </a>
                                    </li>
                                    <li
                                        id="nav-menu-item-5009"
                                        className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                    >
                                        <a
                                            href="https://furamavietnam.com/vi/meeting-and-events/"
                                            className="nav-link main-menu-link"
                                        >
                                            HỘI NGHỊ VÀ SỰ KIỆN
                                        </a>
                                    </li>
                                    <li
                                        id="nav-menu-item-5010"
                                        className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                    >
                                        <a
                                            href="https://furamavietnam.com/vi/spa-and-fitness/"
                                            className="nav-link main-menu-link"
                                        >
                                            SPA
                                        </a>
                                    </li>
                                    <li
                                        id="nav-menu-item-5011"
                                        className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                    >
                                        <a
                                            href="https://furamavietnam.com/vi/recreation/"
                                            className="nav-link main-menu-link"
                                        >
                                            GIẢI TRÍ
                                        </a>
                                    </li>
                                    <li
                                        id="nav-menu-item-5012"
                                        className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                    >
                                        <a
                                            href="https://furamavietnam.com/vi/destination/"
                                            className="nav-link main-menu-link"
                                        >
                                            ĐIỂM ĐẾN
                                        </a>
                                    </li>
                                    <li
                                        id="nav-menu-item-5013"
                                        className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                    >
                                        <a
                                            href="https://furamavietnam.com/vi/furama-special-offers/"
                                            className="nav-link main-menu-link"
                                        >
                                            ADMIN
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}