import React, {useContext, useState} from "react";
import {Navbar, Footer, MobileToolbar} from "./index";
import {AppContext} from "../Context/AppContext";
import {Link, useLocation} from "react-router-dom";
import {insertRialComma, numberToPersian} from "../services/numberToPersian";

function Profile() {
    const {stopBodyScrolling} = useContext(AppContext)
    const [userOptionsMenu, setUserOptionsMenu] = useState(false)

    return (
        <div>
            <div onClick={() => {
                setUserOptionsMenu(false)
                stopBodyScrolling()
            }}
                 className={`blur-bg blur-bg-2 ${userOptionsMenu === true ? `` : `d-none`}`}></div>
            <Navbar/>
            <MobileToolbar/>
            <div
                className={`user-options-menu bg-white rounded-top-4 w-100 d-flex flex-column position-fixed ${userOptionsMenu === true ? `bottom-0` : `bottom--100`} start-0 end-0`}>
                <div
                    onClick={() => {
                        setUserOptionsMenu(prevState => !prevState)
                        stopBodyScrolling()
                    }}
                    className="p-3 d-flex gap-3 align-items-center">
                    <i className="fa-solid fa-xmark fs-20 pt-1"></i>
                    <h4 className="fs-15 fw-bold m-0">منوی پنل کاربری</h4>
                </div>
                <div
                    className={`${useLocation().pathname === "/profile" ? `active-option` : ``} user-options-menu-item border-bottom fs-12 fw-bold p-3`}>
                    <Link to={"/profile"}>
                    <span>
                        <svg id="home" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" stroke-width="1">
                            <path
                                d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2c1.108 0 2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715c.519.948.519 2.092.519 4.38v1.522c0 3.9 0 5.851-1.172 7.063C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212C2 19.576 2 17.626 2 13.725v-1.521Z"></path>
                            <path d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1" strokeLinecap="round"></path>
                          </g>
                        </svg>
                    </span>
                        <div>پیشخوان</div>
                    </Link>
                </div>
                <div
                    className={`${useLocation().pathname === "/orders" ? `active-option` : ``} user-options-menu-item border-bottom fs-12 fw-bold p-3`}>
                    <Link to={"/"}>
                    <span>
                        <svg id="order" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" stroke-width="1.5">
                            <path
                                d="M3.742 18.555C4.942 20 7.174 20 11.639 20h.722c4.465 0 6.698 0 7.898-1.445m-16.517 0c-1.2-1.446-.788-3.64.035-8.03c.585-3.12.877-4.681 1.988-5.603M3.742 18.555Zm16.517 0c1.2-1.446.788-3.64-.035-8.03c-.585-3.12-.878-4.681-1.989-5.603m2.024 13.633ZM18.235 4.922C17.125 4 15.536 4 12.361 4h-.722c-3.175 0-4.763 0-5.874.922m12.47 0Zm-12.47 0Z"></path>
                            <path d="M9.17 8a3.001 3.001 0 0 0 5.66 0" strokeLinecap="round"></path>
                          </g>
                        </svg>
                    </span>
                        <div>سفارش ها</div>
                    </Link>
                </div>
                <div
                    className={`${useLocation().pathname === "/favorites" ? `active-option` : ``} user-options-menu-item border-bottom fs-12 fw-bold p-3`}>
                    <Link to={"/"}>
                    <span>
                        <svg id="heart" viewBox="0 0 256 256">
                          <path
                              d="M223 57a58.07 58.07 0 0 0-81.92-.1L128 69.05l-13.09-12.19A58 58 0 0 0 33 139l89.35 90.66a8 8 0 0 0 11.4 0L223 139a58 58 0 0 0 0-82Zm-11.35 70.76L128 212.6l-83.7-84.92a42 42 0 0 1 59.4-59.4l.2.2l18.65 17.35a8 8 0 0 0 10.9 0l18.65-17.35l.2-.2a42 42 0 1 1 59.36 59.44Z"
                              fill="currentColor"></path>
                        </svg>
                    </span>
                        <div>علاقه‌مندی ها</div>
                    </Link>
                </div>
                <div
                    className={`${useLocation().pathname === "/messages" ? `active-option` : ``} user-options-menu-item border-bottom fs-12 fw-bold p-3`}>
                    <Link to={"/"}>
                    <span>
                        <svg id="notification" viewBox="0 0 256 256">
                          <path
                              d="M221.8 175.94c-5.55-9.56-13.8-36.61-13.8-71.94a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h40.81a40 40 0 0 0 78.38 0H208a16 16 0 0 0 13.8-24.06ZM128 216a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 128 216Zm-80-32c7.7-13.24 16-43.92 16-80a64 64 0 1 1 128 0c0 36.05 8.28 66.73 16 80Z"
                              fill="currentColor"></path>
                        </svg>
                    </span>
                        <div>پیام ها</div>
                    </Link>
                </div>
                <div
                    className={`${useLocation().pathname === "/addresses" ? `active-option` : ``} user-options-menu-item border-bottom fs-12 fw-bold p-3`}>
                    <Link to={"/"}>
                    <span>
                        <svg id="address" viewBox="0 0 24 24">
                          <path
                              d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 7.35q3.05-2.8 4.525-5.088T18 10.2q0-2.725-1.738-4.462T12 4Q9.475 4 7.737 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35ZM12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Zm0-12Z"
                              fill="currentColor"></path>
                        </svg>
                    </span>
                        <div>آدرس ها</div>
                    </Link>
                </div>
                <div
                    className={`${useLocation().pathname === "/profile-info" ? `active-option` : ``} user-options-menu-item border-bottom fs-12 fw-bold p-3`}>
                    <Link to={"/"}>
                    <span>
                        <svg id="user-setting" viewBox="0 0 24 24">
                          <path
                              d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h2.5m4.501 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2-3.5V17m0 4v1.5m3.031-5.25l-1.299.75m-3.463 2l-1.3.75m0-3.5l1.3.75m3.463 2l1.3.75"
                              fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                              stroke-width="2"></path>
                        </svg>
                    </span>
                        <div>اطلاعات حساب کاربری</div>
                    </Link>
                </div>
                <div className={`user-options-menu-item border-bottom fs-12 fw-bold p-3`}>
                    <Link to={"/"}>
                    <span>
                        <svg id="exit" viewBox="0 0 20 20">
                          <path
                              d="M12.5 17a.5.5 0 0 0 0-1H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6.5a.5.5 0 0 0 0-1H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h6.5Zm1.146-10.854a.5.5 0 0 1 .708 0l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708l2.647-2.646H7.5a.5.5 0 0 1 0-1h8.793l-2.647-2.646a.5.5 0 0 1 0-.708Z"
                              fill="currentColor"></path>
                        </svg>
                    </span>
                        <div className="text-danger">خروج</div>
                    </Link>
                </div>
            </div>

            <div className="container my-3">
                <div className="profile-wrapper d-flex flex-column flex-lg-row gap-3">
                    <div className="options">
                        <div className="bg-white p-4 rounded-3 dashboard-box-shadow">
                            <div>
                                <div
                                    className="user-profile-photo text-center d-flex justify-content-center align-items-center">
                                    <div>
                                        <img src={require("../assets/images/user.png")} alt="user profile photo"/>
                                        <div className="change-image-icon">
                                            <a href="" className="d-flex">
                                                <svg viewBox="0 0 24 24">
                                                    <g fill="none" stroke="white" strokeLinecap="round"
                                                       stroke-width="1.5">
                                                        <path
                                                            d="M2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12v-1.5M13.5 2H12C7.286 2 4.929 2 3.464 3.464c-.973.974-1.3 2.343-1.409 4.536"></path>
                                                        <path
                                                            d="m16.652 3.455l.649-.649A2.753 2.753 0 0 1 21.194 6.7l-.65.649m-3.892-3.893s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298m-3.893-3.893L10.687 9.42c-.404.404-.606.606-.78.829c-.205.262-.38.547-.524.848c-.121.255-.211.526-.392 1.068L8.412 13.9m12.133-6.552l-2.983 2.982m-2.982 2.983c-.404.404-.606.606-.829.78a4.59 4.59 0 0 1-.848.524c-.255.121-.526.211-1.068.392l-1.735.579m0 0l-1.123.374a.742.742 0 0 1-.939-.94l.374-1.122m1.688 1.688L8.412 13.9"></path>
                                                    </g>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="user-info text-center my-3">
                                    <div className="user-name">ابوالفضل عباسپور</div>
                                    <div className="user-number"><a class="text-muted"
                                                                    href="tel:+989121234567">09121234567</a></div>
                                </div>
                                <div className="options-menu-btn d-flex justify-content-center">
                                    <button
                                        onClick={() => {
                                            setUserOptionsMenu(prevState => !prevState)
                                            stopBodyScrolling()
                                        }}
                                        className="fs-13 pointer px-4 py-2 btn d-flex gap-2 align-items-center rounded-3">
                                        <i className="fa-solid fa-bars text-white"></i>منوی پنل کاربری
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dashboarad-wrapper">
                        <div className="bg-white rounded-3 p-4 dashboard-box-shadow">
                            <div className="dashboarad-container d-flex flex-column gap-5">
                                <div className="dashboard-header"><span className="fs-19 py-1">پیشخوان</span></div>
                                <div className="account-info">
                                    <div className="d-flex flex-column gap-4">
                                        <div className="d-flex profile-sections-header align-items-center fs-17 gap-3">
                                            <span className="green-dot"></span>
                                            <span>حساب کاربری</span>
                                        </div>
                                        <div className="account-info-content">
                                            <div className="d-grid gap-3">
                                                <div>
                                                    <div
                                                        className="d-flex flex-column flex-lg-row align-items-center gap-3 text-white rounded-4 p-2 complete-user-info">
                                                        <span className="rounded-3 p-2 position-relative">
                                                            <span
                                                                className="badge-icon">{insertRialComma(numberToPersian(0))}</span>
                                                            <svg id="user-setting" viewBox="0 0 24 24">
                                                              <path
                                                                  d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h2.5m4.501 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2-3.5V17m0 4v1.5m3.031-5.25l-1.299.75m-3.463 2l-1.3.75m0-3.5l1.3.75m3.463 2l1.3.75"
                                                                  fill="none" stroke="currentColor"
                                                                  strokeLinecap="round" strokeLinejoin="round"
                                                                  stroke-width="2"></path>
                                                            </svg>
                                                        </span>
                                                        <span className="fs-13">تکمیل مشخصات</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div
                                                        className="d-flex flex-column flex-lg-row align-items-center gap-3 text-white rounded-4 p-2 reset-password">
                                                        <span className="rounded-3 p-2 position-relative">
                                                            <span
                                                                className="badge-icon">{insertRialComma(numberToPersian(0))}</span>
                                                            <svg id="password-lock" viewBox="0 0 24 24">
                                                              <g fill="none">
                                                                <path
                                                                    d="M9 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"
                                                                    fill="currentColor"></path>
                                                                <path
                                                                    d="M6 10V8c0-.34.028-.675.083-1M18 10V8A6 6 0 0 0 7.5 4.031M11 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22h-1"
                                                                    stroke="currentColor" strokeLinecap="round"
                                                                    stroke-width="1.5"></path>
                                                              </g>
                                                            </svg>
                                                        </span>
                                                        <span className="fs-13">تغییر کلمه عبور</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div
                                                        className="d-flex flex-column flex-lg-row align-items-center gap-3 text-white rounded-4 p-2 user-favorites">
                                                        <span className="rounded-3 p-2 position-relative">
                                                            <span
                                                                className="badge-icon">{insertRialComma(numberToPersian(0))}</span>
                                                            <svg id="heart" viewBox="0 0 256 256">
                                                              <path
                                                                  d="M223 57a58.07 58.07 0 0 0-81.92-.1L128 69.05l-13.09-12.19A58 58 0 0 0 33 139l89.35 90.66a8 8 0 0 0 11.4 0L223 139a58 58 0 0 0 0-82Zm-11.35 70.76L128 212.6l-83.7-84.92a42 42 0 0 1 59.4-59.4l.2.2l18.65 17.35a8 8 0 0 0 10.9 0l18.65-17.35l.2-.2a42 42 0 1 1 59.36 59.44Z"
                                                                  fill="currentColor"></path>
                                                            </svg>
                                                        </span>
                                                        <span className="fs-13">علاقه مندی</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div
                                                        className="d-flex flex-column flex-lg-row align-items-center gap-3 text-white rounded-4 p-2 notifications">
                                                        <span className="rounded-3 p-2 position-relative">
                                                            <span
                                                                className="badge-icon">{insertRialComma(numberToPersian(0))}</span>
                                                            <svg id="notification" viewBox="0 0 256 256">
                                                              <path
                                                                  d="M221.8 175.94c-5.55-9.56-13.8-36.61-13.8-71.94a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h40.81a40 40 0 0 0 78.38 0H208a16 16 0 0 0 13.8-24.06ZM128 216a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 128 216Zm-80-32c7.7-13.24 16-43.92 16-80a64 64 0 1 1 128 0c0 36.05 8.28 66.73 16 80Z"
                                                                  fill="currentColor"></path>
                                                            </svg>
                                                        </span>
                                                        <span className="fs-13">اعلانات</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="orders-info">
                                    <div className="d-flex flex-column gap-4">
                                        <div className="d-flex profile-sections-header align-items-center fs-17 gap-3">
                                            <span className="green-dot"></span>
                                            <span>وضعیت سفارش های شما</span>
                                        </div>
                                        <div className="orders-info-content">
                                            <div className="d-grid gap-3">
                                                <div>
                                                    <div
                                                        className="d-flex flex-column flex-lg-row align-items-center gap-3 text-white rounded-4 p-2 orders-current">
                                                        <span className="rounded-3 p-2 position-relative">
                                                            <span
                                                                className="badge-icon">{insertRialComma(numberToPersian(0))}</span>
                                                            <svg id="order-current" viewBox="0 0 24 24">
                                                              <g fill="none" stroke="currentColor"
                                                                 strokeLinecap="round" stroke-width="1.5">
                                                                <path
                                                                    d="M9 6V5a3 3 0 1 1 6 0v1m-5.83 9a3.001 3.001 0 0 0 5.66 0"></path>
                                                                <path
                                                                    d="M20.224 12.526c-.586-3.121-.878-4.682-1.99-5.604C17.125 6 15.537 6 12.36 6h-.72c-3.176 0-4.764 0-5.875.922c-1.11.922-1.403 2.483-1.989 5.604c-.823 4.389-1.234 6.583-.034 8.029C4.942 22 7.174 22 11.639 22h.722c4.465 0 6.698 0 7.897-1.445c.696-.84.85-1.93.696-3.555"></path>
                                                              </g>
                                                            </svg>
                                                        </span>
                                                        <span className="fs-13">فعلی</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div
                                                        className="d-flex flex-column flex-lg-row align-items-center gap-3 text-white rounded-4 p-2 delivered-orders">
                                                        <span className="rounded-3 p-2 position-relative">
                                                            <span
                                                                className="badge-icon">{insertRialComma(numberToPersian(0))}</span>
                                                            <svg id="order-delivered" viewBox="0 0 48 48">
                                                              <g fill="none" stroke="currentColor"
                                                                 strokeLinecap="round" strokeLinejoin="round"
                                                                 stroke-width="4">
                                                                <path
                                                                    d="m20 33l6 2s15-3 17-3s2 2 0 4s-9 8-15 8s-10-3-14-3H4"></path>
                                                                <path
                                                                    d="M4 29c2-2 6-5 10-5s13.5 4 15 6s-3 5-3 5M16 18v-8a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v16"></path>
                                                                <path d="M25 8h10v9H25z"></path>
                                                              </g>
                                                            </svg>
                                                        </span>
                                                        <span className="fs-13">تحویل شده</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div
                                                        className="d-flex flex-column flex-lg-row align-items-center gap-3 text-white rounded-4 p-2 canceled-orders">
                                                        <span className="rounded-3 p-2 position-relative">
                                                            <span
                                                                className="badge-icon">{insertRialComma(numberToPersian(0))}</span>
                                                            <svg id="order-canceled" viewBox="0 0 1024 1024">
                                                              <path
                                                                  d="m466.752 512l-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
                                                                  fill="currentColor"></path>
                                                              <path
                                                                  d="M512 896a384 384 0 1 0 0-768a384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896a448 448 0 0 1 0 896z"
                                                                  fill="currentColor"></path>
                                                            </svg>
                                                        </span>
                                                        <span className="fs-13">لغو شده</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div
                                                        className="d-flex flex-column flex-lg-row align-items-center gap-3 text-white rounded-4 p-2 returned-orders">
                                                        <span className="rounded-3 p-2 position-relative">
                                                            <span
                                                                className="badge-icon">{insertRialComma(numberToPersian(0))}</span>
                                                            <svg id="order-returned" viewBox="0 0 30 30"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                              <path
                                                                  d="m23.98,15.03c-.78-4.16-1.17-6.24-2.65-7.47-1.48-1.23-3.6-1.23-7.83-1.23h-.96c-4.23,0-6.35,0-7.83,1.23-1.48,1.23-1.87,3.31-2.65,7.47-1.1,5.85-1.65,8.78-.05,10.71,1.6,1.93,4.57,1.93,10.53,1.93h.96c5.95,0,8.93,0,10.53-1.93.93-1.12,1.13-2.57.93-4.74M9.01,6.33v-1.33c0-2.21,1.79-4,4-4s4,1.79,4,4v1.33"
                                                                  fill="none" stroke="currentColor"
                                                                  strokeLinecap="round" strokeMiterlimit="5.33"
                                                                  stroke-width="2"></path>
                                                              <g>
                                                                <path d="m9.62,12.07l-2.16,1.85,2.16,2.16" fill="none"
                                                                      stroke="currentColor" strokeLinecap="round"
                                                                      strokeLinejoin="round" stroke-width="1.3"></path>
                                                                <path
                                                                    d="m7.46,13.92h7.09c2.12,0,3.92,1.73,4.01,3.85.09,2.24-1.76,4.16-4.01,4.16h-5.24"
                                                                    fill="none"
                                                                    stroke="currentColor" strokeLinecap="round"
                                                                    strokeLinejoin="round" stroke-width="1.3"></path>
                                                              </g>
                                                            </svg>
                                                        </span>
                                                        <span className="fs-13">مرجوع شده</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="current-orders">
                                    <div className="d-flex flex-column gap-4">
                                        <div className="d-flex profile-sections-header align-items-center fs-17 gap-3">
                                            <span className="green-dot"></span>
                                            <span>سفارشات فعلی</span>
                                        </div>
                                        <div className="order-status dashboard-box-shadow rounded-3 p-3">
                                            <div>
                                                <div className="order-header d-flex justify-content-between align-items-center">
                                                    <div className="d-flex gap-2 align-items-center">
                                                        <span>
                                                            <svg id="warning" className="waiting-for-checkout" viewBox="0 0 32 32">
                                                              <path
                                                                  d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z"
                                                                  fill="currentColor"></path>
                                                              <path
                                                                  d="M15 8h2v11h-2zm1 14a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 22z"
                                                                  fill="currentColor"></path>
                                                            </svg>
                                                        </span>
                                                        <span className="waiting-for-checkout fs-14 fw-bold">در انتظار پرداخت</span>
                                                    </div>
                                                    <div><span><i className="fa-solid fa-angle-left"></i></span></div>
                                                </div>
                                                <div className="order-details">
                                                    <div className="d-flex justify-content-between my-3">
                                                        <div className="text-muted fs-13 fw-bold">زمان باقیمانده</div>
                                                        <div className="fs-12 remaining-time-to-checkout">{insertRialComma(numberToPersian(10))} دقیقه</div>
                                                    </div>
                                                    <div className="d-flex justify-content-between my-3">
                                                        <div className="text-muted fs-13 fw-bold">شماره سفارش</div>
                                                        <div className="fs-12 ">#{numberToPersian(204010)}</div>
                                                    </div>
                                                    <div className="d-flex justify-content-between my-3">
                                                        <div className="text-muted fs-13 fw-bold">مبلغ کل</div>
                                                        <div className="d-flex align-items-center gap-1">
                                                            <span className="fs-16 text-success fw-bold"> {insertRialComma(numberToPersian(1832000))} </span>
                                                            <svg id="toman" xmlns="http://www.w3.org/2000/svg"
                                                                 viewBox="0 0 14 14">
                                                                <path fill-rule="evenodd"
                                                                      d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z"
                                                                      clip-rule="evenodd"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="order-status dashboard-box-shadow rounded-3 p-3">
                                            <div>
                                                <div className="order-header d-flex justify-content-between align-items-center">
                                                    <div className="d-flex gap-2 align-items-center">
                                                        <span>
                                                            <svg id="outline-check" className="checked-out-order" viewBox="0 0 32 32">
                                                              <path
                                                                  d="m14 21.414l-5-5.001L10.413 15L14 18.586L21.585 11L23 12.415l-9 8.999z"
                                                                  fill="currentColor"></path>
                                                              <path
                                                                  d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z"
                                                                  fill="currentColor"></path>
                                                            </svg>
                                                        </span>
                                                        <span className="checked-out-order fs-14 fw-bold">پرداخت شده</span>
                                                    </div>
                                                    <div><span><i className="fa-solid fa-angle-left"></i></span></div>
                                                </div>
                                                <div className="order-details">
                                                    <div className="d-flex justify-content-between my-3">
                                                        <div className="text-muted fs-13 fw-bold">شماره سفارش</div>
                                                        <div className="fs-12 ">#{numberToPersian(205090)}</div>
                                                    </div>
                                                    <div className="d-flex justify-content-between my-3">
                                                        <div className="text-muted fs-13 fw-bold">مبلغ کل</div>
                                                        <div className="d-flex align-items-center gap-1">
                                                            <span className="fs-16 text-success fw-bold"> {insertRialComma(numberToPersian(5445000))} </span>
                                                            <svg id="toman" xmlns="http://www.w3.org/2000/svg"
                                                                 viewBox="0 0 14 14">
                                                                <path fill-rule="evenodd"
                                                                      d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z"
                                                                      clip-rule="evenodd"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between my-3">
                                                        <div className="text-muted fs-13 fw-bold">تاریخ</div>
                                                        <div className="fs-12 ">{numberToPersian("03")} / شهریور / {numberToPersian(1402)}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Profile;