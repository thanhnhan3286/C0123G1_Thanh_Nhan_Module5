import "./styleHeader.css"

export function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-light">
                            <h2 className="mb-1">Hướng Dẫn Di Chuyển</h2>
                            <div className="d-flex flex-column flex-md-row flex-lg-column">
                                <p>
                                    Khu nghỉ dưỡng Furama là cơ sở hàng đầu để khám phá một trong những
                                    điểm đến hấp dẫn nhất Châu Á. Chỉ cách Đà Nẵng một quãng lái xe ngắn
                                    là bốn Di sản Văn hóa Thế giới được UNESCO công nhận:
                                </p>
                                <p className="pl-0 pl-md-3 pl-lg-0">
                                    <a
                                        href="#"
                                        className="btn btn-with-arrow js-footer-map-toggle"
                                        style={{backgroundColor: "#0d6056"}}
                                    >
                                        {/*                            <i class="icon-placeholder"></i>*/}
                                        <span className="opened-text">Đóng Bản Đồ</span>
                                        <span>Xem Trên Bản Đồ</span>
                                    </a>
                                </p>
                            </div>
                            <div className="mt-3 mt-md-1 mt-lg-3"/>
                            <h4 className="mb-1 mb-md-2">Địa Điểm</h4>
                            <table className="place-table">
                                <tbody>
                                <tr>
                                    <td>1.</td>
                                    <td>Cố đô Huế</td>
                                    <td className="text-right">
                                        <span>2 tiếng</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2.</td>
                                    <td>Phố cổ Hội An</td>
                                    <td className="text-right">
                                        <span>30 phút</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3.</td>
                                    <td>Thánh địa Mỹ Sơn</td>
                                    <td className="text-right">
                                        <span>90 phút</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4.</td>
                                    <td>Động Phong Nha</td>
                                    <td className="text-right">
                                        <span>3 tiếng</span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-lg-7 ml-lg-auto d-flex flex-column position-static">
                            <div className="row">
                                <div className="col-sm col-lg-5">
                                    <div id="nav_menu-1" className="footer-widget4  widget_nav_menu">
                                        <div className="menu-footer-menu-vi-container">
                                            <ul id="menu-footer-menu-vi" className="menu">
                                                <li
                                                    id="menu-item-6855"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6855"
                                                >
                                                    <a href="https://furamavietnam.com/vi/furama-resort-danang-rack-rate/">
                                                        Giá Công Bố
                                                    </a>
                                                </li>
                                                <li
                                                    id="menu-item-6854"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6854"
                                                >
                                                    <a href="https://furamavietnam.com/vi/lifestyle-blog/">
                                                        Lifestyle Blog
                                                    </a>
                                                </li>
                                                <li
                                                    id="menu-item-6856"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6856"
                                                >
                                                    <a href="https://furamavietnam.com/vi/work-with-us/">
                                                        Tuyển Dụng
                                                    </a>
                                                </li>
                                                <li
                                                    id="menu-item-6857"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6857"
                                                >
                                                    <a href="https://furamavietnam.com/vi/contact/">Liên Hệ</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="text-5" className="footer-widget4  widget_text">
                                        <div className="textwidget"/>
                                    </div>
                                </div>
                                <div className="col-sm mt-2 mt-sm-0">
                                    <h4> Liên hệ </h4>
                                    <ul className="icn-list">
                                        <li style={{color: "black"}}>
                                            <i className="icon-placeholder"/>
                                            <span style={{fontSize: 12}}>
                  103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son
                  District, Danang City, Vietnam
                </span>
                                            <br style={{margin: 0, padding: 0, fontSize: 12}}/>
                                            <span style={{fontSize: 12}}>
                  Tel.: 84-236-3847 333/888 *
                </span>
                                            <span style={{fontSize: 12}}>Fax: 84-236-3847 666</span>
                                            <br style={{margin: 0, padding: 0, fontSize: 12}}/>
                                            <span style={{fontSize: 12}}>Email:&nbsp;</span>
                                            <a
                                                className="link"
                                                style={{
                                                    margin: 0,
                                                    padding: 0,
                                                    fontSize: 12,
                                                    color: "black"
                                                }}
                                                href="mailto:reservation@furamavietnam.com"
                                            >
                                                reservation@furamavietnam.com
                                            </a>
                                            <span style={{fontSize: 12}}>&nbsp;*&nbsp;</span>
                                            <a
                                                className="link"
                                                style={{
                                                    margin: 0,
                                                    padding: 0,
                                                    fontSize: 12,
                                                    color: "black"
                                                }}
                                                href="https://www.furamavietnam.com/undefined/"
                                            >
                                                www.furamavietnam.com
                                            </a>
                                            <span style={{fontSize: 12}}>
                  GDS Codes: Amadeus-GD DADFUR, Galileo/Apollo-GD 16236,
                  Sabre-GD 032771, Worldspan- GD DADFU
                </span>
                                            <hr/>
                                            <a
                                                href="https://www.facebook.com/furamaresort/"
                                                target="_blank"
                                                rel="noopener"
                                            >
                                                <img
                                                    style={{width: 32, height: 32, float: "left"}}
                                                    src="https://furamavietnam.com/wp-content/uploads/2019/06/incon-Facbook-1.png"
                                                    alt=""
                                                    width={32}
                                                    height={32}
                                                />
                                            </a>
                                            <a
                                                href="https://www.instagram.com/furama_resort_danang/?hl=vi"
                                                target="_blank"
                                                rel="noopener"
                                            >
                                                <img
                                                    style={{width: 40, height: 32, float: "left"}}
                                                    src="https://furamavietnam.com/wp-content/uploads/2019/06/social-ins.png"
                                                    alt=""
                                                    width={40}
                                                    height={32}
                                                />
                                            </a>
                                            <a
                                                href="https://www.youtube.com/user/furamaresortvietnam/featured"
                                                target="_blank"
                                                rel="noopener"
                                            >
                                                <img
                                                    style={{width: 40, height: 32, float: "left"}}
                                                    src="https://furamavietnam.com/wp-content/uploads/2021/10/social-youtube.png"
                                                    alt=""
                                                    width={40}
                                                    height={32}
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row mt-5 mb-1 mt-lg-auto mb-md-0 align-items-center">
                                <div className="col-sm-auto col-lg-12 col-xl-auto">
                                    <div className="footer-copyright text-left">
                                        <img
                                            src="https://furamavietnam.com/wp-content/uploads/2023/03/Ariyana-Tourism-Complex-02-500x131.png"
                                            alt="Ariyana Tourism Complex"
                                            width="500px;"
                                        />
                                        <div className="clearfix d-md-none"/>
                                        © 2018 Furama Resort Danang.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}