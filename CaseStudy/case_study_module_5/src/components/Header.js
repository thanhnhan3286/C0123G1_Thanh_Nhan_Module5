import "./styleHeader.css"
export function Header() {
    return (
        <>
            <>
                <div className="header-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-auto col-sm-5 col-lg-3 d-flex align-items-center bestel-logo">
                                <a href="https://furamavietnam.com/vi/" className="header-logo">
                                    <img
                                        src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png"
                                        alt="logo "
                                        className="img-fluid"
                                        width={63}
                                        height={100}
                                    />
                                </a>
                            </div>
                            <div className="col col-md-auto col-lg-3 d-flex">
                                <div className="catalog-widget d-none d-sm-block">
                                    <div
                                        className="catalog-widget-inside"
                                        style={{ visibility: "visible" }}
                                    >
                                        <a
                                            href="https://www.tripadvisor.com/Hotel_Review-g298085-d302750-Reviews-Furama_Resort_Danang-Da_Nang_Quang_Nam_Province.html"
                                            target="_blank"
                                        >
                                            <div className="widget-tripadvisor">
                                                <div className="inside">
                                                    <div className="widget-tripadvisor-logo">
                                                        <img
                                                            src="https://smartdata.tonytemplates.com/bestel/wp-content/uploads/2018/05/widget-tripadvisor-logo.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="widget-tripadvisor-rating">
                                                        <img
                                                            src="https://fur625amavietnam.com/wp-content/uploads/2018/08/widget-tripadvisor-rating.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="widget-tripadvisor-text">4,625 Reviews</div>
                                                </div>
                                            </div>
                                        </a>
                                        <span className="catalog-widget-toggle js-catalog-widget-toggle" />
                                    </div>
                                </div>
                                <div className="catalog-widget-mobile d-flex d-sm-none align-items-center mx-auto"></div>
                            </div>
                            <div className="col-sm-3 d-none d-lg-block">
                                <div className="header-contact d-flex">
                                    <div className="header-contact-icon">
                                        <i className="icon-placeholder" />
                                    </div>
                                    <div className="header-contact-txt">
                                        <p>
                                            103 – 105 Đường Võ Nguyên Giáp, Phường Khuê Mỹ, Quận Ngũ hành
                                            Sơn, Tp. Đà Nẵng, Việt Nam{" "}
                                        </p>
                                        <p className="txt-sm">
                                            <span>7.0 km</span> từ Sân bay Quốc tế Đà Nẵng{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 d-none d-lg-block">
                                <div className="header-contact d-flex">
                                    <div className="header-contact-icon">
                                        <i className="icon-telephone" />
                                    </div>
                                    <div className="header-contact-txt">
                                        <p className="txt-lg">84-236-3847 333/888 </p>
                                    </div>
                                </div>
                                <div className="header-contact d-flex">
                                    <div className="header-contact-icon">
                                        <i className="icon-closed-envelope" />
                                    </div>
                                    <div className="header-contact-txt">
                                        <a href="mailto:reservation@furamavietnam.com">
                                            reservation@furamavietnam.com{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="sticky-wrapper"
                    style={{ position: "sticky", width: "100%", zIndex: 100, top: 0 }}
                >
                    <div className="header-nav js-header-nav ">
                        <div className="container">
                            <nav className="navbar navbar-expand-lg">
                                <div className="navbar-collapse">
                                    <ul
                                        id="menu-furama-vi"
                                        className="menu navbar-nav w-100 js-main-menu"
                                    >
                                        <li
                                            id="nav-menu-item-5006"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                            <a
                                                href="https://furamavietnam.com/vi/the-resort/"
                                                className="nav-link main-menu-link"
                                            >
                                                GIỚI THIỆU
                                            </a>
                                        </li>
                                        <li
                                            id="nav-menu-item-5007"
                                            className="nav-item menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                            <a href="#" className="nav-link main-menu-link">
                                                LOẠI PHÒNG
                                            </a>
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
                                                ƯU ĐÃI
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </>
        </>
    )

}