import React, {useState, useRef} from "react";
import MobileSearchScreen from "./M-searchScreen";

function Header() {
    const [screenSearch, setScreenSearch] = useState(false);
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [activeMenuTab, setActiveMenuTab] = useState({
        menuTab: true,
        categoryTab: false,
    });
    const dropDownMenu = useRef(null);
    const dropDownMenuIcon = useRef(null);
    return (
        <header>
            <MobileSearchScreen screenSearch={screenSearch} setScreenSearch={setScreenSearch}/>
            <a href="" className="header-offers text-center d-block">با هر خرید یک جایزه ببرید!</a>

            <div className="mobile-header">
                <div
                    className={`mobile-menu w-100 p-4 position-fixed ${menuIsOpen === true ? `start-0` : `start-100`} top-0 bottom-0 overflow-y-auto overflow-x-hidden`}>
                    <div
                        className="mobile-menu-header border-bottom d-flex justify-content-between gap-4 align-items-center pb-2">
                        <div className="mobile-menu-logo">
                            <a href="">
                                <img className="w-50"
                                     src={require("../../assets/images/gift-shop-logo-design-love-gift-symbol-icon-gift-logo-design-template_657888-116-removebg-small-logo.png")}
                                     alt="Gift Shop Logo"/>
                            </a>
                        </div>
                        <div className="close-menu fs-5" onClick={() => {
                            setMenuIsOpen(false);
                        }}>
                            <span>
                                <i className="fa-solid fa-xmark"></i>
                            </span>
                        </div>
                    </div>
                    <div className="mobile-menu-tabs d-flex justify-content-between fs-6">
                        <div
                            className={`menu-tab w-50 text-center p-2 lh-lg ${activeMenuTab.menuTab === true ? `is-active-tab` : ''}`}
                            onClick={() => {
                                setActiveMenuTab({
                                    menuTab: true,
                                    categoryTab: false
                                })
                            }}>منو
                        </div>
                        <div
                            className={`categories-tab w-50 text-center p-2 lh-lg ${activeMenuTab.categoryTab === true ? `is-active-tab` : ''}`}
                            onClick={() => {
                                setActiveMenuTab({
                                    menuTab: false,
                                    categoryTab: true
                                })
                            }}>دسته بندی ها
                        </div>
                    </div>
                    <div className={`mobile-menu-nav-container ${activeMenuTab.menuTab === true ? `` : `d-none`}`}>
                        <div className="mobile-menu-nav-item"><a href="">صفحه نخست</a></div>
                        <div className="mobile-menu-nav-item">
                            <div className="d-flex justify-content-between gap-3"><a href="">فروشگاه</a><span
                                onClick={() => {
                                    dropDownMenu.current.classList.toggle('d-none');
                                    dropDownMenuIcon.current.classList.toggle("fa-angle-left")
                                    dropDownMenuIcon.current.classList.toggle("fa-chevron-down")
                                }}
                                className="d-inline-block col-1 text-center"><i
                                ref={dropDownMenuIcon}
                                className="fa-solid fa-angle-left"></i></span></div>
                        </div>
                        <div ref={dropDownMenu}
                             className="mobile-nav-dropdown-menu d-none">
                            <div className="mobile-menu-nav-item p-2 "><a href="" className="text-muted">حساب کاربری
                                من</a></div>
                            <div className="mobile-menu-nav-item p-2"><a href="" className="text-muted">پرداخت</a></div>
                            <div className="mobile-menu-nav-item p-2"><a href="" className="text-muted">سبد خرید</a>
                            </div>
                        </div>
                        <div className="mobile-menu-nav-item"><a href="">تماس با ما</a></div>
                        <div className="mobile-menu-nav-item"><a href="">مجله گیفت شاپ</a></div>
                        <div className="mobile-menu-nav-item"><a href="">درباره ما</a></div>
                        <div className="mobile-menu-nav-item"><a href=""><i className="fa-solid fa-heart"></i> علاقه
                            مندی</a></div>
                        <div className="mobile-menu-nav-item"><a href=""><i className="fa-solid fa-user"></i> ورود / ثبت
                            نام
                        </a></div>
                    </div>

                    <div
                        className={`mobile-menu-categories-container ${activeMenuTab.categoryTab === true ? `` : `d-none`}`}>
                        <div className="mobile-menu-categories">
                            <div className="mobile-menu-categories-item">
                                <a href="">لوازم جانبی </a>
                            </div>
                            <div className="mobile-menu-categories-item">
                                <a href="">یلدایی </a>
                            </div>
                            <div className="mobile-menu-categories-item">
                                <a href="">فروش فوق العاده </a>
                            </div>
                            <div className="mobile-menu-categories-item">
                                <a href="">گوی موزیکال </a>
                            </div>
                            <div className="mobile-menu-categories-item">
                                <a href="">ولنتاین </a>
                            </div>
                            <div className="mobile-menu-categories-item">
                                <a href="">باکس موزیکال </a>
                            </div>
                            <div className="mobile-menu-categories-item">
                                <a href="">ساک دستی </a>
                            </div>
                            <div className="mobile-menu-categories-item">
                                <a href="">جعبه کادویی </a>
                            </div>
                            <div className="mobile-menu-categories-item">
                                <a href="">ساعت </a>
                            </div>
                            <div className="mobile-menu-categories-item">
                                <a href="">دکوری و فانتزی </a>
                            </div>
                            <div className="mobile-menu-categories-item">
                                <a href="">لیوان </a>
                            </div>
                            <div className="mobile-menu-categories-item">
                                <a href="">تابلو </a>
                            </div>
                            <div className="mobile-menu-categories-item">
                                <a href="">اسباب بازی </a>
                            </div>
                            <div className="mobile-menu-categories-item">
                                <a href="">شمع </a>
                            </div>
                            <div className="mobile-menu-categories-item">
                                <a href="">قاب عکس </a>
                            </div>
                            <div className="mobile-menu-categories-item">
                                <a href=""> خانه وآشپزخانه </a>
                            </div>
                            <div className="mobile-menu-categories-item">
                                <a href="">گل و گلدان </a>
                            </div>
                            <div className="mobile-menu-categories-item">
                                <a href="">شب خواب و آباژور </a>
                            </div>
                            <div className="mobile-menu-categories-item">
                                <a href="">کاغذ کادو - پاکت پول </a>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="main-mobile-header d-flex justify-content-between align-items-center">
                    <div className="seacrh-and-menu">
                        <span className="mx-3" onClick={() => setMenuIsOpen(true)}><i className="fa-solid fa-bars"></i></span>
                        <span className="mx-2" onClick={() => {
                            setScreenSearch(true)
                        }}><i className="fa-solid fa-magnifying-glass"></i></span>
                    </div>

                    <div className="header-logo-mobile">
                        <a href="">
                            <img
                                src={require("../../assets/images/gift-shop-logo-design-love-gift-symbol-icon-gift-logo-design-template_657888-116-removebg.png")}
                                alt="Gift Shop Logo"/>
                        </a>
                    </div>

                    <div className="user-tools-mobile">
                        <a href="" className="mx-3 position-relative d-inline-block"><span
                            className="badge-icon">8</span><i className="fa-solid fa-cart-shopping"></i></a>
                        <a href="" className="mx-2"><i className="fa-solid fa-user"></i></a>
                    </div>
                </section>
            </div>

            <div className="desktop-header">

                <section
                    className="general-header d-flex justify-content-between align-items-center border-bottom px-3">
                    <div className="header-logo-desktop">
                        <img
                            className="w-100"
                            src={require("../../assets/images/gift-shop-logo-design-love-gift-symbol-icon-gift-logo-design-template_657888-116-removebg.png")}
                            alt=""/>
                    </div>

                    <div
                        className="header-search-desktop col-6 position-relative d-flex justify-content-end gap-2">
                        <button className="header-search-desktop-btn btn" title="جستجو"><i
                            className="fa-solid fa-magnifying-glass"></i></button>
                        <input className="header-search-desktop-input input-group" type="text"
                               placeholder="جستجوی محصولات... "/>
                    </div>

                    <div className="user-tools-desktop d-flex justify-content-between gap-4">
                        <a href="" title="سبد خرید" className="cart position-relative"><span
                            className="badge-icon">8</span><i className="fa-solid fa-cart-shopping"></i></a>
                        <a href="" title="علاقه مندی ها" className="favorites position-relative"><span
                            className="badge-icon">0</span><i className="fa-solid fa-heart"></i></a>
                        <a href="" title="پروفایل" className="user-profile"><i className="fa-solid fa-user"></i></a>
                    </div>
                </section>

                <section className="header-nav-list d-flex justify-content-start gap-4 p-3">
                    <div className="desktop-burger-menu d-flex gap-3 px-3 align-items-center">
                        <i className="fa-solid fa-bars" title="منو"></i>
                        <span>دسته بندی کالاها</span>
                        <i className="fa-solid fa-angle-left"></i>
                    </div>
                    <nav className="d-flex justify-content-evenly gap-3">
                        <div><a className="active-page" href="">صفحه نخست</a></div>

                        <div><a href="">فروشگاه</a><i className="fa-solid fa-angle-left mx-1"></i></div>

                        <div><a href="">تماس با ما</a></div>

                        <div><a href="">مجله دیجی شاپ</a></div>

                        <div><a href="">درباره ما</a></div>
                    </nav>
                </section>
            </div>

            <section className="header-main-content">
                <div className="content-1 slider-content"></div>
                <div className="content-2"></div>
                <div className="content-3"></div>
            </section>
        </header>
    )
}

export default Header;