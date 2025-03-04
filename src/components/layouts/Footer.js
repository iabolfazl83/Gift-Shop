import React from "react";

function Footer() {
    return (
        <footer className="footer border-top">
            <div
                className="footer-header w-100 d-flex flex-column-reverse flex-md-row gap-3 justify-content-between align-items-center pt-4 container">
                <div
                    className="footer-support-info col-5 d-flex flex-column flex-md-row align-items-md-center text-center col-12 col-md-auto">
                    <p className="px-md-2 m-md-0">تلفن پشتیبانی ۰۰۰۰۰۰۰ - ۰۲۱</p>
                    <p className="px-md-2 m-md-0">۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم.</p>
                </div>
                <div className="go-up-btn-container">
                    <a href="#">
                        <button className="btn go-up-btn p-2 d-flex flex-row gap-2 border align-items-center rounded-3">
                            برگشت به بالا<i className="fa-solid fa-angle-up"></i>
                        </button>
                    </a>
                </div>
            </div>
            <div className="container">
                <div
                    className="subscription-container container d-flex flex-column align-items-center rounded-4 p-3 my-3 my-md-5">
                    <div
                        className="w-100 d-flex flex-column flex-md-row justify-content-md-between gap-md-4 align-items-center">
                        <div className="subscription-header"><p className="text-center m-md-0">از جدیدترین تخفیف ها با
                            خبر
                            شوید</p>
                        </div>
                        <div
                            className="subscription-input col-md-6 bg-white p-1 my-2 rounded-3 d-flex justify-content-around">
                            <input className="border-0 ps-3 pe-2 w-100" type="email" placeholder="ایمیل شما"/>
                            <a href="" className="btn d-inline-block px-3 text-white">ثبت</a>
                        </div>
                        <div className="social-links d-flex justify-content-around mt-3 mt-md-0 gap-md-3 gap-5">
                            <div><a href=""><i className="fa-brands fa-instagram"></i></a></div>
                            <div><a href=""><i className="fa-brands fa-x-twitter"></i></a></div>
                            <div><a href=""><i className="fa-brands fa-linkedin"></i></a></div>
                            <div><a href=""><i className="fa-brands fa-telegram"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-nav-container container d-flex flex-column flex-md-row">
                <div className="footer-nav-list-1 container">
                    <h5>با گیفت شاپ</h5>
                    <p><a href="">فروش در گیفت شاپ</a></p>
                    <p><a href="">گزارش تخلف در گیفت شاپ</a></p>
                    <p><a href="">تماس با گیفت شاپ</a></p>
                    <p><a href="">درباره گیفت شاپ</a></p>
                </div>

                <div className="footer-nav-list-2 container">
                    <h5>خدمات مشتریان</h5>
                    <p><a href="">پاسخ به پرسش‌های متداول</a></p>
                    <p><a href="">رویه‌های بازگرداندن کالا</a></p>
                    <p><a href="">شرایط استفاده</a></p>
                    <p><a href="">حریم خصوصی</a></p>
                    <p><a href="">گزارش باگ</a></p>
                </div>

                <div className="footer-nav-list-3 container">
                    <h5>راهنمای خرید از گیفت شاپ</h5>
                    <p><a href="">نحوه ثبت سفارش</a></p>
                    <p><a href="">رویه ارسال سفارش</a></p>
                    <p><a href="">شیوه‌های پرداخت</a></p>
                </div>
            </div>
            <div className="footer-shop-verification border-top text-center container d-flex flex-column flex-lg-row justify-content-lg-between align-items-lg-center">
                <div className="verification-header">
                    <h5>اعتماد شما افتخار ماست</h5>
                    <p>نماد های زیر تست بوده و فاقد اعتبار میباشند</p>
                </div>
                <div className="verification-logos d-flex justify-content-center">
                    <div className="verification-log">
                        <img className="w-75 auto py-lg-3" src={require("../../assets/images/enamad.png")} alt="enamad"/>
                    </div>
                    <div className="verification-log">
                        <img className="w-75 auto py-lg-3" src={require("../../assets/images/samandehi.png")} alt="samandehi"/>
                    </div>
                </div>
            </div>

            <div className="copywrite-rights text-center border-top mt-3 p-3 container">
                <div
                    className="d-flex flex-column justify-content-center align-items-center flex-lg-row justify-content-lg-between">
                    <p className="mb-lg-0">کلیه حقوق این وبسایت متعلق به گروه تجاری گیفت شاپ می باشد.</p>
                    <div className="bank-logos col-md-4">
                        <img className="w-100" src={require("../../assets/images/897987.png")} alt="bank logos"/>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;