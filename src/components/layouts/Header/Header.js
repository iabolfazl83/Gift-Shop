import React, {useContext} from "react";
import {LoadingScreen} from "../../index"
import {Swiper, SwiperSlide} from 'swiper/react';
import '../../../../node_modules/swiper/swiper.min.css';
import '../../../../node_modules/swiper/swiper-bundle.min.css';
import 'swiper/css/pagination';
import 'swiper/css';
import {Autoplay, Pagination} from 'swiper/modules';
import {AppContext} from "../../../Context/AppContext";

function Header() {
    const {sliders} = useContext(AppContext)
    return (<header className="header mb-5 " id="#">
        <section className="header-main-content d-flex flex-column flex-lg-row container mt-3 gap-2">
            <div
                className="first-row d-flex flex-column col-lg-9 my-1 my-md-2 my-lg-3 gap-2 justify-content-lg-between">
                <div className="slider-content h-100">
                    <Swiper style={{height: "100%", borderRadius: "5px"}}
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
                <div className="first-row-child d-flex flex-row gap-2">
                    <div className="rounded col-8 d-flex align-items-stretch">
                        <div className="rounded">
                            <a href="">
                                <img className="rounded w-100 box-shadow h-100"
                                     src={require("../../../assets/images/product-slide-3.jpg")}
                                     alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="rounded col">
                        <div className="rounded">
                            <a href="">
                                <img className="rounded w-100 box-shadow"
                                     src={require("../../../assets/images/product-slide-1.jpg")}
                                     alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="second-row d-flex flex-row flex-lg-column justify-content-center col-lg my-lg-3 gap-2">
                <div className="rounded col-lg">
                    <div className="rounded">
                        <a href="">
                            <img className="rounded w-100 box-shadow"
                                 src={require("../../../assets/images/product-slide-4.jpg")}
                                 alt=""/>
                        </a>
                    </div>
                </div>
                <div className="rounded col-lg">
                    <div className="rounded">
                        <a href="">
                            <img className="rounded w-100 box-shadow"
                                 src={require("../../../assets/images/product-slide-6.jpg")}
                                 alt=""/>
                        </a>
                    </div>
                </div>
                <div className="rounded col-lg">
                    <div className="rounded">
                        <a href="">
                            <img className="rounded w-100 box-shadow"
                                 src={require("../../../assets/images/product-slide-7.jpg")}
                                 alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </header>)
}

export default Header;
