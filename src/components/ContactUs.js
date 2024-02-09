import React from "react";
import {Navbar, Footer, MobileToolbar} from "./index";
import {Link} from "react-router-dom";

function ContactUs() {
    return (
        <div>
            <Navbar/>
            <MobileToolbar/>
            <header className="contact-us-header d-flex flex-column py-3">
                <div>
                    <h1 className="text-center mb-4 fw-bolder">تماس با ما</h1>
                </div>
                <div>
                    <div className="text-center fs-11">
                        {<Link to="/">خانه</Link>} /<span className="text-muted"> تماس با ما</span>
                    </div>
                </div>
            </header>
            <main className="bg-white py-4">
                <div className="form-container container d-flex flex-column flex-md-row">
                    <form className="ms-md-3 col-12 col-md-6">
                        <div>
                            <p>اطلاعات درباره ما</p>
                            <h4 className="fw-bold fs-5">برای سوالات خود با ما تماس بگیرید</h4>
                        </div>
                        <div className="d-flex flex-column flex-md-row gap-2">
                            <div className="col-12 col-md-6">
                                <div>
                                    <label className="fs-14" htmlFor="userName">نام شما</label>
                                </div>
                                <input className="w-100 px-2 py-1 my-2 border rounded-2 input-font" type="text"
                                       id="userName" required={true}/>
                            </div>
                            <div className="col-12 col-md-6">
                                <div>
                                    <label className="fs-14" htmlFor="userEmail">ایمیل شما</label>
                                </div>
                                <input className="w-100 px-2 py-1 my-2 border rounded-2 input-font" type="email"
                                       id="userEmail" required={true}/>
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-md-row gap-2">
                            <div className="col-12 col-md-6">
                                <div>
                                    <label className="fs-14" htmlFor="userNumber">شماره تلفن</label>
                                </div>
                                <input className="w-100 px-2 py-1 my-2 border rounded-2 input-font" type="number"
                                       id="userNumber" required={true}/>
                            </div>
                            <div className="col-12 col-md-6">
                                <div>
                                    <label className="fs-14" htmlFor="userCompany">کمپانی</label>
                                </div>
                                <input className="w-100 px-2 py-1 my-2 border rounded-2 input-font" type="text"
                                       id="userCompany" required={false}/>
                            </div>
                        </div>
                        <div className="d-flex flex-column">
                            <div className="col-12">
                                <div>
                                    <label className="fs-14" htmlFor="userWebsite">آدرس وب سایت</label>
                                </div>
                                <input className="w-100 px-2 py-1 my-2 border rounded-2 input-font" type="text"
                                       id="userWebsite"/>
                            </div>
                            <div className="col-12">
                                <div>
                                    <label className="fs-14" htmlFor="userMessage">پیام شما</label>
                                </div>
                                <textarea className="w-100 px-2 py-1 my-2 border rounded-2 input-font"
                                          id="userMessage"/>
                            </div>
                        </div>
                        <div className="my-2">
                            <button className="btn bg-secondary-subtle">ارسال</button>
                        </div>
                    </form>
                    <div className="me-md-3 col-12 col-md-6">
                        <div className="questions-container">
                            <div>
                                <p>اطلاعات و سوالات</p>
                                <h4 className="fw-bold fs-5">سوالات متداول</h4>
                            </div>
                            <div className="questions">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne" aria-expanded="true"
                                                    aria-controls="collapseOne">
                                                <span>چگونه می‌توان با پشتیبانی فروشگاه تماس برقرار کرد؟</span>
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show"
                                             aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>برای تماس با پشتیبانی فروشگاه، می‌توانید از طریق صفحه تماس با ما یا
                                                    شماره
                                                    تلفن درج شده در سایت، با تیم پشتیبانی تماس بگیرید.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                    aria-expanded="false" aria-controls="collapseTwo">
                                                <span>راه های ارتباطی ما</span>
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse"
                                             aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>شماره تلفن : <a href="tel:09120000000">09120000000</a></p>
                                                <p>ایمیل :<a
                                                    href="mailto:something@example.com"> example@something.com</a>
                                                </p>
                                                <p className="mb-0">آدرس : تهران، خیابان ولیعصر، پلاک 100</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                    aria-expanded="false" aria-controls="collapseThree">
                                                <span>چگونه می‌توان وضعیت سفارش را پیگیری کرد؟</span>
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse"
                                             aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>برای پیگیری وضعیت سفارش، می‌توانید وارد حساب کاربری خود شده و از قسمت
                                                    وضعیت سفارش یا تاریخچه سفارش‌ها، وضعیت فعلی سفارش خود را مشاهده
                                                    کنید.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                    aria-expanded="false" aria-controls="collapseFour">
                                                <span>آیا امکان بازگشت کالا و استرداد وجه وجود دارد؟</span>
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse"
                                             aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>بله، فروشگاه قوانین بازگشت کالا و استرداد وجه را دارد. شما می‌توانید
                                                    با
                                                    مطالعه شرایط بازگشت کالا در صفحه مربوطه، اقدام به بازگشت کالا و
                                                    درخواست
                                                    استرداد وجه کنید.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFive">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                    aria-expanded="false" aria-controls="collapseFive">
                                                <span>سیاست حریم خصوصی مشتریان شما چگونه است؟</span>
                                            </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse"
                                             aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>حریم خصوصی مشتریان برای ما بسیار مهم است. ما اطلاعات شخصی مشتریان را
                                                    محافظت می‌کنیم و از آن‌ها صرفاً برای پردازش سفارشات و بهبود خدمات
                                                    استفاده می‌کنیم. ما هیچگونه اطلاعاتی را به شخص یا سازمان دیگری منتقل
                                                    نمی‌کنیم.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>

    )
}

export default ContactUs;