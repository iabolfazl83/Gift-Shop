import React from "react";
import {Footer, MobileToolbar, Navbar} from "./index";
import {Link} from "react-router-dom";

function ArticlePage() {
    return (
        <div>
            <Navbar/>
            <MobileToolbar/>
            <div className="position-relative">
                <header className="d-flex flex-column py-3">
                    <div>
                        <h1 className="text-center mb-4 fw-bolder">مجله گیفت‌شاپ</h1>
                    </div>
                    <div>
                        <div className="text-center fs-11">
                            {<Link to="/">خانه</Link>} / <span className="text-muted">مجله گیفت‌شاپ</span>
                        </div>
                    </div>
                </header>
                <div
                    className="d-flex flex-column flex-md-row gap-4 justify-content-between position-relative container my-4">
                    <main className="col-12 col-md bg-white rounded-2 border">
                        <article>
                            <div className="article-image-container container my-4">
                                <div>
                                    <img className="w-100" src={require("../assets/images/article-3.jpg")} alt=""/>
                                </div>
                            </div>
                            <div className="title-container container my-4">
                                <div className="article-title my-3">
                                    <h1 className="fs-17 lh-md fw-bolder">20 نکته مهم برای اینکه جشن تولد خیلی خوش
                                        بگذره</h1>
                                </div>
                                <div
                                    className="article-author d-flex justify-content-between align-items-center">
                                    <div className="d-flex gap-2 fs-11 align-items-center">
                                        <div className="author-profile">
                                            <img className="author-profile-photo"
                                                 src={require("../assets/images/gift-shop-logo-design-love-gift-symbol-icon-gift-logo-design-template_657888-116-removebg.png")}
                                                 alt=""/></div>
                                        <div className="author-name">گیفت شاپ</div>
                                    </div>
                                    <div className="article-date d-flex fs-11 gap-1">
                                        <div><i className="fa-regular fa-clock"></i></div>
                                        <div className="d-flex gap-1">
                                            <div>30</div>
                                            <div>آذر</div>
                                            <div>1402</div>
                                        </div>
                                        <div className="border-end px-2">22:57</div>
                                    </div>
                                </div>
                            </div>
                            <div className="article-content container fs-15 lh-lg">
                                <p>اگر به جشن تولد می روید خوش اخلاق باشید و در مراسم با یکدیگر شوخی
                                    کنید، آواز بخوانید و
                                    کمک کنید که مراسم به بهترین نحو ممکن برگزار شود.</p>
                                <h3>چه کار کنیم که در جشن تولد خیلی خوش بگذره ؟</h3>
                                <p>برای برگزاری هر چه بهتر جشن تولد و ایجاد یک فضای شاد و لذت بخش در تولد ، مهمانان و
                                    میزبان
                                    نکاتی را باید رعایت نمایند تا جشن به خوبی و خوشی برگزار شود . در این بخش از نم نمک
                                    راه
                                    کارهایی را به شما آموزش می دهیم که با استفاده از آن می توانید جشن شاد و زیبایی داشته
                                    باشید تا به همه خوش بگذرد.</p>
                                <h3>کی و چه زمانی جشن تولد بگیریم؟</h3>
                                <p>بهترین زمان گرفتن جشن تولد روزهای چهارشنبه و یا پنجشنبه است که بچه ها روز بعد تعطیل
                                    هستند
                                    و به مدرسه نمی روند . گرفتن جشن تولد در شب جمعه اصلا خوب نیست چرا که ممکن است تا دیر
                                    وقت
                                    ادامه یابد و بچه ها صبح شنبه را با خستگی آغاز نمایند.</p>
                                <p>همچنین معمولا جشن تولدها در شب برگزار می شود و فقط یک سری تولدهای کودکانه که بچه های
                                    مهدکودک را دعوت می کنند ، در بعد از ظهر برگزار می شود.</p>
                                <h3>چه جوری برویم جشن تولد؟</h3>
                                <p>اگر به جشن تولد دعوتید ، آقایان کت شلوار و خانم ها لباس شب و ماکسی نپوشند و لباسی
                                    برتن
                                    کنند که حالت اسپرت داشته باشد و راحت باشد تا اگر برف شادی بررویشان ریخت ناراحت
                                    نشوند.</p>
                                <p>حتما قبل از شرکت در جشن تولد ضدعرق استفاده کنید ، چون معمولا جنب و جوش در چنین مراسمی
                                    زیاد است. یک ساعت زودتر آماده شوید و راه بیافتید تا در ترافیک نمانید و اگر مراسم
                                    تولدتان
                                    بعد از شام است یک چیز سبک بخورید که جا برای خوردن کیک داشته باشید.</p>
                                <h3>برای جشن تولد چی بگیریم؟</h3>
                                <p>اگر می خواهید برای کسی که به جشن تولدش دعوت هستید هدیه تهیه کنید ، به سن و جنس و نسبت
                                    فامیلی اش با خودتان توجه نمایید. اگر تولد بچه ها می روید ، برای باقی بچه های احتمالی
                                    هم
                                    هدیه های کوچک بگیرید که مجلس را روی سرشان نگذارند.</p>
                                <p>هرگز پول به جای کادو ندهید زیرا این را می رساند که شما کمترین فکری برای خرید هدیه
                                    نکرده
                                    اید پس حداقل یک کارت هدیه دهید . اگر تولد یک پسر بچه می روید برای خودش هدیه بگیرد نه
                                    اینکه وسایل خانه کادو ببرید.</p>
                                <h3>حال و هوای جشن تولد را بدانید</h3>
                                <p>حتما قبل از رفتن به تولد آماری از شرکت کنندگان در تولد بگیرید تا بفهمید آنان چه
                                    شخصیتی
                                    دارند زیرا فضا در برخی تولد ها بسیار سنگین است و اگر شما با کلاه بوقی وارد مجلس شوید
                                    ،
                                    خودتان را مسخره عالم و آدم کرده اید.</p>
                                <h3>رعایت کنید</h3>
                                <p>اگر همه افراد حاضر در تولد جوان بودند و هم سن و سال خودتان ، می توانید سرو صدا کنید و
                                    ولوم ضبط را بالا ببرید اما اگر در این مراسم پیرمرد و پیرزنی حضور داشتند که خیلی
                                    اعصاب سر
                                    و صدا نداشتند ، آنقدر شلوغ نکنید تا طرف شاکی شود و چیزی به شما بگوید.</p>
                                <h3>با جمع باشید</h3>
                                <p>خودتان را درگیر شلوغی جمع کنید و شلوغ بازی هم دربیاورید. گوشه گیری نکنید ، در جمع شاد
                                    شرکت کنید و شاد و شنگول باشید چرا که تولد است و باید شاد بود و شلوغ کرد.</p>
                                <h3>در جشن تولد موبایل را خاموش کنید</h3>
                                <p>موبایلتان را خاموش کنید و از سر و کله زدن با بچه های کوچک لذت ببرید. باور کنید با
                                    خاموش
                                    کردن موبایلتان و چند ساعت بی خیال دنیای مجازی و چک کردن لایک هایتان در اینستاگرام
                                    شدن
                                    چیزی را از دست نمی دهید.</p>
                                <h3>در جشن تولد بداخلاق نباشید</h3>
                                <p>اگر به مراسم تولد دیر رسیدید و تمام صندلی ها پر شد ، اشکالی ندارد روی زمین بنشینید و
                                    یا
                                    اگر کسی دستتان را با کفش و دمپایی در مراسم تولد لگد کرد ، ناراحت نباشید و و فقط
                                    لبخند
                                    بزنید. اگر به خاطر این چیزها اخم هایتان توی هم باشد مطمئنا صاحب خانه را نیز ناراحت
                                    می
                                    کنید.</p>
                                <h3>در جشن تولد عکس بیندازید</h3>
                                <p>یکی از بزرگ ترین لذت های جشن تولد ، همین قسمت عکس گرفتن است. با همه دوستان و اقوام
                                    عکس
                                    بگیرید و الکی کلاس نگذارید . در عکس گرفتن هر ژست بامزه ای را اجرا کنید اما برای
                                    یکدیگر
                                    شاخ نگذارید چون خیلی لوس و بی مزه است.</p>
                                <p>در عکس گرفتن افراط نکنید و اصرار نکنید از من و همسرم عکس بگیرید. گرفتن 2 عکس کافیست.
                                    با
                                    هر دوربینی که شده عکس بگیرید .</p>
                                <p>مسئله دیگر در عکاسی، فراموش نکردن بزرگ ترهاست. فقط با همسن هایتان عکس نگیرید و از همه
                                    خیلی محترمانه دعوت کنید تا در عکس ها حضور داشته باشند. غیر از کسانی که با آنها شوخی
                                    دارید از باقی افراد حاضر عکس های همین الان یهویی نگیرید. شاید کسی دوست نداشته باشد
                                    بدون
                                    مقدمه از او عکس بگیرید و بعدا کدورت پیش آید.</p>
                                <h3>از جشن تولد فیلم برداری کنید</h3>
                                <p>فیلم برداری نیز مانند عکس گرفتن حس غریب دیگری دارد . پس از کسی بدون هماهنگی فیلم
                                    نگیرید و
                                    فیلمی بگیرید که خود متولد ، کیک ، شمع ، کادوها و مهمان ها در آن باشند . شما می
                                    توانید با
                                    گرفتن یک فیلم خوب خاطرات زیبایی را برای آینده بسازید.</p>
                                <h3>طرفتان را بشناسید</h3>
                                <p>برای بعضی هافوت کردن شمع های تولد مهم است پس اجازه دهید خودش بعد از کلی آرزو کردن و
                                    بستن
                                    چشم ها و پرکردن لپ ها با ذوق و شوق شمعش را فوت کند و برای شوخی شمعشان را فوت نکنید.
                                    اگر
                                    از شما نیز خواستند همگی شمع تولد را فوت کنید ، این کار را انجام دهید و به فکر
                                    غیربهداشتی
                                    شدن کیک نباشید.</p>
                                <h3>در جشن تولد آواز بخوانید</h3>
                                <p>همه با هم شعر کلیشه ای «تولد تولد تولدت مبارک ...» را تا آخر بخوانید . اصلا قشنگی و
                                    بامزگی تولد به همین کارهایش است.</p>
                                <h3>باز هم مراعات کنید</h3>
                                <p>بعد از تمام شدن مراسم ، با یک خداحافظی میزبان را خوشحال کنید و دیگر بی خود دو ساعت
                                    ننشینید و مهمانی را کش ندهید. اگر تولد ساعت هشت و نیم آغاز شود تا همان ساعت 11 کافی
                                    است
                                    ، چون میزبان هم حتما خسته شده و بهتر است قبل از خواب نیم ساعت آرامش داشته باشد.</p>
                                <hr/>
                                <h3 className="fs-17">میزبان هم هنگام جشن تولد باید کارهایی را انجام دهد</h3>
                                <div className="my-3">
                                    <img className="w-100" src={require("../assets/images/good-airbnb-guest-2.jpg")}
                                         alt=""/>
                                </div>
                                <h3>در جشن تولد فقط لبخند بزنید</h3>
                                <p>فقط مهمانان نیستند که باید مواردی را رعایت کنند تا تولد هرچه بهتر برگزار شود. میزبان
                                    هم
                                    می تواند با انجام برخی کارها مثل لبخند زدن و چهره خندانش به بهتر شدن هرچه بیشتر جشن
                                    کمک
                                    کند.</p>
                                <h3>در مراسم جشن تولد خسیس نباشید</h3>
                                <p>برای هر نفر 100 گرم کیک در نظر می گیرند و اگر 20 نفر هستید باید دو کیلو کیک داشته
                                    باشید.
                                    خساست به خرج ندهید و کیک را طوری سفارش دهید تا اگر مهمانتان شام کمی به امید کیک
                                    خورده
                                    بود ، موقع تقسیم کردن به اندازه کافی کیک برسد .</p>
                                <h3>همسایه را دریابید</h3>
                                <p>برای آنکه از صبر و حوصله همسایه تان تشکر کرده باشید ، برای هر خانواده یک برش کیک
                                    ببرید .
                                    در خرید کیک باید این مورد در نظر گرفته شود.</p>
                                <p>برای آنکه از صبر و حوصله همسایه تان تشکر کرده باشید ، برای هر خانواده یک برش کیک
                                    ببرید .
                                    در خرید کیک باید این مورد در نظر گرفته شود.</p>
                                <h3>زمان جشن تولد را مدیریت کنید</h3>
                                <p>اگر تولد فرزند خردسالتان است ، پروسه فوت کردن شمع و بریدن کیک را عقب نیاندازید زیرا
                                    بچه
                                    ها بعد از ساعت 9 خوابشان می گیرد و توانایی آن را دارند تا مجلس را نابود کنند پس تا
                                    اخلاقشان خوب است و لبخند به لب دارند ، مراسمات را اجرا کنید.</p>
                                <h3>تزیین کنید</h3>
                                <p>برای بهتر شدن تزیینات یک گوشه از خانه را انتخاب کنید و آنجا را به عنوان محل جاری
                                    مراسم
                                    تزیین کنید تا در فیلم و عکس بهتر شود. اگر بادکنک برای تزئین به کار بردید آنان را بین
                                    بچه
                                    ها تقسیم کنید قبل از آنکه سر بادکنک دعوایشان شود.</p>
                                <h3>در جشن تولد خوش اخلاق باشید</h3>
                                <p>لبخندتان را تا آخر مجلس حفظ کنید و خوش اخلاق باشید . اگر در مراسم چای روی فرش ریخت و
                                    یا
                                    بچه ها روی مبل ها راه رفتند خونسردیتان را حفظ کنید ، اگر می خواهید به خاطر این چیزها
                                    بد
                                    اخلاقی کنید اصلا تولد نگیرید.</p>
                                <h3>برای جشن تولد شام سبک آماده کنید</h3>
                                <p>اگر در نظر داشتید به مهمانانتان شام نیز بدهید ، یک شام سبک آماده کنید که نیاز به سفره
                                    انداختن نداشته باشد چون معمولا کیک و شیرینی و میوه و و لبو و ذرت بوداده نیز هست پس
                                    بهتر
                                    است یک ساندویچ کوچک برای شام در نظر بگیرید.</p>
                            </div>
                            <div className="source-name container fs-13">
                                <div className="border-top py-2">
                                    <span>منبع : </span>
                                    <span className="link-info fw-bold">GiftShop</span>
                                </div>
                            </div>
                            <div className="share-article d-flex gap-2 flex-row-reverse p-2 fs-19 container">
                                <span className=""><i className="fa-brands fa-telegram"></i></span>
                                <span className=""><i className="fa-brands fa-whatsapp"></i></span>
                                <span className=""><i className="fa-brands fa-linkedin"></i></span>
                                <span className=""><i className="fa-brands fa-x-twitter"></i></span>
                                <span className=""><i className="fa-brands fa-facebook"></i></span>
                            </div>
                            <div className="article-tags container">
                                <div className="border-top py-3">
                                <span className="fw-bold fs-14">برچسب‌ها :</span>
                                <a href="">
                                <span
                                    className="bg-light bg-gradient fs-12 px-1 mx-1 rounded-2 fw-light"> مهمونی </span>
                                </a>
                                <a href="">
                                    <span
                                        className="bg-light bg-gradient fs-12 px-1 mx-1 rounded-2 fw-light"> جشن </span>
                                </a>
                                </div>
                            </div>
                            <div className="comments container">
                                <div className="border-top py-3">
                                <div className="fw-bold fs-15">دیدگاه شما</div>
                                <div className="pb-2">
                                    <span
                                        className="fs-13 text-muted">بخش‌های موردنیاز علامت‌گذاری شده‌اند<span> * </span></span>
                                </div>
                                </div>
                                <form className="py-3">
                                    <div className="d-flex flex-column flex-md-row gap-2">
                                        <div className="col-12 col-md-6">
                                            <div><label className="fs-14" htmlFor="userName"><span> * </span>نام
                                                شما</label>
                                            </div>
                                            <input className="w-100 px-2 py-1 my-2 border rounded-2 input-font"
                                                   type="text"
                                                   id="userName" required=""/></div>
                                        <div className="col-12 col-md-6">
                                            <div><label className="fs-14" htmlFor="userEmail"><span> * </span>ایمیل
                                                شما</label></div>
                                            <input className="w-100 px-2 py-1 my-2 border rounded-2 input-font"
                                                   type="email"
                                                   id="userEmail" required=""/></div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div className="col-12">
                                            <div><label className="fs-14" htmlFor="userMessage">پیام شما</label></div>
                                            <textarea className="w-100 px-2 py-1 my-2 border rounded-2 input-font"
                                                      id="userMessage"></textarea></div>
                                    </div>
                                    <div className="my-2">
                                        <button className="btn bg-secondary-subtle">ارسال دیدگاه</button>
                                    </div>
                                </form>
                            </div>
                        </article>
                    </main>
                    <aside className="col-12 col-md-4 rounded-2 bg-white py-3 border position-relative">
                        <div className="container position-sticky top-0">
                            <div className="related-posts container">
                                <div className="text-center py-3 container"><h5
                                    className="fs-16 fw-bold d-inline-block border-bottom py-1">مطالب مرتبط</h5></div>
                                <div className="related-post d-flex gap-2 py-2 border-bottom">
                                    <div className="post-image col py-2">
                                        <Link to={"/article-page"}>
                                            <img className="w-100 rounded-1"
                                                 src={require("../assets/images/woman-gift.jpg")}
                                                 alt=""/>
                                        </Link>
                                    </div>
                                    <div className="post-title col-8 d-flex flex-column justify-content-around">
                                        <Link to={"/article-page"}>
                                            <div className="fs-12">پیشنهاد هدیه برای خانم‌ها که حتما خوشحال‌شان می‌کند
                                            </div>
                                        </Link>
                                        <div className="d-flex justify-content-between fs-10 fw-bold">
                                            <div className="d-flex gap-1">
                                                <span><i className="fa-regular fa-clock"></i></span>
                                                <span>30</span>
                                                <span>آذر</span>
                                            </div>
                                            <div className="d-flex gap-1">
                                        <span>
                                            <i className="fa-regular fa-circle-user"></i>
                                        </span>
                                                <span>گیفت شاپ</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="related-post d-flex gap-2 py-2 border-bottom">
                                    <div className="post-image col py-2">
                                        <Link to={"/article-page"}>
                                            <img className="w-100 rounded-1"
                                                 src={require("../assets/images/article-4.jpg")}
                                                 alt=""/>
                                        </Link>
                                    </div>
                                    <div className="post-title col-8 d-flex flex-column justify-content-around">
                                        <Link to={"/article-page"}>
                                            <div className="fs-12">آداب معاشرت در هدیه دادن!!</div>
                                        </Link>
                                        <div className="d-flex justify-content-between fs-10 fw-bold">
                                            <div className="d-flex gap-1">
                                                <span><i className="fa-regular fa-clock"></i></span>
                                                <span>30</span>
                                                <span>آذر</span>
                                            </div>
                                            <div className="d-flex gap-1">
                                        <span>
                                            <i className="fa-regular fa-circle-user"></i>
                                        </span>
                                                <span>گیفت شاپ</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="related-post d-flex gap-2 py-2 border-bottom">
                                    <div className="post-image col py-2">
                                        <Link to={"/article-page"}>
                                            <img className="w-100 rounded-1" src={require("../assets/images/gift.jpg")}
                                                 alt=""/>
                                        </Link>
                                    </div>
                                    <div className="post-title col-8 d-flex flex-column justify-content-around">
                                        <Link to={"/article-page"}>
                                            <div className="fs-12"> ۸ پیشنهاد‌ خرید هدیه برای آقایان در مناسبت‌های خاص
                                            </div>
                                        </Link>
                                        <div className="d-flex justify-content-between fs-10 fw-bold">
                                            <div className="d-flex gap-1">
                                                <span><i className="fa-regular fa-clock"></i></span>
                                                <span>30</span>
                                                <span>آذر</span>
                                            </div>
                                            <div className="d-flex gap-1">
                                        <span>
                                            <i className="fa-regular fa-circle-user"></i>
                                        </span>
                                                <span>گیفت شاپ</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default ArticlePage;