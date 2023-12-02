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
                    <div className="text-center paths">
                        {<Link to="/">خانه</Link>} /<span className="text-muted"> تماس با ما</span>
                    </div>
                </div>
            </header>
            <main className="bg-white py-4 border-bottom">
                <div className="form-container container d-flex flex-column flex-md-row">
                    <form className="ms-md-3 col-12 col-md-6">
                        <div>
                            <p>اطلاعات درباره ما</p>
                            <h4 className="fw-bold fs-5">برای سوالات خود با ما تماس بگیرید</h4>
                        </div>
                        <div className="d-flex flex-column flex-md-row gap-2">
                            <div className="col-12 col-md-6">
                                <div>
                                    <label htmlFor="userName">نام شما</label>
                                </div>
                                <input className="w-100 px-2 py-1 my-2 border rounded-2 input-font" type="text"
                                       id="userName" required={true}/>
                            </div>
                            <div className="col-12 col-md-6">
                                <div>
                                    <label htmlFor="userEmail">ایمیل شما</label>
                                </div>
                                <input className="w-100 px-2 py-1 my-2 border rounded-2 input-font" type="email"
                                       id="userEmail" required={true}/>
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-md-row gap-2">
                            <div className="col-12 col-md-6">
                                <div>
                                    <label htmlFor="userNumber">شماره تلفن</label>
                                </div>
                                <input className="w-100 px-2 py-1 my-2 border rounded-2 input-font" type="number"
                                       id="userNumber" required={true}/>
                            </div>
                            <div className="col-12 col-md-6">
                                <div>
                                    <label htmlFor="userCompany">کمپانی</label>
                                </div>
                                <input className="w-100 px-2 py-1 my-2 border rounded-2 input-font" type="text"
                                       id="userCompany" required={false}/>
                            </div>
                        </div>
                        <div className="d-flex flex-column">
                            <div className="col-12">
                                <div>
                                    <label htmlFor="userWebsite">آدرس وب سایت</label>
                                </div>
                                <input className="w-100 px-2 py-1 my-2 border rounded-2 input-font" type="text"
                                       id="userWebsite"/>
                            </div>
                            <div className="col-12">
                                <div>
                                    <label htmlFor="userMessage">پیام شما</label>
                                </div>
                                <textarea className="w-100 px-2 py-1 my-2 border rounded-2 input-font"
                                          id="userMessage"/>
                            </div>
                        </div>
                        <div className="my-2">
                            <button class="btn bg-secondary-subtle">ارسال</button>
                        </div>
                    </form>
                    <div className="me-md-3 col-12 col-md-6">
                        <div className="questions-container">
                            <div>
                                <p>اطلاعات و سوالات</p>
                                <h4 className="fw-bold fs-5">سوالات متداول</h4>
                            </div>
                            <div className="questions">
                                <div onClick={e => {
                                    e.currentTarget.firstChild.lastChild.classList.toggle("x-icon")
                                }}
                                     className="question border-bottom p-2">
                                    <a className="d-inline-block d-flex justify-content-between"
                                       data-bs-toggle="collapse" href="#collapse1"
                                       aria-expanded="false" aria-controls="collapseExample">
                                        <span>چگونه می‌توان با پشتیبانی فروشگاه تماس برقرار کرد؟</span>
                                        <i className="fa-solid fa-plus d-flex align-items-center"></i>
                                    </a>
                                    <div className="collapse" id="collapse1">
                                        <div className="border-top p-2 pb-0 my-2">
                                            <p>برای تماس با پشتیبانی فروشگاه، می‌توانید از طریق صفحه تماس با ما یا شماره
                                                تلفن درج شده در سایت، با تیم پشتیبانی تماس بگیرید.</p>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={e => {
                                    e.currentTarget.firstChild.lastChild.classList.toggle("x-icon")
                                }}
                                     className="question border-bottom p-2">
                                    <a className="d-inline-block d-flex justify-content-between"
                                       data-bs-toggle="collapse" href="#collapse2"
                                       aria-expanded="false" aria-controls="collapseExample">
                                        <span>
                                        راه های ارتباطی ما
                                        </span>
                                        <i className="fa-solid fa-plus d-flex align-items-center"></i>
                                    </a>
                                    <div class="collapse" id="collapse2">
                                        <div class="border-top p-2 pb-0 my-2">
                                            <p>شماره تلفن : <a href="tel:09120000000">09120000000</a></p>
                                            <p>ایمیل :<a href="mailto:something@example.com"> example@something.com</a>
                                            </p>
                                            <p className="mb-0">آدرس : تهران، خیابان ولیعصر، پلاک 100</p>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={e => {
                                    e.currentTarget.firstChild.lastChild.classList.toggle("x-icon")
                                }}
                                     className="question border-bottom p-2">
                                    <a className="d-inline-block d-flex justify-content-between"
                                       data-bs-toggle="collapse" href="#collapse3"
                                       aria-expanded="false" aria-controls="collapseExample">
                                        <span>چگونه می‌توان وضعیت سفارش را پیگیری کرد؟</span>
                                        <i className="fa-solid fa-plus d-flex align-items-center"></i>
                                    </a>
                                    <div className="collapse" id="collapse3">
                                        <div className="border-top p-2 pb-0 my-2">
                                            <p>برای پیگیری وضعیت سفارش، می‌توانید وارد حساب کاربری خود شده و از قسمت
                                                وضعیت سفارش یا تاریخچه سفارش‌ها، وضعیت فعلی سفارش خود را مشاهده
                                                کنید.</p>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={e => {
                                    e.currentTarget.firstChild.lastChild.classList.toggle("x-icon")
                                }}
                                     className="question border-bottom p-2">
                                    <a className="d-inline-block d-flex justify-content-between"
                                       data-bs-toggle="collapse" href="#collapse4"
                                       aria-expanded="false" aria-controls="collapseExample">
                                        <span>آیا امکان بازگشت کالا و استرداد وجه وجود دارد؟</span>
                                        <i className="fa-solid fa-plus d-flex align-items-center"></i>
                                    </a>
                                    <div className="collapse" id="collapse4">
                                        <div className="border-top p-2 pb-0 my-2">
                                            <p>بله، فروشگاه قوانین بازگشت کالا و استرداد وجه را دارد. شما می‌توانید با
                                                مطالعه شرایط بازگشت کالا در صفحه مربوطه، اقدام به بازگشت کالا و درخواست
                                                استرداد وجه کنید.</p>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={e => {
                                    e.currentTarget.firstChild.lastChild.classList.toggle("x-icon")
                                }}
                                     className="question border-bottom p-2">
                                    <a className="d-inline-block d-flex justify-content-between"
                                       data-bs-toggle="collapse" href="#collapse5"
                                       aria-expanded="false" aria-controls="collapseExample">
                                        <span>سیاست حریم خصوصی مشتریان شما چگونه است؟</span>
                                        <i className="fa-solid fa-plus d-flex align-items-center"></i>
                                    </a>
                                    <div className="collapse" id="collapse5">
                                        <div className="border-top p-2 pb-0 my-2">
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
            </main>
            <Footer/>
        </div>

    )
}

export default ContactUs;