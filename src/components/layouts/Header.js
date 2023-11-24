import React, {useState, useEffect, useRef, useContext} from "react";
import MobileSearchScreen from "./M-searchScreen";
import {LoadingScreen} from "../index"
import {toFarsiNumber} from "../../services/numberToPersian";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/pagination';
import '../../../node_modules/swiper/swiper.css';
import '../../../node_modules/swiper/swiper-bundle.min.css';
import {Autoplay, Pagination} from 'swiper/modules';
import axios from "axios";
import {AppContext} from "../../Context/AppContext";

function Header() {
    const {loading, categories, sliders, stopBodyScrolling} = useContext(AppContext)
    const [screenSearch, setScreenSearch] = useState(false);
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [currentCategory, setCurrentCategory] = useState({})
    const [activeMenuTab, setActiveMenuTab] = useState({
        menuTab: true, categoryTab: false,
    });
    const categoriesContainer = useRef(null)
    const categoriesDropDownMenu = useRef(null)
    const categoriesBarsIcon = useRef(null)
    const mobileNavDropDownMenu = useRef(null)
    const shopDropDownMenu = useRef(null)

    function toggleClass(elRef, toggleClass) {
        elRef.current.classList.toggle(`${toggleClass}`)
    }

    function getCategories(allCategories) {
        if (!allCategories) {
            return <></>
        }
        let res = []
        allCategories.forEach(item => {
            if (item.childs.length) {
                res.push(<>
                    <div className="mobile-menu-categories-item" id={item.id}>
                        <div className="d-flex justify-content-between">
                            <a href="">{item.name}</a><span onClick={(e) => {
                            e.currentTarget.parentNode.nextSibling.classList.toggle("d-none")
                            e.currentTarget.classList.toggle("angel-down")
                        }} className="d-inline-block col-1 text-center" role="button">
                                <i className="fa-solid fa-angle-left shop-dropdown-menu"></i></span>
                        </div>
                        <div className="d-none mobile-menu-categories-child d-flex flex-column pt-2 px-2">
                            {getCategories(item.childs)}
                        </div>
                    </div>
                </>)
            } else {
                res.push(<a href="" className="my-1">{item.name}</a>)
            }
        })
        return res
    }

    useEffect(() => {
        const getSliders = async () => {
            try {
                const {data} = await axios.post("https://api.gift-group.ir/api/product/getrows")
                const {rows} = data.data
            } catch (err) {
                console.log(err.message)
            }
        }
        getSliders()
    }, [categories])


    return (<header className="header mb-5" id="#">
        <MobileSearchScreen screenSearch={screenSearch} setScreenSearch={setScreenSearch}/>
        <a href="" className="header-offers text-center d-block">با هر خرید یک جایزه ببرید!</a>

        <div onClick={() => {
            setMenuIsOpen(false)
            stopBodyScrolling()
        }} className={`blur-bg ${menuIsOpen === true ? `` : `d-none`}`}></div>
        <div className="mobile-header">
            <div
                className={`mobile-menu p-4 position-fixed ${menuIsOpen === true ? `end-0` : `right-100`} top-0 bottom-0
                 overflow-y-auto overflow-x-hidden hide-scrollbar`}>
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
                        stopBodyScrolling()
                    }}>
                            <span role="button">
                                <i className="fa-solid fa-xmark"></i>
                            </span>
                    </div>
                </div>
                <div className="mobile-menu-tabs d-flex justify-content-between fs-6">
                    <div
                        className={`menu-tab w-50 text-center p-2 lh-lg ${activeMenuTab.menuTab === true ? `is-active-tab` : ''}`}
                        onClick={() => {
                            setActiveMenuTab({
                                menuTab: true, categoryTab: false
                            })
                        }}>منو
                    </div>
                    <div
                        className={`categories-tab w-50 text-center p-2 lh-lg ${activeMenuTab.categoryTab === true ? `is-active-tab` : ''}`}
                        onClick={() => {
                            setActiveMenuTab({
                                menuTab: false, categoryTab: true
                            })
                        }}>دسته بندی ها
                    </div>
                </div>
                <div
                    className={`mobile-menu-nav-container ${activeMenuTab.menuTab === true ? `` : `d-none`}`}>
                    <div className="mobile-menu-nav-item"><a href="">صفحه نخست</a></div>
                    <div className="mobile-menu-nav-item">
                        <div className="d-flex justify-content-between gap-3"><a href="">فروشگاه</a><span
                            onClick={() => {
                                toggleClass(mobileNavDropDownMenu, "d-none")
                                toggleClass(shopDropDownMenu, "angel-down")
                            }}
                            className="d-inline-block col-1 text-center">
                                <i ref={shopDropDownMenu} className="fa-solid fa-angle-left"></i></span>
                        </div>
                    </div>
                    <div ref={mobileNavDropDownMenu}
                         className="d-none">
                        <div className="mobile-menu-nav-item p-2 "><a href=""
                                                                      className="text-muted">حساب
                            کاربری
                            من</a></div>
                        <div className="mobile-menu-nav-item p-2"><a href=""
                                                                     className="text-muted">پرداخت</a>
                        </div>
                        <div className="mobile-menu-nav-item p-2"><a href="" className="text-muted">سبد
                            خرید</a>
                        </div>
                    </div>
                    <div className="mobile-menu-nav-item"><a href="">تماس با ما</a></div>
                    <div className="mobile-menu-nav-item"><a href="">مجله گیفت شاپ</a></div>
                    <div className="mobile-menu-nav-item"><a href="">درباره ما</a></div>
                    <div className="mobile-menu-nav-item"><a href=""><i
                        className="fa-solid fa-heart"></i> علاقه
                        مندی</a></div>
                    <div className="mobile-menu-nav-item"><a href=""><i
                        className="fa-solid fa-user"></i> ورود / ثبت
                        نام
                    </a></div>
                </div>

                <div
                    className={`mobile-menu-categories-container ${activeMenuTab.categoryTab === true ? `` : `d-none`}`}>
                    <div className="mobile-menu-categories">
                        {categories.length ? getCategories(categories) : <></>}
                    </div>
                </div>
            </div>

            <section
                className="main-mobile-header box-shadow d-flex justify-content-between align-items-center">
                <div className="search-and-menu">
                    <span role="button" className="mx-3" onClick={() => {
                        setMenuIsOpen(true)
                        stopBodyScrolling()
                    }}><i className="fa-solid fa-bars"></i></span>
                    <span role="button" className="mx-2" onClick={() => {
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
                        className="badge-icon">{toFarsiNumber(8)}</span><i
                        className="fa-solid fa-cart-shopping"></i></a>
                    <a href="" className="mx-2"><i className="fa-solid fa-user"></i></a>
                </div>
            </section>
        </div>

        <div className="desktop-header box-shadow">

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
                    <a href="" title="پروفایل" className="user-profile"><i
                        className="fa-solid fa-user"></i></a>
                </div>
            </section>

            <section className="header-nav-list d-flex justify-content-start p-3 pb-0">
                <div
                    onMouseEnter={() => {
                        toggleClass(categoriesDropDownMenu, "angel-down")
                        toggleClass(categoriesBarsIcon, "active")
                        toggleClass(categoriesContainer, "d-none")
                        stopBodyScrolling()
                    }}
                    onMouseLeave={() => {
                        toggleClass(categoriesDropDownMenu, "angel-down")
                        toggleClass(categoriesBarsIcon, "active")
                        toggleClass(categoriesContainer, "d-none")
                        stopBodyScrolling()
                    }}
                    className="desktop-burger-menu position-relative d-flex gap-3 ms-3 ps-3 pb-3 align-items-center justify-content-between">
                        <span title={"منو"}>
                            <svg ref={categoriesBarsIcon} className="ham hamRotate ham4" viewBox="0 0 100 100"
                                 width="30">
                                <path className="line top"
                                      d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"></path>
                                <path className="line middle" d="m 70,50 h -40"></path>
                                <path className="line bottom"
                                      d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"></path>
                            </svg>
                        </span>
                    <span>دسته بندی کالاها</span>
                    <span>
                        <i ref={categoriesDropDownMenu}
                           className="fa-solid fa-angle-left text-center dropdown-menu-icon"></i>
                        </span>
                </div>
                <nav className="d-flex justify-content-evenly gap-3 pe-3">
                    <div><a className="active-page" href="">خانه</a></div>

                    <div><a href="">تماس با ما</a></div>

                    <div><a href="">مجله دیجی شاپ</a></div>

                    <div><a href="">درباره ما</a></div>
                </nav>
            </section>
            <div
                onMouseEnter={() => {
                    toggleClass(categoriesContainer, "d-none")
                    toggleClass(categoriesDropDownMenu, "angel-down")
                    toggleClass(categoriesBarsIcon, "active")
                    stopBodyScrolling()
                }}
                onMouseLeave={() => {
                    toggleClass(categoriesContainer, "d-none")
                    toggleClass(categoriesDropDownMenu, "angel-down")
                    toggleClass(categoriesBarsIcon, "active")
                    stopBodyScrolling()
                }}
                ref={categoriesContainer}
                className="categories-container bg-white position-absolute  d-flex h-100 w-75 border d-none">
                <div className="categories-nav overflow-y-auto hide-scrollbar border-start ms-4"
                     onMouseEnter={() => stopBodyScrolling()} onMouseLeave={() => stopBodyScrolling()}>
                    {loading ? <LoadingScreen/> : categories.length ? categories.flat(Infinity).map(tag => (
                        <div onMouseEnter={() => {
                            setCurrentCategory(tag)
                            stopBodyScrolling()
                        }}
                             onMouseLeave={() => {
                                 setCurrentCategory(tag)
                                 stopBodyScrolling()
                             }}
                             className="categories-nav-item" id={tag.id}>
                            <a href="">{tag.name}</a>
                        </div>)) : console.log("categories is not received yet")}
                </div>
                <div className="categories-sub overflow-y-auto hide-scrollbar">
                    <div className="categories-sub-header pe-0">
                        <a href="" className="categories-sub-header-link">همه‌ی دسته
                            بندی‌های {currentCategory.name}</a>
                    </div>
                    <div className="categories-sub-list d-flex flex-column gap-3">
                        {getCategories(currentCategory.childs)}
                    </div>
                </div>
            </div>

        </div>
        <section className="header-main-content d-flex flex-column flex-lg-row container mt-3">
            <div
                className="first-row d-flex flex-column col-lg-9 my-1 my-md-2 my-lg-3 gap-3 justify-content-lg-between">
                <div className="slider-content h-100">
                    <Swiper style={{height: "100%"}}
                            dir="rtl" spaceBetween={10} centeredSlides={true} autoplay={{
                        delay: 2500, disableOnInteraction: false,
                    }}
                            pagination={{clickable: true,}} modules={[Autoplay, Pagination]} className="mySwiper">
                        {
                            sliders.length ?
                                sliders.map(item => (
                                    <SwiperSlide>
                                        <div id={item.id} className="rounded h-100">
                                            <a href="" className="rounded h-100">
                                                <img className="w-100 rounded h-100" src={item.imageUrl}
                                                     alt={item.name}/>
                                            </a>
                                        </div>
                                    </SwiperSlide>
                                ))
                                : <><LoadingScreen/></>
                        }
                    </Swiper>
                </div>
                <div className="first-row-child d-flex flex-row gap-3">
                    <div className="rounded d-flex col-8 flex-shrink-1 flex-lg-grow-1">
                        <div className="d-flex rounded align-items-stretch">
                            <a href="">
                                <img className="rounded w-100 box-shadow h-100"
                                     src={require("../../assets/images/product-3.jpg")}
                                     alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="rounded d-flex col-4 flex-shrink-1 flex-lg-grow-1">
                        <div className="rounded">
                            <a href="">
                                <img className="rounded w-100 box-shadow"
                                     src={require("../../assets/images/product-1.jpg")}
                                     alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="second-row d-flex flex-row flex-lg-column justify-content-between col-lg-3 my-lg-3 mx-lg-3 gap-2">
                <div className="rounded d-flex col-4 col-lg-auto flex-shrink-1 flex-lg-shrink-0">
                    <div className="rounded">
                        <a href="">
                            <img className="rounded w-100 box-shadow" src={require("../../assets/images/product-4.jpg")}
                                 alt=""/>
                        </a>
                    </div>
                </div>
                <div className="rounded d-flex col-4 col-lg-auto flex-shrink-1 flex-lg-shrink-0">
                    <div className="rounded">
                        <a href="">
                            <img className="rounded w-100 box-shadow" src={require("../../assets/images/product-6.jpg")}
                                 alt=""/>
                        </a>
                    </div>
                </div>
                <div className="rounded d-flex col-4 col-lg-auto flex-shrink-1 flex-lg-shrink-0">
                    <div className="rounded">
                        <a href="">
                            <img className="rounded w-100 box-shadow" src={require("../../assets/images/product-7.jpg")}
                                 alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </header>)
}

export default Header;
