import React, {useContext, useState} from "react";
import {Navbar, Footer, MobileToolbar} from "./index";
import {AppContext} from "../Context/AppContext";
import {Link, useLocation} from "react-router-dom";

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
                <div className={`${useLocation().pathname === "/profile" ? `active-option` : ``} user-options-menu-item border-bottom fs-12 fw-bold p-3`}>
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
                <div className={`${useLocation().pathname === "/orders" ? `active-option` : ``} user-options-menu-item border-bottom fs-12 fw-bold p-3`}>
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
                <div className={`${useLocation().pathname === "/favorites" ? `active-option` : ``} user-options-menu-item border-bottom fs-12 fw-bold p-3`}>
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
                <div className={`${useLocation().pathname === "/messages" ? `active-option` : ``} user-options-menu-item border-bottom fs-12 fw-bold p-3`}>
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
                <div className={`${useLocation().pathname === "/addresses" ? `active-option` : ``} user-options-menu-item border-bottom fs-12 fw-bold p-3`}>
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
                <div className={`${useLocation().pathname === "/profile-info" ? `active-option` : ``} user-options-menu-item border-bottom fs-12 fw-bold p-3`}>
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
                <div className="profile-wrapper d-flex flex-column flex-lg-row">
                    <div className="options">
                        <div className="bg-white p-4 rounded-3">
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
                                    <div className="user-number"><a class="text-muted" href="tel:+989121234567">09121234567</a></div>
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
                    <div className="dashboarad"> dashboard</div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Profile;