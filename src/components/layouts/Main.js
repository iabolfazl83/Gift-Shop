import React, {useContext} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/pagination';
import '../../../node_modules/swiper/swiper.css';
import '../../../node_modules/swiper/swiper-bundle.min.css';
import {Pagination, Navigation} from 'swiper/modules';
import {AppContext} from "../../Context/AppContext";
import {LoadingScreen} from "../index";

function Main() {
    const {loading} = useContext(AppContext);
    return (
        <main>
            <section className="new-products-container container">
                <div className="new-products-header d-flex justify-content-between align-items-center my-3 py-1">
                    <div>
                        <h3 className="section-header">جدیدترین محصولات</h3>
                    </div>
                    <div>
                        <a href="" className="all-products-link">مشاهده همه <i className="fa-solid fa-chevron-left"></i></a>
                    </div>
                </div>
                <div className="new-products-slider products-slider">
                    {
                        loading ? <LoadingScreen/> :
                            <Swiper dir="rtl" spaceBetween={20} slidesPerView="auto"
                                    pagination={{clickable: true,}} navigation={true} modules={[Pagination, Navigation]}
                                    className="mySwiper">
                                <SwiperSlide>
                                    <div
                                        className="product-slide">
                                        <div className="slide-image">
                                            <a href="">
                                                <img
                                                    src="https://api.gift-group.ir/files/1a3bb0f1-d16a-4ce8-84c2-68fef2b6809f.jpg"
                                                    alt="product"/>
                                            </a>
                                        </div>
                                        <div className="slide-caption">
                                            <a href="">
                                                <h3>گل خشک یک کیلویی قرمز مشکی</h3>
                                                <div className="product-price">
                                                    ریال
                                                    <span>347,000 </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-slide d-flex flex-column">
                                        <div className="slide-image">
                                            <a href="">
                                                <img
                                                    src="https://api.gift-group.ir/files/8513bda3-6d11-4f14-94d7-26a95db54abd.JPG"
                                                    alt="product"/>
                                            </a>
                                        </div>
                                        <div className="slide-caption">
                                            <a href="">
                                                <h3>گل خشک یک کیلویی قرمز مشکی</h3>
                                                <div className="product-price">
                                                    ریال
                                                    <span>347,000 </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-slide d-flex flex-column">
                                        <div className="slide-image">
                                            <a href="">
                                                <img
                                                    src="https://api.gift-group.ir/files/e97dc433-135d-4774-8e71-dd4ba5807e8b.jpg"
                                                    alt="product"/>
                                            </a>
                                        </div>
                                        <div className="slide-caption">
                                            <a href="">

                                                <h3>گل خشک یک کیلویی قرمز مشکی</h3>
                                                <div className="product-price">
                                                    ریال
                                                    <span>347,000 </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-slide d-flex flex-column">
                                        <div className="slide-image">
                                            <a href="">
                                                <img
                                                    src="https://api.gift-group.ir/files/1a3bb0f1-d16a-4ce8-84c2-68fef2b6809f.jpg"
                                                    alt="product"/>
                                            </a>
                                        </div>
                                        <div className="slide-caption">
                                            <a href="">
                                                <h3>گل خشک یک کیلویی قرمز مشکی</h3>
                                                <div className="product-price">
                                                    ریال
                                                    <span>347,000 </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-slide d-flex flex-column">
                                        <div className="slide-image">
                                            <a href="">
                                                <img
                                                    src="https://api.gift-group.ir/files/1a3bb0f1-d16a-4ce8-84c2-68fef2b6809f.jpg"
                                                    alt="product"/>
                                            </a>
                                        </div>
                                        <div className="slide-caption">
                                            <a href="">
                                                <h3>گل خشک یک کیلویی قرمز مشکی</h3>
                                                <div className="product-price">
                                                    ریال
                                                    <span>347,000 </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                    }
                </div>
            </section>

            <section className="special-offers-container container">
                <div className="special-offers-header d-flex justify-content-between align-items-center my-3 py-1">
                    <div>
                        <h3 className="section-header">آفروز | پیشنهادات دیجی شاپ</h3>
                    </div>
                    <div>
                        <a href="" className="all-products-link">مشاهده همه <i className="fa-solid fa-chevron-left"></i></a>
                    </div>
                </div>
                <div className="special-offers-slider products-slider">
                    {
                        loading ? <LoadingScreen/> :
                            <Swiper dir="rtl" spaceBetween={20} slidesPerView="auto"
                                    pagination={{clickable: true,}} navigation={true} modules={[Pagination, Navigation]}
                                    className="mySwiper">
                                <SwiperSlide>
                                    <div className="product-slide d-flex flex-column">
                                        <div className="slide-image">
                                            <a href="">
                                                <img
                                                    src="https://api.gift-group.ir/files/8513bda3-6d11-4f14-94d7-26a95db54abd.JPG"
                                                    alt="product"/>
                                            </a>
                                        </div>
                                        <div className="slide-caption">
                                            <a href="">
                                                <h3>گل خشک یک کیلویی قرمز مشکی</h3>
                                                <div className="product-price">
                                                    ریال
                                                    <span>347,000 </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-slide d-flex flex-column">
                                        <div className="slide-image">
                                            <a href="">
                                                <img
                                                    src="https://api.gift-group.ir/files/e97dc433-135d-4774-8e71-dd4ba5807e8b.jpg"
                                                    alt="product"/>
                                            </a>
                                        </div>
                                        <div className="slide-caption">
                                            <a href="">

                                                <h3>گل خشک یک کیلویی قرمز مشکی</h3>
                                                <div className="product-price">
                                                    ریال
                                                    <span>347,000 </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-slide d-flex flex-column">
                                        <div className="slide-image">
                                            <a href="">
                                                <img
                                                    src="https://api.gift-group.ir/files/1a3bb0f1-d16a-4ce8-84c2-68fef2b6809f.jpg"
                                                    alt="product"/>
                                            </a>
                                        </div>
                                        <div className="slide-caption">
                                            <a href="">
                                                <h3>گل خشک یک کیلویی قرمز مشکی</h3>
                                                <div className="product-price">
                                                    ریال
                                                    <span>347,000 </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-slide d-flex flex-column">
                                        <div className="slide-image">
                                            <a href="">
                                                <img
                                                    src="https://api.gift-group.ir/files/1a3bb0f1-d16a-4ce8-84c2-68fef2b6809f.jpg"
                                                    alt="product"/>
                                            </a>
                                        </div>
                                        <div className="slide-caption">
                                            <a href="">
                                                <h3>گل خشک یک کیلویی قرمز مشکی</h3>
                                                <div className="product-price">
                                                    ریال
                                                    <span>347,000 </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                    }
                </div>
            </section>

            <section className="top-sellers-container container">
                <div className="top-sellers-header d-flex justify-content-between align-items-center my-3 py-1">
                    <div>
                        <h3 className="section-header">پر فروش ترین محصولات</h3>
                    </div>
                    <div>
                        <a href="" className="all-products-link">مشاهده همه <i className="fa-solid fa-chevron-left"></i></a>
                    </div>
                </div>
                <div className="top-sellers-slider products-slider">
                    {
                        loading ? <LoadingScreen/> :
                            <Swiper dir="rtl" spaceBetween={20} slidesPerView="auto"
                                    pagination={{clickable: true,}} navigation={true} modules={[Pagination, Navigation]}
                                    className="mySwiper">
                                <SwiperSlide>
                                    <div className="product-slide d-flex flex-column">
                                        <div className="slide-image">
                                            <a href="">
                                                <img
                                                    src="https://api.gift-group.ir/files/8513bda3-6d11-4f14-94d7-26a95db54abd.JPG"
                                                    alt="product"/>
                                            </a>
                                        </div>
                                        <div className="slide-caption">
                                            <a href="">
                                                <h3>گل خشک یک کیلویی قرمز مشکی</h3>
                                                <div className="product-price">
                                                    ریال
                                                    <span>347,000 </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-slide d-flex flex-column">
                                        <div className="slide-image">
                                            <a href="">
                                                <img
                                                    src="https://api.gift-group.ir/files/e97dc433-135d-4774-8e71-dd4ba5807e8b.jpg"
                                                    alt="product"/>
                                            </a>
                                        </div>
                                        <div className="slide-caption">
                                            <a href="">

                                                <h3>گل خشک یک کیلویی قرمز مشکی</h3>
                                                <div className="product-price">
                                                    ریال
                                                    <span>347,000 </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-slide d-flex flex-column">
                                        <div className="slide-image">
                                            <a href="">
                                                <img
                                                    src="https://api.gift-group.ir/files/9fbc5c71-2078-48de-add0-30f13a3eb854.JPG"
                                                    alt="product"/>
                                            </a>
                                        </div>
                                        <div className="slide-caption">
                                            <a href="">
                                                <h3>گل خشک یک کیلویی قرمز مشکی</h3>
                                                <div className="product-price">
                                                    ریال
                                                    <span>347,000 </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-slide d-flex flex-column">
                                        <div className="slide-image">
                                            <a href="">
                                                <img
                                                    src="https://api.gift-group.ir/files/9fbc5c71-2078-48de-add0-30f13a3eb854.JPG"
                                                    alt="product"/>
                                            </a>
                                        </div>
                                        <div className="slide-caption">
                                            <a href="">
                                                <h3>گل خشک یک کیلویی قرمز مشکی</h3>
                                                <div className="product-price">
                                                    ریال
                                                    <span>347,000 </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                    }
                </div>
            </section>

            <section className="posters-container container my-4">
                <div className="posters d-flex flex-column gap-4">
                    <div className="poster rounded-4"><a href="">
                        <img className="rounded rounded-4 w-100"
                             src={require("../../assets/images/product-2.jpg")} alt="product"/></a>
                    </div>
                    <div className="poster rounded-4"><a href="">
                        <img className="rounded rounded-4 w-100"
                             src={require("../../assets/images/product-5.jpg")} alt="product"/></a>
                    </div>
                </div>
            </section>

            <section className="gift-types-container container">
                <div
                    className="gift-types-header position-relative d-flex justify-content-center align-items-center my-3 py-1">
                    <h4 className="section-header">هدیه چی بدم؟!</h4>
                </div>
                <div className="gift-types-slider-container">
                    <div className="gift-types-slider products-slider">
                        <Swiper dir="rtl" spaceBetween={10} slidesPerView="auto"
                                pagination={{clickable: true,}} navigation={true} modules={[Pagination, Navigation]}
                                className="mySwiper">
                            <SwiperSlide>
                                <div className="gift-types-slide">
                                    <div className="slide-image">
                                        <svg
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 53.5 60.377">
                                            <g id="svg-1613" data-name="Group 4009"
                                               transform="translate(489.682 -4897.808)">
                                                <g id="Group_3736" data-name="Group 3736"
                                                   transform="translate(-488.932 4898.58)">
                                                    <g id="Group_3709" data-name="Group 3709"
                                                       transform="translate(0 0)">
                                                        <g id="Group_3124" data-name="Group 3124"
                                                           transform="translate(19.235)">
                                                            <g id="Group_3123" data-name="Group 3123">
                                                                <path id="Path_2475" data-name="Path 2475"
                                                                      d="M106.69,376.859s3.077-8.883,5.98-5.98S106.69,376.859,106.69,376.859Z"
                                                                      transform="translate(-99.93 -370.296)" fill="none"
                                                                      stroke="#9f2c90" strokeMiterlimit="10"
                                                                      strokeWidth="1.5px"></path>
                                                                <path id="Path_2476" data-name="Path 2476"
                                                                      d="M102.846,376.859s-3.077-8.883-5.981-5.98S102.846,376.859,102.846,376.859Z"
                                                                      transform="translate(-96.282 -370.296)"
                                                                      fill="none" stroke="#9f2c90"
                                                                      strokeMiterlimit="10"
                                                                      strokeWidth="1.5px"></path>
                                                            </g>
                                                        </g>
                                                        <ellipse id="Ellipse_882" data-name="Ellipse 882" cx="26"
                                                                 cy="26.05" rx="26" ry="26.05"
                                                                 transform="translate(0 6.754)" fill="#FFFFFF"
                                                                 stroke="#9f2c90" strokeMiterlimit="10"
                                                                 strokeWidth="1.5px"></ellipse>
                                                        <path id="Path_2480" data-name="Path 2480" d="M104.334,429.229"
                                                              transform="translate(-79.889 -390.377)"></path>
                                                        <g id="Group_3700" data-name="Group 3700"
                                                           transform="translate(12.967 16.278)">
                                                            <g id="Group_3685" data-name="Group 3685"
                                                               transform="translate(17.421 0)">
                                                                <g id="Group_3684" data-name="Group 3684"
                                                                   transform="translate(0 0)">
                                                                    <path id="Path_2782" data-name="Path 2782"
                                                                          d="M650.968,101.594a.916.916,0,0,1-.915-.915,1.177,1.177,0,1,0-2.354,0,.917.917,0,0,1-.916.915,1.177,1.177,0,0,0,0,2.354.917.917,0,0,1,.916.915,1.177,1.177,0,1,0,2.354,0,.916.916,0,0,1,.915-.915,1.177,1.177,0,1,0,0-2.354Zm-2.093,2.518a2.235,2.235,0,0,0-1.341-1.341,1.341,1.341,0,1,1,2.682,0A2.234,2.234,0,0,0,648.876,104.111Z"
                                                                          transform="translate(-645.606 -99.501)"
                                                                          fill="#9f2c90" stroke="#FFFFFF"
                                                                          strokeWidth="0.5px"></path>
                                                                </g>
                                                            </g>
                                                            <g id="Group_3687" data-name="Group 3687"
                                                               transform="translate(21.422 5.626)">
                                                                <g id="Group_3686" data-name="Group 3686">
                                                                    <path id="Path_2783" data-name="Path 2783"
                                                                          d="M712.152,187.629a.916.916,0,0,1-.916-.915,1.177,1.177,0,0,0-2.354,0,.916.916,0,0,1-.916.915,1.177,1.177,0,0,0,0,2.354.917.917,0,0,1,.916.915,1.177,1.177,0,0,0,2.354,0,.917.917,0,0,1,.916-.915,1.177,1.177,0,0,0,0-2.354Zm-2.093,2.518a2.234,2.234,0,0,0-1.341-1.341,1.341,1.341,0,1,1,2.682,0A2.235,2.235,0,0,0,710.06,190.146Z"
                                                                          transform="translate(-706.79 -185.536)"
                                                                          fill="#9f2c90" stroke="#FFFFFF"
                                                                          strokeWidth="0.5px"></path>
                                                                </g>
                                                            </g>
                                                            <g id="Group_3689" data-name="Group 3689"
                                                               transform="translate(4.75 8.027)">
                                                                <g id="Group_3688" data-name="Group 3688"
                                                                   transform="translate(0 0)">
                                                                    <path id="Path_2784" data-name="Path 2784"
                                                                          d="M460.486,222.737l-2.677-.473a.654.654,0,0,0-.654.276L456.1,224.1a6.452,6.452,0,0,1-3.763,2.633.654.654,0,1,0,.32,1.268,7.758,7.758,0,0,0,4.525-3.166l.821-1.207,2.26.4a.654.654,0,1,0,.227-1.288Z"
                                                                          transform="translate(-451.838 -222.254)"
                                                                          fill="#9f2c90" stroke="#FFFFFF"
                                                                          strokeWidth="0.5px"></path>
                                                                </g>
                                                            </g>
                                                            <g id="Group_3691" data-name="Group 3691"
                                                               transform="translate(16.848 30.16)">
                                                                <g id="Group_3690" data-name="Group 3690"
                                                                   transform="translate(0)">
                                                                    <path id="Path_2785" data-name="Path 2785"
                                                                          d="M638.138,561.252a.7.7,0,0,0-.037-.122.655.655,0,0,0-.354-.354.7.7,0,0,0-.122-.037.646.646,0,0,0-.256,0,.663.663,0,0,0-.122.037.641.641,0,0,0-.113.06.664.664,0,0,0-.1.082.631.631,0,0,0-.081.1.672.672,0,0,0-.06.112.7.7,0,0,0-.037.122.657.657,0,0,0-.013.128.645.645,0,0,0,.013.128.665.665,0,0,0,.1.235.636.636,0,0,0,.181.181.662.662,0,0,0,.235.1.645.645,0,0,0,.128.013.657.657,0,0,0,.128-.013.691.691,0,0,0,.122-.037.682.682,0,0,0,.112-.06.63.63,0,0,0,.1-.081.661.661,0,0,0,.082-.1.64.64,0,0,0,.06-.113.662.662,0,0,0,.038-.122.644.644,0,0,0,.012-.128A.656.656,0,0,0,638.138,561.252Z"
                                                                          transform="translate(-636.842 -560.726)"
                                                                          fill="#9f2c90" stroke="#FFFFFF"
                                                                          strokeWidth="0.5px"></path>
                                                                </g>
                                                            </g>
                                                            <g id="Group_3693" data-name="Group 3693"
                                                               transform="translate(0 5.493)">
                                                                <g id="Group_3692" data-name="Group 3692"
                                                                   transform="translate(0 0)">
                                                                    <path id="Path_2786" data-name="Path 2786"
                                                                          d="M403.3,202.98a.655.655,0,0,0-.514-.158,2.242,2.242,0,0,1-1.644-.37,1.112,1.112,0,0,1-.1-1.018,26.594,26.594,0,0,0,.5-4.542c0-3.713-.551-6.559-1.685-8.7-1.649-3.111-4.5-4.688-8.483-4.688s-6.835,1.577-8.484,4.688c-1.134,2.139-1.685,4.985-1.685,8.7a24.752,24.752,0,0,0,.467,4.542,1.114,1.114,0,0,1-.1,1.017c-.372.42-1.338.409-1.646.372a.654.654,0,0,0-.736.649c0,.99.568,2.362,3.2,3.407v3.962a.654.654,0,0,0,.654.654h16.629a.654.654,0,0,0,.654-.654v-3.962c2.628-1.044,3.2-2.416,3.2-3.407A.654.654,0,0,0,403.3,202.98Zm-4.283,7.205H383.7v-.7h10.283a.654.654,0,1,0,0-1.308H383.7c0-.009,0-2.077,0-2.086a1.228,1.228,0,0,1,1.226-1.226h4.33a2.176,2.176,0,0,0,4.21,0h4.33a1.228,1.228,0,0,1,1.226,1.226C399.02,206.1,399.02,210.177,399.02,210.186ZM390,201.633a5.431,5.431,0,0,1-4.076-5.263v-2.055a10.5,10.5,0,0,0,5.449-3.886l.513.09a5.932,5.932,0,0,1,4.907,5.85,5.431,5.431,0,0,1-4.076,5.263.654.654,0,0,0-.491.633v2.044a.868.868,0,0,1-1.736,0v-2.044A.654.654,0,0,0,390,201.633Zm10.255,3.854a2.539,2.539,0,0,0-2.462-1.933h-4.259v-.8a6.739,6.739,0,0,0,4.567-6.384,7.238,7.238,0,0,0-5.988-7.138l-.924-.163a.654.654,0,0,0-.655.276l-.058.085a9.2,9.2,0,0,1-5.367,3.754.654.654,0,0,0-.494.634v2.551a6.739,6.739,0,0,0,4.567,6.384v.8h-4.259a2.539,2.539,0,0,0-2.462,1.933,3.943,3.943,0,0,1-1.775-1.357,2.794,2.794,0,0,0,1.863-.808,2.3,2.3,0,0,0,.4-2.2,23.652,23.652,0,0,1-.429-4.23,17.337,17.337,0,0,1,1.533-8.086c1.424-2.687,3.821-3.993,7.328-3.993s5.9,1.306,7.328,3.993a17.337,17.337,0,0,1,1.533,8.086,25,25,0,0,1-.467,4.23,2.3,2.3,0,0,0,.4,2.2,2.794,2.794,0,0,0,1.863.808A3.944,3.944,0,0,1,400.256,205.486Z"
                                                                          transform="translate(-379.194 -183.506)"
                                                                          fill="#9f2c90" stroke="#FFFFFF"
                                                                          strokeWidth="0.5px"></path>
                                                                </g>
                                                            </g>
                                                            <g id="Group_3695" data-name="Group 3695"
                                                               transform="translate(7.813 17.083)">
                                                                <g id="Group_3694" data-name="Group 3694">
                                                                    <path id="Path_2787" data-name="Path 2787"
                                                                          d="M501.765,360.94a.654.654,0,0,0-.925,0,.741.741,0,0,1-1.048,0,.654.654,0,0,0-.925.925,2.049,2.049,0,0,0,2.9,0A.654.654,0,0,0,501.765,360.94Z"
                                                                          transform="translate(-498.675 -360.748)"
                                                                          fill="#9f2c90" stroke="#FFFFFF"
                                                                          strokeWidth="0.5px"></path>
                                                                </g>
                                                            </g>
                                                            <g id="Group_3697" data-name="Group 3697"
                                                               transform="translate(13.237 17.084)">
                                                                <g id="Group_3696" data-name="Group 3696"
                                                                   transform="translate(0)">
                                                                    <path id="Path_2788" data-name="Path 2788"
                                                                          d="M584.7,360.941a.654.654,0,0,0-.925,0,.741.741,0,0,1-1.048,0,.654.654,0,1,0-.925.925,2.049,2.049,0,0,0,2.9,0A.654.654,0,0,0,584.7,360.941Z"
                                                                          transform="translate(-581.612 -360.749)"
                                                                          fill="#9f2c90" stroke="#FFFFFF"
                                                                          strokeWidth="0.5px"></path>
                                                                </g>
                                                            </g>
                                                            <g id="Group_3699" data-name="Group 3699"
                                                               transform="translate(10.525 20.819)">
                                                                <g id="Group_3698" data-name="Group 3698">
                                                                    <path id="Path_2789" data-name="Path 2789"
                                                                          d="M543.232,418.068a.654.654,0,0,0-.925,0,.742.742,0,0,1-1.048,0,.654.654,0,1,0-.925.925,2.052,2.052,0,0,0,2.9,0A.654.654,0,0,0,543.232,418.068Z"
                                                                          transform="translate(-540.143 -417.877)"
                                                                          fill="#9f2c90" stroke="#FFFFFF"
                                                                          strokeWidth="0.5px"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="slide-caption">
                                        <div>
                                            <h6>هدیه برای خانم ها</h6>
                                            <a href="" className="gift-types-btn">مشاهده</a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="gift-types-slide">
                                    <div className="slide-image">
                                        <svg xmlnsXlink="http://www.w3.org/1999/xlink"
                                             xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 53.508 60.192">
                                            <g id="svg-4928" data-name="Group 4008"
                                               transform="translate(637.754 -4897.808)">
                                                <g id="Group_3737" data-name="Group 3737"
                                                   transform="translate(-637.004 4898.58)">
                                                    <g id="Group_3638" data-name="Group 3638"
                                                       transform="translate(19.38 0)">
                                                        <g id="Group_3123" data-name="Group 3123">
                                                            <path id="Path_2475" data-name="Path 2475"
                                                                  d="M106.69,376.921s3.106-8.967,6.037-6.036S106.69,376.921,106.69,376.921Z"
                                                                  transform="translate(-99.866 -370.296)" fill="none"
                                                                  stroke="#9f2c90" strokeMiterlimit="10"
                                                                  stroke-width="1.5px"></path>
                                                            <path id="Path_2476" data-name="Path 2476"
                                                                  d="M102.907,376.921s-3.106-8.967-6.037-6.036S102.907,376.921,102.907,376.921Z"
                                                                  transform="translate(-96.282 -370.296)" fill="none"
                                                                  stroke="#9f2c90" strokeMiterlimit="10"
                                                                  stroke-width="1.5px"></path>
                                                        </g>
                                                    </g>
                                                    <ellipse id="Ellipse_968" data-name="Ellipse 968" cx="26.004"
                                                             cy="26.023" rx="26.004" ry="26.023"
                                                             transform="translate(0 6.625)" fill="#FFFFFF"
                                                             stroke="#9f2c90" strokeMiterlimit="10"
                                                             stroke-width="1.5px"></ellipse>
                                                    <path id="Path_2747" data-name="Path 2747" d="M104.334,429.229"
                                                          transform="translate(-79.683 -390.371)"></path>
                                                    <path id="Path_2826" data-name="Path 2826"
                                                          d="M0,0,1.424.317,2.847.635,1.861,1.709.874,2.783.437,1.392Z"
                                                          transform="translate(11.825 37.996) rotate(-118)" fill="none"
                                                          stroke="#9f2c90" strokeMiterlimit="10"
                                                          stroke-width="1"></path>
                                                    <g id="Group_3707" data-name="Group 3707"
                                                       transform="translate(12.702 17.409)">
                                                        <g id="manager">
                                                            <path id="Path_2816" data-name="Path 2816"
                                                                  d="M109.379,10H107a6,6,0,0,0-6,6v2.4l14.4.024v-2.4A6.022,6.022,0,0,0,109.379,10Zm0,0"
                                                                  transform="translate(-94.939 -9.4)"
                                                                  fill="#FFFFFF"></path>
                                                            <path id="Path_2817" data-name="Path 2817"
                                                                  d="M28.652,281.528l-2.388-2.149-.051.029-7.171-.021-.028-.017-2.4,2.157c-2.989,0-6.613,2.427-6.613,5.421v5.78H35.265v-5.781C35.265,283.955,31.642,281.528,28.652,281.528Zm0,0"
                                                                  transform="translate(-9.404 -262.608)"
                                                                  fill="#FAFAFF"></path>
                                                            <path id="Path_2818" data-name="Path 2818"
                                                                  d="M113.182,96.93a7.312,7.312,0,0,1-10.017,0L101,100.1v1.572a7.194,7.194,0,0,0,3.552,6.218l.011-.01.017.027,3.593,5.748,3.579-5.727.03-.048.021.019a7.2,7.2,0,0,0,3.6-6.226v-1.548Zm0,0"
                                                                  transform="translate(-94.94 -91.114)"
                                                                  fill="#FFFFFF"></path>
                                                            <path id="Path_2820" data-name="Path 2820"
                                                                  d="M261.4,161.2a.6.6,0,1,0-.6-.6A.6.6,0,0,0,261.4,161.2Zm0,0"
                                                                  transform="translate(-245.152 -150.399)"
                                                                  fill="#9F2C90"></path>
                                                            <path id="Path_2821" data-name="Path 2821"
                                                                  d="M161.4,161.2a.6.6,0,1,0-.6-.6A.6.6,0,0,0,161.4,161.2Zm0,0"
                                                                  transform="translate(-151.152 -150.399)"
                                                                  fill="#9F2C90"></path>
                                                            <path id="Path_2822" data-name="Path 2822"
                                                                  d="M188.672,230.83a3.774,3.774,0,0,0,3.177.014.6.6,0,1,0-.5-1.09,2.574,2.574,0,0,1-2.164-.01.6.6,0,0,0-.512,1.085Zm0,0"
                                                                  transform="translate(-177.027 -215.905)"
                                                                  fill="#9F2C90"></path>
                                                            <path id="Path_2823" data-name="Path 2823"
                                                                  d="M26.461,24.348c0-3.3-3.754-5.887-6.972-6.01l-1.642-1.476a7.83,7.83,0,0,0,3.213-6.3V6.6A6.615,6.615,0,0,0,14.446,0H12.039A6.579,6.579,0,0,0,5.46,6.6v3.96a7.842,7.842,0,0,0,3.174,6.29L6.978,18.338C3.765,18.461,0,21.042,0,24.348v5.774a.6.6,0,0,0,.6.6H25.861a.6.6,0,0,0,.6-.6ZM11.919,26.762h2.655l.629,2.76H11.272Zm2.706-1.2H11.881l-.46-1.434,1.828-.914,1.867.934Zm-1.377-4.151-2.085-3.336a7.792,7.792,0,0,0,4.167,0Zm.859.89,2.881-4.61,1.554,1.4-1.977,4.443ZM12.039,1.2h2.4a5.417,5.417,0,0,1,5.421,5.4v.5l-1.17-1.685a.167.167,0,0,0-.026-.03.611.611,0,0,0-.852.015,5.918,5.918,0,0,1-4.579,1.8A5.921,5.921,0,0,1,8.607,5.349a.156.156,0,0,0-.029-.024.609.609,0,0,0-.849.154L6.66,7.045V6.6a5.4,5.4,0,0,1,5.379-5.4ZM6.66,10.561V9.174L8.327,6.732A7.188,7.188,0,0,0,13.234,8.4a7.186,7.186,0,0,0,4.911-1.672L19.861,9.2v1.36a6.6,6.6,0,1,1-13.2,0Zm2.848,7.131L12.39,22.3,9.932,23.531,7.955,19.088ZM1.2,24.348c0-2.472,3-4.606,5.631-4.8l2.245,5.044a.6.6,0,0,0,.823.289l.421-.21.487,1.516-.782,3.335H1.2Zm24.061,5.174H16.414L15.656,26.2l.522-1.507.391.2a.6.6,0,0,0,.739-.163.59.59,0,0,0,.08-.136l2.242-5.038c2.626.194,5.631,2.329,5.631,4.8Zm0,0"
                                                                  transform="translate(0 0)" fill="#9F2C90"></path>
                                                            <path id="Path_2824" data-name="Path 2824"
                                                                  d="M303.8,446h-2.4a.6.6,0,0,0,0,1.2h2.4a.6.6,0,1,0,0-1.2Zm0,0"
                                                                  transform="translate(-282.752 -419.239)"
                                                                  fill="#9F2C90"></path>
                                                            <path id="Path_2825" data-name="Path 2825"
                                                                  d="M381.6,447.2a.6.6,0,1,0-.6-.6A.6.6,0,0,0,381.6,447.2Zm0,0"
                                                                  transform="translate(-358.139 -419.239)"
                                                                  fill="#9F2C90"></path>
                                                        </g>
                                                    </g>
                                                    <path id="Path_2415" data-name="Path 2415"
                                                          d="M15.685,43.094a1.575,1.575,0,1,0,1.574,1.576v0A1.578,1.578,0,0,0,15.685,43.094Zm0,2.362a.787.787,0,1,1,.786-.788A.786.786,0,0,1,15.685,45.456Z"
                                                          transform="translate(21.905 -18.634)" fill="#9F2C90"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="slide-caption">
                                        <div>
                                            <h6>هدیه برای آقایان</h6>
                                            <a href="" className="gift-types-btn">مشاهده</a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="gift-types-slide">
                                    <div className="slide-image">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             xmlnsXlink="http://www.w3.org/1999/xlink"
                                             viewBox="0 0 53.5 60.43">
                                            <defs>
                                                <clipPath id="clip-path">
                                                    <rect id="svg-4646" data-name="Rectangle 1410" width="34.458"
                                                          height="28.271" fill="none"></rect>
                                                </clipPath>
                                            </defs>
                                            <g id="Group_4010" data-name="Group 4010"
                                               transform="translate(-76.294 -359.131)">
                                                <g id="Group_3278" data-name="Group 3278"
                                                   transform="translate(77.044 359.902)">
                                                    <g id="Group_3084" data-name="Group 3084"
                                                       transform="translate(18.773 0)">
                                                        <g id="Group_3083" data-name="Group 3083">
                                                            <path id="Path_2416" data-name="Path 2416"
                                                                  d="M330.178,375.478s3.209-9.266,6.237-6.237S330.178,375.478,330.178,375.478Z"
                                                                  transform="translate(-323.126 -368.632)" fill="none"
                                                                  stroke="#9f2c90" strokeMiterlimit="10"
                                                                  stroke-width="1.5px"></path>
                                                            <path id="Path_2417" data-name="Path 2417"
                                                                  d="M326.616,375.478s-3.209-9.266-6.237-6.237S326.616,375.478,326.616,375.478Z"
                                                                  transform="translate(-319.77 -368.632)" fill="none"
                                                                  stroke="#9f2c90" strokeMiterlimit="10"
                                                                  stroke-width="1.5px"></path>
                                                        </g>
                                                    </g>
                                                    <ellipse id="Ellipse_880" data-name="Ellipse 880" cx="26"
                                                             cy="25.904" rx="26" ry="25.904"
                                                             transform="translate(0 7.1)" fill="#FFFFFF"
                                                             stroke="#9f2c90" strokeMiterlimit="10"
                                                             stroke-width="1.5px"></ellipse>
                                                    <g id="Group_3087" data-name="Group 3087"
                                                       transform="translate(9.88 20.652)">
                                                        <rect id="Rectangle_1402" data-name="Rectangle 1402"
                                                              width="1.149" height="2.298"
                                                              transform="translate(27.567 7.529)" fill="#9f2c90"></rect>
                                                        <rect id="Rectangle_1403" data-name="Rectangle 1403"
                                                              width="1.149" height="2.298"
                                                              transform="translate(25.269 7.529)" fill="#9f2c90"></rect>
                                                        <rect id="Rectangle_1404" data-name="Rectangle 1404"
                                                              width="1.149" height="2.298"
                                                              transform="translate(22.972 7.529)" fill="#9f2c90"></rect>
                                                        <rect id="Rectangle_1405" data-name="Rectangle 1405"
                                                              width="1.149" height="2.298"
                                                              transform="translate(20.675 7.529)" fill="#9f2c90"></rect>
                                                        <rect id="Rectangle_1406" data-name="Rectangle 1406"
                                                              width="1.149" height="1.149"
                                                              transform="translate(27.567 18.441)"
                                                              fill="#9f2c90"></rect>
                                                        <rect id="Rectangle_1407" data-name="Rectangle 1407"
                                                              width="1.149" height="1.149"
                                                              transform="translate(25.269 18.441)"
                                                              fill="#9f2c90"></rect>
                                                        <rect id="Rectangle_1408" data-name="Rectangle 1408"
                                                              width="1.149" height="1.149"
                                                              transform="translate(22.972 18.441)"
                                                              fill="#9f2c90"></rect>
                                                        <g id="Group_3086" data-name="Group 3086">
                                                            <g id="Group_3085" data-name="Group 3085"
                                                               clipPath="url(#clip-path)">
                                                                <rect id="Rectangle_1409" data-name="Rectangle 1409"
                                                                      width="1.149" height="1.149"
                                                                      transform="translate(20.675 18.441)"
                                                                      fill="#9f2c90"></rect>
                                                                <path id="Path_2418" data-name="Path 2418"
                                                                      d="M308.515,417.441v3.489a2.875,2.875,0,0,0,2.871,2.872H321.77l10.222,4.906a2.673,2.673,0,0,0,3.568-1.263l1.776-3.733a2.871,2.871,0,0,0,2.193-2.781V419.1l1.461-3.07a2.689,2.689,0,0,0-1.259-3.576l-.2-.1v-4.064a2.875,2.875,0,0,0-2.871-2.871h-11.58l-9.025-4.331a2.67,2.67,0,0,0-3.567,1.263l-1.478,3.106a2.866,2.866,0,0,0-2.492,2.833v2.4l-1.462,3.071a2.69,2.69,0,0,0,1.259,3.575Zm31.014-3.761a1.539,1.539,0,0,1,.424,1.857l-.424.89Zm-5.008,13.267a1.521,1.521,0,0,1-2.033.722l-8.064-3.868h11.6Zm3.859-6.018a1.723,1.723,0,0,1-1.722,1.724H317.7v-6.642a6.845,6.845,0,0,0,4.754,1.912v-1.148a5.708,5.708,0,0,1-3.957-1.589H338.38Zm-20.14-7.248,1.13-2.84a1.305,1.305,0,1,1,1.694,1.7Zm18.418-7.11a1.723,1.723,0,0,1,1.722,1.723v5.743H320.433l1.059-.425a2.458,2.458,0,1,0-3.188-3.2l-.6,1.505v-5.35Zm-23.134-3.722a1.521,1.521,0,0,1,2.033-.722l6.868,3.3H312.3Zm-3.86,5.445a1.723,1.723,0,0,1,1.723-1.723h5.169v4.949l-.44-1.1a2.454,2.454,0,1,0-3.188,3.2l1.058.425h-4.323Zm6.517,5.387-2.825-1.137a1.309,1.309,0,1,1,1.693-1.705Zm-6.517,1.5h6.254a5.708,5.708,0,0,1-3.957,1.589v1.148a6.838,6.838,0,0,0,4.594-1.766v6.5h-5.169a1.724,1.724,0,0,1-1.723-1.724Zm-1.573-.924.424-.892v2.749a1.538,1.538,0,0,1-.424-1.857Zm0,0"
                                                                      transform="translate(-306.793 -400.767)"
                                                                      fill="#9f2c90"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                    <g id="Group_3088" data-name="Group 3088"
                                                       transform="translate(34.849 15.556)">
                                                        <path id="Path_2419" data-name="Path 2419"
                                                              d="M344.141,398.545a.112.112,0,0,1,.056.031c.031.029.087.03.407.008.493-.035,1-.083,1-.1a.818.818,0,0,1,.179-.025,3.764,3.764,0,0,0,.518-.074l.106-.03c.044-.012.049-.025.044-.1s-.006-.091-.1-.107c-.075-.012-1.452.076-1.451.093s-.173.026-.5.062a1.516,1.516,0,0,0-.214.032,1.053,1.053,0,0,0-.063.191.018.018,0,0,0,.02.019Z"
                                                              transform="translate(-344.121 -394.201)"
                                                              fill="#9F2C90"></path>
                                                        <path id="Path_2420" data-name="Path 2420"
                                                              d="M345.9,395.61c.03.022.1.079.154.124a2.269,2.269,0,0,0,.312.249.467.467,0,0,1,.092.067l.19.157c.167.136.361.2.388.133.007-.018.022-.056.034-.083.03-.069.009-.113-.086-.181s-.264-.206-.469-.383a.726.726,0,0,0-.181-.131.029.029,0,0,1-.029-.029c0-.018-.011-.03-.022-.03a.134.134,0,0,1-.064-.035.919.919,0,0,0-.263-.124.091.091,0,0,0-.089.081.07.07,0,0,1-.016.053c-.034.024-.01.09.048.132Z"
                                                              transform="translate(-344.675 -393.298)"
                                                              fill="#9F2C90"></path>
                                                        <path id="Path_2421" data-name="Path 2421"
                                                              d="M346.53,401.226c.03.04.066.074.077.073a.919.919,0,0,0,.213-.156.086.086,0,0,1,.045-.031.117.117,0,0,0,.073-.087.023.023,0,0,1,.02-.024c.029,0,.079-.06.064-.075s.009-.023.037-.039a.192.192,0,0,0,.073-.081c.013-.029.03-.053.04-.054s.016-.014.014-.032a.029.029,0,0,1,.024-.033c.013,0,.047-.035.072-.072a1.065,1.065,0,0,1,.081-.105.106.106,0,0,0,.031-.062.03.03,0,0,1,.029-.029.032.032,0,0,0,.029-.035.171.171,0,0,1,.045-.085.192.192,0,0,0,.047-.068c0-.009.012-.027.028-.041.064-.056.027-.28-.047-.29a.477.477,0,0,0-.238.14.213.213,0,0,1-.066.055c-.009,0-.011.008,0,.018s-.014.037-.046.061a.211.211,0,0,0-.065.077.184.184,0,0,1-.068.072c-.034.023-.06.055-.058.072s-.007.033-.02.034a.727.727,0,0,0-.194.234c.006.006,0,.012-.014.014a1.315,1.315,0,0,0-.265.316.253.253,0,0,0,.043.233Z"
                                                              transform="translate(-344.881 -394.767)"
                                                              fill="#9F2C90"></path>
                                                        <path id="Path_2422" data-name="Path 2422"
                                                              d="M348.914,398.093a.655.655,0,0,0,.249.257.563.563,0,0,0,.435-.028c.239-.093.314-.219.308-.524,0-.073-.01-.132-.02-.131s-.018-.013-.02-.029c0-.032-.112-.154-.137-.152a.166.166,0,0,1-.064-.038.158.158,0,0,0-.093-.036.081.081,0,0,1-.061-.017.022.022,0,0,0-.032-.007.07.07,0,0,1-.056,0,.462.462,0,0,0-.409.06.085.085,0,0,1-.044.031c-.011,0-.018.014-.016.033s-.005.031-.016.032-.034.071-.045.163a.332.332,0,0,1-.013.055.518.518,0,0,0,.033.336Z"
                                                              transform="translate(-345.651 -393.948)"
                                                              fill="#9F2C90"></path>
                                                        <path id="Path_2423" data-name="Path 2423"
                                                              d="M348.75,392.866a1.883,1.883,0,0,1,.035.247c.032.308.055.491.075.6.009.045.026.155.039.24a3.963,3.963,0,0,0,.145.738c.026.056.031.058.118.038a.8.8,0,0,0,.115-.032c.033-.015.043-.1.018-.155-.012-.027-.012-.045,0-.046s.013-.019,0-.045a2.821,2.821,0,0,1-.044-.34c-.014-.165-.035-.369-.046-.455-.039-.322-.072-.555-.079-.565a1.15,1.15,0,0,1-.022-.157.975.975,0,0,0-.034-.193,1.07,1.07,0,0,1-.039-.173.654.654,0,0,0-.053-.186c-.031-.054-.045-.06-.117-.051-.115.015-.142.083-.133.336a1.076,1.076,0,0,0,.017.2Z"
                                                              transform="translate(-345.608 -392.324)"
                                                              fill="#9F2C90"></path>
                                                        <path id="Path_2424" data-name="Path 2424"
                                                              d="M349.642,400.177c.006.005.045.336.121,1.02a3.8,3.8,0,0,0,.124.8c.014.052.033.139.044.2.029.157.063.232.115.252a.127.127,0,0,0,.142-.042,1.658,1.658,0,0,0-.019-.383c-.008-.064-.029-.235-.045-.379s-.041-.334-.053-.419-.027-.209-.034-.273a6.322,6.322,0,0,0-.106-.764.993.993,0,0,1-.037-.154.132.132,0,0,0-.162-.123c-.081.018-.108.064-.1.175a.788.788,0,0,0,.01.1Z"
                                                              transform="translate(-345.898 -394.767)"
                                                              fill="#9F2C90"></path>
                                                        <path id="Path_2425" data-name="Path 2425"
                                                              d="M350.81,395.973c.011.07.012.07.085.052.041-.01.077-.028.079-.041a.047.047,0,0,1,.042-.024.1.1,0,0,0,.06-.036.1.1,0,0,1,.061-.035c.041,0,.135-.1.133-.133,0-.014.006-.025.018-.026a1.357,1.357,0,0,0,.269-.329.024.024,0,0,1,.02-.029.662.662,0,0,0,.166-.193.582.582,0,0,1,.094-.131.613.613,0,0,0,.091-.123c-.006,0,.01-.024.037-.057.065-.076.055-.131-.043-.24-.028-.032-.035-.031-.077,0-.026.02-.047.029-.048.021,0-.034-.138.082-.246.21a.677.677,0,0,1-.144.143c-.014,0-.02.007-.013.013s-.041.072-.211.253a.228.228,0,0,0-.061.087c0,.011-.022.033-.048.048s-.048.042-.047.059-.005.031-.016.032c-.043,0-.157.2-.159.281,0,.044,0,.087,0,.095s-.013.018-.026.023-.02.035-.013.079Z"
                                                              transform="translate(-346.277 -393.059)"
                                                              fill="#9F2C90"></path>
                                                        <path id="Path_2426" data-name="Path 2426"
                                                              d="M351.252,399.311a.341.341,0,0,0,.077.084c.035.03.058.055.052.055a1.218,1.218,0,0,0,.158.161l.2.187a.088.088,0,0,0,.048.026.021.021,0,0,1,.02.021c0,.03.045.069.094.084.02.006.033.022.026.034s0,.021.006.02a.729.729,0,0,1,.142.108.471.471,0,0,0,.163.106.118.118,0,0,1,.076.035c.031.03.046.032.085.01s.047-.038.047-.051a.128.128,0,0,1,.037-.065c.025-.028.031-.048.016-.062a.089.089,0,0,1-.024-.054c0-.019-.026-.045-.056-.06s-.054-.037-.055-.052a.038.038,0,0,0-.02-.032,2.933,2.933,0,0,1-.529-.459c0-.006,0-.01-.016-.009a.449.449,0,0,1-.131-.1.465.465,0,0,0-.128-.1.02.02,0,0,1-.023-.016c0-.01-.038-.035-.082-.055-.062-.029-.087-.031-.108-.012a.472.472,0,0,0-.09.152l.015.037Z"
                                                              transform="translate(-346.416 -394.512)"
                                                              fill="#9F2C90"></path>
                                                        <path id="Path_2427" data-name="Path 2427"
                                                              d="M351.9,397.709a1.039,1.039,0,0,0,.188.064.878.878,0,0,0,.451.011c.327-.037.529-.057,1.208-.121.543-.051.566-.06.557-.207-.006-.095-.021-.108-.131-.123a2.952,2.952,0,0,0-.564.035c0,.009-.028.011-.055,0a.254.254,0,0,0-.117.008.121.121,0,0,1-.1,0c-.014-.011-.027-.012-.026,0a1.187,1.187,0,0,1-.29.042l-.383.031-.123.01a1.924,1.924,0,0,0-.606.112c-.035.05-.039.116-.01.137Z"
                                                              transform="translate(-346.622 -393.938)"
                                                              fill="#9F2C90"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="slide-caption">
                                        <div>
                                            <h6>کارت هدیه دیجی شاپ</h6>
                                            <a href="" className="gift-types-btn">مشاهده</a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="gift-types-slide">
                                    <div className="slide-image">
                                        <svg xmlnsXlink="http://www.w3.org/1999/xlink"
                                             xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 53.5 60.183">
                                            <g id="svg-8499" data-name="Group 3279" transform="translate(0.75 0.771)">
                                                <g id="Group_3120" data-name="Group 3120"
                                                   transform="translate(19.434 0)">
                                                    <g id="Group_3119" data-name="Group 3119">
                                                        <path id="Path_2469" data-name="Path 2469"
                                                              d="M217.512,376.864s3.079-8.889,5.984-5.984S217.512,376.864,217.512,376.864Z"
                                                              transform="translate(-210.747 -370.296)" fill="none"
                                                              stroke="#9F2C90" strokeMiterlimit="10"
                                                              stroke-width="1.5px"></path>
                                                        <path id="Path_2470" data-name="Path 2470"
                                                              d="M213.672,376.864s-3.079-8.889-5.984-5.984S213.672,376.864,213.672,376.864Z"
                                                              transform="translate(-207.104 -370.296)" fill="none"
                                                              stroke="#9F2C90" strokeMiterlimit="10"
                                                              stroke-width="1.5px"></path>
                                                    </g>
                                                </g>
                                                <ellipse id="Ellipse_881" data-name="Ellipse 881" cx="26" cy="26.047"
                                                         rx="26" ry="26.047" transform="translate(0 6.568)"
                                                         fill="#FFFFFF" stroke="#9F2C90" strokeMiterlimit="10"
                                                         stroke-width="1.5px"></ellipse>
                                                <g id="Group_3121" data-name="Group 3121"
                                                   transform="translate(12.649 17.214)">
                                                    <path id="Path_2471" data-name="Path 2471"
                                                          d="M221.946,402.055h-3.7a3.662,3.662,0,0,0,.975-2.491s0-.147,0-.188a3.35,3.35,0,0,0-1.728-2.827,3.428,3.428,0,0,0-3.388,0l-1.685.951a5.874,5.874,0,0,0-2.394,2.548,5.875,5.875,0,0,0-2.395-2.548l-1.685-.951a3.428,3.428,0,0,0-3.388,0,3.353,3.353,0,0,0-1.728,2.827c0,.042,0,.188,0,.188a3.665,3.665,0,0,0,.975,2.491h-3.7a1.426,1.426,0,0,0-1.424,1.425v3.381a1.426,1.426,0,0,0,1.424,1.425h.653V421.1a1.426,1.426,0,0,0,1.425,1.424h19.7a1.426,1.426,0,0,0,1.425-1.424V408.286h.652a1.427,1.427,0,0,0,1.425-1.425V403.48A1.426,1.426,0,0,0,221.946,402.055ZM213,398.534l1.685-.951a2.249,2.249,0,0,1,2.224,0,2.175,2.175,0,0,1,1.123,1.832c0,.028,0,.148,0,.148a2.494,2.494,0,0,1-2.491,2.491h-4.892A4.7,4.7,0,0,1,213,398.534ZM211.5,421.341h-2.967v-18.1H211.5v18.1Zm-9.494-21.777s0-.12,0-.148a2.175,2.175,0,0,1,1.123-1.832,2.249,2.249,0,0,1,2.224,0l1.685.951a4.7,4.7,0,0,1,2.35,3.521H204.5A2.494,2.494,0,0,1,202.008,399.564Zm-4.154,7.3V403.48a.238.238,0,0,1,.238-.238h9.257V407.1h-9.257A.238.238,0,0,1,197.854,406.861Zm2.077,14.242V408.286h7.418v1.805h-2.443a.593.593,0,0,0,0,1.187h2.443v10.063h-7.18A.238.238,0,0,1,199.932,421.1Zm20.176,0a.238.238,0,0,1-.238.238h-7.18V411.278h2.261a.593.593,0,0,0,0-1.187H212.69v-1.805h7.418Zm2.077-14.242a.238.238,0,0,1-.238.238H212.69v-3.857h9.256a.238.238,0,0,1,.238.238Z"
                                                          transform="translate(-196.668 -396.101)" fill="#9F2C90"
                                                          stroke="#FFFFFF" strokeMiterlimit="10"
                                                          stroke-width="0.3px"></path>
                                                    <path id="Path_2472" data-name="Path 2472"
                                                          d="M228.812,418.811h.06a.593.593,0,0,0,0-1.187h-.06a.593.593,0,1,0,0,1.187Z"
                                                          transform="translate(-207.711 -403.634)" fill="#9F2C90"
                                                          stroke="#FFFFFF" strokeMiterlimit="10"
                                                          stroke-width="0.3px"></path>
                                                    <path id="Path_2473" data-name="Path 2473"
                                                          d="M204.654,417.624h-.06a.593.593,0,0,0,0,1.187h.06a.593.593,0,0,0,0-1.187Z"
                                                          transform="translate(-199.235 -403.634)" fill="#9F2C90"
                                                          stroke="#FFFFFF" strokeMiterlimit="10"
                                                          stroke-width="0.3px"></path>
                                                </g>
                                                <path id="Path_2474" data-name="Path 2474"
                                                      d="M240.519,428.879l1.21.27,1.21.27-.839.913-.839.913-.372-1.183Z"
                                                      transform="translate(-199.122 -390.234)" fill="none"
                                                      stroke="#9F2C90" strokeMiterlimit="10" stroke-width="1"></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="slide-caption">
                                        <div>
                                            <h6>جعبه های جادویی</h6>
                                            <a href="" className="gift-types-btn">مشاهده</a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="gift-types-slide">
                                    <div className="slide-image">
                                        <svg xmlnsXlink="http://www.w3.org/1999/xlink"
                                             xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 53.5 60.183">
                                            <g id="svg-2719" data-name="Group 3280" transform="translate(0.75 0.771)">
                                                <g id="Group_3124" data-name="Group 3124"
                                                   transform="translate(19.283 0)">
                                                    <g id="Group_3123" data-name="Group 3123">
                                                        <path id="Path_2475" data-name="Path 2475"
                                                              d="M106.69,377.011s3.148-9.089,6.119-6.118S106.69,377.011,106.69,377.011Z"
                                                              transform="translate(-99.773 -370.296)" fill="none"
                                                              stroke="#9F2C90" strokeMiterlimit="10"
                                                              stroke-width="1.5px"></path>
                                                        <path id="Path_2476" data-name="Path 2476"
                                                              d="M103,377.011s-3.148-9.089-6.119-6.118S103,377.011,103,377.011Z"
                                                              transform="translate(-96.282 -370.296)" fill="none"
                                                              stroke="#9F2C90" strokeMiterlimit="10"
                                                              stroke-width="1.5px"></path>
                                                    </g>
                                                </g>
                                                <ellipse id="Ellipse_882" data-name="Ellipse 882" cx="26" cy="25.973"
                                                         rx="26" ry="25.973" transform="translate(0 6.715)"
                                                         fill="#FFFFFF" stroke="#9F2C90" strokeMiterlimit="10"
                                                         stroke-width="1.5px"></ellipse>
                                                <g id="Group_3125" data-name="Group 3125"
                                                   transform="translate(12.533 16.535)">
                                                    <path id="Path_2477" data-name="Path 2477"
                                                          d="M112.664,397.321a1.715,1.715,0,1,1,2.425,2.426l-.006.006-1.346,1.376q.877.009,1.759,0l.481-.492a2.966,2.966,0,1,0-4.2-4.194l-4.678,4.666c.6-.023,1.2-.034,1.806-.036Z"
                                                          transform="translate(-93.172 -395.571)" fill="#9F2C90"
                                                          stroke="#FFFFFF" strokeMiterlimit="10"
                                                          stroke-width="0.3px"></path>
                                                    <path id="Path_2478" data-name="Path 2478"
                                                          d="M96.563,397.4a1.715,1.715,0,1,0-2.425,2.426l.007.006,1.345,1.377c-.585.005-1.171.006-1.759,0l-.481-.492a2.966,2.966,0,0,1,4.2-4.2l4.678,4.666c-.6-.023-1.185.039-1.786.037Z"
                                                          transform="translate(-88.235 -395.596)" fill="#9F2C90"
                                                          stroke="#FFFFFF" strokeMiterlimit="10"
                                                          stroke-width="0.3px"></path>
                                                    <path id="Path_2479" data-name="Path 2479"
                                                          d="M113.493,404.843a3.122,3.122,0,0,0-2.209-.915H108.44l.026-.027q-.882.013-1.759,0l-.017.018H101.8l.078-.078c-.6,0-1.2.013-1.806.036l-.046.045-10.76,0a3.127,3.127,0,0,0-3.126,3.126v3.489a.627.627,0,0,0,.625.625H87.9v12.809A3.127,3.127,0,0,0,91.03,427.1h18.486a3.127,3.127,0,0,0,3.126-3.126V411.167h1.138a.627.627,0,0,0,.625-.625v-3.489A3.121,3.121,0,0,0,113.493,404.843Zm-15.405.335H102.4v4.739H98.088Zm-10.7,4.739v-2.863a1.881,1.881,0,0,1,1.876-1.876h7.571v4.739Zm22.13,15.935H91.03a1.881,1.881,0,0,1-1.876-1.875V411.167h22.237v12.809h.006A1.881,1.881,0,0,1,109.522,425.852Zm3.638-15.935h-9.508v-4.739h7.633a1.881,1.881,0,0,1,1.875,1.876Z"
                                                          transform="translate(-86.141 -398.345)" fill="#9F2C90"
                                                          stroke="#FFFFFF" strokeMiterlimit="10"
                                                          stroke-width="0.3px"></path>
                                                </g>
                                                <path id="Path_2480" data-name="Path 2480" d="M104.334,429.229"
                                                      transform="translate(-79.687 -390.376)"></path>
                                                <g id="Group_3126" data-name="Group 3126"
                                                   transform="translate(3.95 32.08)">
                                                    <path id="Path_2481" data-name="Path 2481" stroke="#9F2C90"
                                                          d="M81.325,423.141s-.808,1.667-1.786,1.025-1.3-1.733-1.966-.829c-.558.758-1.194,1.784-2.183.643-1.258-1.455-1.495-.586-2.5.491"
                                                          fill="none" transform="translate(-72.893 -420.33)"
                                                          strokeLinecap="round" strokeLinejoin="round"
                                                          stroke-width="1" fill-rule="evenodd"></path>
                                                    <path id="Path_2482" data-name="Path 2482" stroke="#9F2C90"
                                                          d="M81.325,419.134s-.808,1.667-1.786,1.025-1.3-1.733-1.966-.829c-.558.758-1.194,1.784-2.183.642-1.258-1.454-1.495-.586-2.5.491"
                                                          fill="none" transform="translate(-72.893 -418.986)"
                                                          strokeLinecap="round" strokeLinejoin="round"
                                                          stroke-width="1" fill-rule="evenodd"></path>
                                                </g>
                                                <g id="Group_3127" data-name="Group 3127"
                                                   transform="translate(21.743 32.176)">
                                                    <path id="Path_2483" data-name="Path 2483"
                                                          d="M100.073,426.92l7.662-7.662.3.3-7.661,7.661Zm0,0"
                                                          transform="translate(-100.011 -419.195)" fill="#9F2C90"
                                                          stroke="#9F2C90" strokeLinecap="round"
                                                          strokeLinejoin="round" stroke-width="0.5px"></path>
                                                    <path id="Path_2484" data-name="Path 2484"
                                                          d="M101.256,421.719a1.277,1.277,0,1,0-1.277-1.277,1.28,1.28,0,0,0,1.277,1.277Zm0-2.129a.851.851,0,1,1-.851.851.852.852,0,0,1,.851-.851Zm0,0"
                                                          transform="translate(-99.979 -419.164)" fill="#9F2C90"
                                                          stroke="#9F2C90" strokeLinecap="round"
                                                          strokeLinejoin="round" stroke-width="0.5px"></path>
                                                    <path id="Path_2485" data-name="Path 2485"
                                                          d="M109.582,427.49a1.277,1.277,0,1,0,1.275,1.277,1.278,1.278,0,0,0-1.275-1.277Zm0,2.128a.852.852,0,1,1,.851-.851.853.853,0,0,1-.851.851Zm0,0"
                                                          transform="translate(-102.771 -421.956)" fill="#9F2C90"
                                                          stroke="#9F2C90" strokeLinecap="round"
                                                          strokeLinejoin="round" stroke-width="0.5px"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="slide-caption">
                                        <div>
                                            <h6>کادو های تخفیف دار</h6>
                                            <a href="" className="gift-types-btn">مشاهده</a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>

            <section className="gift-shop-mag-container container my-3">
                <div className="gift-shop-mag-header d-flex flex-column justify-content-center align-items-center">
                    <h4 className="section-header">مجله خبری</h4>
                    <p className="text-center my-2">تمامی مقالات بروز ما در این بخش نمایش داده میشود.</p>
                </div>
                <div className="gift-shop-mag-articles container d-flex my-3">
                    <Swiper dir="rtl" spaceBetween={20} slidesPerView="auto" navigation={true}
                            modules={[Navigation]} breakpoints={{
                        767: {
                            spaceBetween: 30,
                        },
                        1023: {
                            spaceBetween: 40,
                        },
                    }}
                            className="mySwiper">
                        <SwiperSlide className="bg-white">
                            <article className="mag-article">
                                <div className="article-image col">
                                    <a href="">
                                        <img className="w-100 h-100"
                                             src={require("../../assets/images/article-1.jpg")}
                                             alt="article image"/>
                                    </a>
                                </div>
                                <div
                                    className="article-caption col px-2 pb-3 d-flex flex-column justify-content-around">
                                    <div className="caption-header text-center">
                                        <a href="">
                                            <h3>هشت ایده جالب کادو پیچی </h3>
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
                        </SwiperSlide>
                        <SwiperSlide className="bg-white">
                            <article className="mag-article">
                                <div className="article-image col">
                                    <a href="">
                                        <img className="w-100 h-100"
                                             src={require("../../assets/images/article-2.jpg")}
                                             alt="article image"/>
                                    </a>
                                </div>
                                <div
                                    className="article-caption col px-2 pb-3 d-flex flex-column justify-content-around">
                                    <div className="caption-header text-center">
                                        <a href="">
                                            <h3>اثر رنگ ها | روانشناسی رنگ ها </h3></a>
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
                        </SwiperSlide>
                        <SwiperSlide className="bg-white">
                            <article className="mag-article">
                                <div className="article-image col">
                                    <a href="">
                                        <img className="w-100 h-100"
                                             src={require("../../assets/images/article-3.jpg")}
                                             alt="article image"/>
                                    </a>
                                </div>
                                <div
                                    className="article-caption col px-2 pb-3 d-flex flex-column justify-content-around">
                                    <div className="caption-header text-center">
                                        <a href="">
                                            <h3>20 نکته مهم برای اینکه جشن تولد خیلی خوش بگذره </h3>
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
                        </SwiperSlide>
                        <SwiperSlide className="bg-white">
                            <article className="mag-article">
                                <div className="article-image col">
                                    <a href="">
                                        <img className="w-100 h-100"
                                             src={require("../../assets/images/article-4.jpg")}
                                             alt="article image"/>
                                    </a>
                                </div>
                                <div
                                    className="article-caption col px-2 pb-3 d-flex flex-column justify-content-around">
                                    <div className="caption-header text-center">
                                        <a href="">
                                            <h3> آداب معاشرت در هدیه دادن!! </h3>
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
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </main>

    )
}

export default Main;