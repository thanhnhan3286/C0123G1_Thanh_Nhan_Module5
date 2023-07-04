export function CreateProduct() {
    return (
        <>
            <div
                className="container boxed"
                style={{marginTop: "2%", width: 600, height: "auto"}}
            >
                <h2 style={{textAlign: "center", marginTop: 20}}>Thêm mới khách hàng</h2>
                <div
                    id="form"
                    className="form"
                    style={{marginLeft: "10%", marginRight: "10%"}}
                >
                    <form>
                        <div className="input-group input-group-sm mg" style={{marginTop: 30}}>
                            <div className="input-group-prepend">
                                <span className="input-group-text">Họ tên</span>
                            </div>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <ErrorMessage name="name" component="span" className="error-mess m-lg-3"/>

                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Ngày sinh</span>
                            </div>
                            <Field
                                type="date"
                                name="birthday"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <ErrorMessage name="birthday" component="span" className="error-mess m-lg-3"/>

                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Giới tính</span>
                            </div>
                            <Field
                                as="select"
                                name="gender"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            >
                                <option value={0}>--Chọn giới tính--</option>
                                {
                                    gender.map((g, index) => (
                                            <option key={index} value={g.id}>{g.gender}</option>
                                        )
                                    )
                                }
                            </Field>
                        </div>
                        <ErrorMessage name="gender" component="span" className="error-mess m-lg-3"/>

                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Số CMND</span>
                            </div>
                            <Field
                                type="text"
                                name="cmnd"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <ErrorMessage name="cmnd" component="span" className="error-mess m-lg-3"/>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Số điện thoại</span>
                            </div>
                            <Field
                                type="text"
                                name="phone"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <ErrorMessage name="phone" component="span" className="error-mess m-lg-3"/>
                        <p style={{color: "red"}}/>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Email</span>
                            </div>
                            <Field
                                type="text"
                                name="email"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <ErrorMessage name="email" component="span" className="error-mess m-lg-3"/>
                        <p style={{color: "red"}}/>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Loại khách</span>
                            </div>
                            <Field
                                as="select"
                                name="customerType"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            >
                                <option value={0}>--Chọn loại khách--</option>
                                {
                                    customerTypes.map((ct, index) => (
                                            <option key={index} value={ct.id}>{ct.name}</option>
                                        )
                                    )
                                }
                            </Field>
                        </div>
                        <ErrorMessage name="customerType" component="span" className="error-mess m-lg-3"/>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Địa chỉ</span>
                            </div>
                            <Field
                                type="text"
                                name="address"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <ErrorMessage name="address" component="span" className="error-mess m-lg-3"/>
                        <p style={{color: "red"}}/>
                        <br/>
                        <div className="mb-4 text-center">
                            {
                                isSubmitting ? <ThreeDots visible={true}/> :
                                    <button type="submit" className="btn btn-success">
                                        Thêm mới
                                    </button>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}