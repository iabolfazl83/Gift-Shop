import React from "react";
import {MobileToolbar, Navbar, Footer} from "./index";

function GiftShopMag() {

    return (<div>
        <Navbar/>
        <MobileToolbar/>
        <div className="gift-mag-wrapper">
            <div className="gift-mag-container my-4">
                <div
                    className="d-flex flex-column flex-wrap flex-sm-row gap-sm-4 justify-content-center container-xs container">
                    <div className="mag-article-wrapper bg-white mx-auto my-2 my-sm-0 col-10 mx-sm-0 col-sm-5 col-md-4 col-lg-3">
                        <article className="mag-article">
                            <div className="article-image col  ">
                                <a href="">
                                    <img className="w-100 h-100  "
                                         src={require("../assets/images/article-1.jpg")}
                                         alt="article image"/>
                                </a>
                            </div>
                            <div className="article-caption col px-2 pb-3 d-flex flex-column justify-content-around">
                                <div className="caption-header text-center">
                                    <a href="">
                                        <h3 onMouseEnter={
                                            (e) => {
                                                e.currentTarget.title = e.currentTarget.innerHTML
                                            }
                                        }>هشت ایده جالب کادو پیچی </h3>
                                    </a>
                                </div>
                                <div className="caption-text">
                                    <p>به طور کلی می توان گفت یکی از اقداماتی که نما و جلوه ظاهری هدیه را جذاب تر و
                                        زیباتر
                                        می کند نحوه کادوپیچ کردن و تزیین آن است که نشان دهنده سلیقه شما و ارزشمندی
                                        فرد
                                        مقابل
                                        است، مطمئنا تزیین هدیه تولد، تزیین هدیه ولنتاین، روز مادر و پدر و… برای همه
                                        اهمیت
                                        دارد </p>
                                </div>
                                <div className="more-info text-center">
                                    <a href="">ادامه مطلب...</a>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="mag-article-wrapper bg-white mx-auto my-2 my-sm-0 col-10 mx-sm-0 col-sm-5 col-md-4 col-lg-3 ">
                        <article className="mag-article">
                            <div className="article-image col  ">
                                <a href="">
                                    <img className="w-100 h-100  "
                                         src={require("../assets/images/article-2.jpg")}
                                         alt="article image"/>
                                </a>
                            </div>
                            <div className="article-caption col px-2 pb-3 d-flex flex-column justify-content-around">
                                <div className="caption-header text-center">
                                    <a href="">
                                        <h3 onMouseEnter={
                                            (e) => {
                                                e.currentTarget.title = e.currentTarget.innerHTML
                                            }
                                        }>اثر رنگ ها | روانشناسی رنگ ها </h3></a>
                                </div>
                                <div className="caption-text">
                                    <p>حس بینایی، همواره برای کسب اطلاعات درباره جهان پیرامون قوی‌ترین حس انسان به
                                        شمار
                                        می‌رود. رنگ ها در زندگی همه افراد حضور فعال و مؤثری دارند و به همین جهت از
                                        مهم‌ترین
                                        عناصر دیداری به حساب می‌آیند که دارای بار احساسی و عاطفی هستند. رنگ ها سبب
                                        می‌شوند
                                        تا بتوانید به درک محیط، کسب اطلاعات و جهت یابی بپردازید و با محیط پیرامون
                                        ارتباط
                                        بیشتری برقرار کنید.</p>
                                </div>
                                <div className="more-info text-center">
                                    <a href="">ادامه مطلب...</a>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="mag-article-wrapper bg-white mx-auto my-2 my-sm-0 col-10 mx-sm-0 col-sm-5 col-md-4 col-lg-3 ">
                        <article className="mag-article">
                            <div className="article-image col  ">
                                <a href="">
                                    <img className="w-100 h-100  "
                                         src={require("../assets/images/article-3.jpg")}
                                         alt="article image"/>
                                </a>
                            </div>
                            <div className="article-caption col px-2 pb-3 d-flex flex-column justify-content-around">
                                <div className="caption-header text-center">
                                    <a href="">
                                        <h3 onMouseEnter={
                                            (e) => {
                                                e.currentTarget.title = e.currentTarget.innerHTML
                                            }
                                        }>20 نکته مهم برای اینکه جشن تولد خیلی خوش بگذره </h3>
                                    </a>
                                </div>
                                <div className="caption-text">
                                    <p>اگر به جشن تولد می روید خوش اخلاق باشید و در مراسم با یکدیگر شوخی کنید، آواز
                                        بخوانید
                                        و کمک کنید که مراسم به بهترین نحو ممکن برگزار شود.</p>
                                </div>
                                <div className="more-info text-center">
                                    <a href="">ادامه مطلب...</a>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="mag-article-wrapper bg-white mx-auto my-2 my-sm-0 col-10 mx-sm-0 col-sm-5 col-md-4 col-lg-3 ">
                        <article className="mag-article">
                            <div className="article-image col  ">
                                <a href="">
                                    <img className="w-100 h-100  "
                                         src={require("../assets/images/article-4.jpg")}
                                         alt="article image"/>
                                </a>
                            </div>
                            <div className="article-caption col px-2 pb-3 d-flex flex-column justify-content-around">
                                <div className="caption-header text-center">
                                    <a href="">
                                        <h3 onMouseEnter={
                                            (e) => {
                                                e.currentTarget.title = e.currentTarget.innerHTML
                                            }
                                        }> آداب معاشرت در هدیه دادن!! </h3>
                                    </a>
                                </div>
                                <div className="caption-text">
                                    <p>همه ما در طول روز در حال برقراری ارتباط و معاشرت با اطرافیان‌مان هستیم. به
                                        همین
                                        دلیل
                                        باید با آداب و اصول رفتاری صحیح آشنا شویم. در این مقاله به معرفی اصول هدیه
                                        دادن
                                        و
                                        هدیه گرفتن پرداخته‌‌ایم.</p>
                                </div>
                                <div className="more-info text-center">
                                    <a href="">ادامه مطلب...</a>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div className="mag-article-wrapper bg-white mx-auto my-2 my-sm-0 col-10 mx-sm-0 col-sm-5 col-md-4 col-lg-3 ">
                        <article className="mag-article">
                            <div className="article-image col  ">
                                <a href="">
                                    <img className="w-100 h-100  "
                                         src={require("../assets/images/gift-idea.jpg")}
                                         alt="article image"/>
                                </a>
                            </div>
                            <div className="article-caption col px-2 pb-3 d-flex flex-column justify-content-around">
                                <div className="caption-header text-center">
                                    <a href="">
                                        <h3 onMouseEnter={
                                            (e) => {
                                                e.currentTarget.title = e.currentTarget.innerHTML
                                            }
                                        }>چطور یک هدیه‌ی خاص برای خانم‌ها بخریم؟</h3>
                                    </a>
                                </div>
                                <div className="caption-text">
                                    <p>این مقاله به بررسی ایده‌های هدیه برای خانم‌ها می‌پردازد. در این مقاله می‌توانید
                                        درباره چگونگی انتخاب هدیه مناسب برای خانم‌ها، زمان مناسب برای هدیه دادن و چگونگی
                                        هدیه دادن به خانم‌ها بیاموزید.</p>
                                </div>
                                <div className="more-info text-center">
                                    <a href="">ادامه مطلب...</a>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div className="mag-article-wrapper bg-white mx-auto my-2 my-sm-0 col-10 mx-sm-0 col-sm-5 col-md-4 col-lg-3 ">
                        <article className="mag-article">
                            <div className="article-image col  ">
                                <a href="">
                                    <img className="w-100 h-100  "
                                         src={require("../assets/images/woman-gift.jpg")}
                                         alt="article image"/>
                                </a>
                            </div>
                            <div className="article-caption col px-2 pb-3 d-flex flex-column justify-content-around">
                                <div className="caption-header text-center">
                                    <a href="">
                                        <h3 onMouseEnter={
                                            (e) => {
                                                e.currentTarget.title = e.currentTarget.innerHTML
                                            }
                                        }> پیشنهاد هدیه برای خانم‌ها که حتما خوشحال‌شان می‌کند </h3>
                                    </a>
                                </div>
                                <div className="caption-text">
                                    <p>این مقاله 14 پیشنهاد هدیه برای خانم‌ها را معرفی می‌کند که حتما خوشحال‌شان
                                        می‌کند</p>
                                </div>
                                <div className="more-info text-center">
                                    <a href="">ادامه مطلب...</a>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div className="mag-article-wrapper bg-white mx-auto my-2 my-sm-0 col-10 mx-sm-0 col-sm-5 col-md-4 col-lg-3 ">
                        <article className="mag-article">
                            <div className="article-image col  ">
                                <a href="">
                                    <img className="w-100 h-100  "
                                         src={require("../assets/images/gift.jpg")}
                                         alt="article image"/>
                                </a>
                            </div>
                            <div className="article-caption col px-2 pb-3 d-flex flex-column justify-content-around">
                                <div className="caption-header text-center">
                                    <a href="">
                                        <h3 onMouseEnter={
                                            (e) => {
                                                e.currentTarget.title = e.currentTarget.innerHTML
                                            }
                                        }> ۸ پیشنهاد‌ خرید هدیه برای آقایان در مناسبت‌های خاص</h3>
                                    </a>
                                </div>
                                <div className="caption-text">
                                    <p>ما در این مطلب به مواردی پرداخته‌ایم که می‌تواند به شما کمک کند تا انتخاب بهتری داشته باشید. بنابراین، اگر در خرید هدیه برای آقایان دچار تردید یا استرس هستید، قبل از این‌که تصمیم به خرید بگیرید حتما این مقاله را بخوانید!</p>
                                </div>
                                <div className="more-info text-center">
                                    <a href="">ادامه مطلب...</a>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div className="mag-article-wrapper bg-white mx-auto my-2 my-sm-0 col-10 mx-sm-0 col-sm-5 col-md-4 col-lg-3 ">
                        <article className="mag-article">
                            <div className="article-image col  ">
                                <a href="">
                                    <img className="w-100 h-100  "
                                         src={require("../assets/images/R.jpg")}
                                         alt="article image"/>
                                </a>
                            </div>
                            <div className="article-caption col px-2 pb-3 d-flex flex-column justify-content-around">
                                <div className="caption-header text-center">
                                    <a href="">
                                        <h3 onMouseEnter={
                                            (e) => {
                                                e.currentTarget.title = e.currentTarget.innerHTML
                                            }
                                        }>راهنمای خرید هدیه در روز ولنتاین: چگونه هدیه مناسبی برای عزیزان خود انتخاب کنیم</h3>
                                    </a>
                                </div>
                                <div className="caption-text">
                                    <p>با توجه به نزدیک شدن روز ولنتاین، خرید هدیه برای عزیزان خود می‌تواند یکی از دغدغه‌های شما باشد. در این خبر، به شما چندین پیشنهاد برای خرید هدیه مناسب در روز ولنتاین می‌دهیم</p>
                                </div>
                                <div className="more-info text-center">
                                    <a href="">ادامه مطلب...</a>
                                </div>
                            </div>
                        </article>
                    </div>

                </div>
            </div>
        </div>
        <Footer/>
    </div>)
}


export default GiftShopMag;