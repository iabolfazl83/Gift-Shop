import React, {useRef} from 'react';

function MobileSearchScreen({screenSearch, setScreenSearch}) {
    const searchInput = useRef(null)
    return (
        <div
            className={`search-screen-container min-vw-100 position-fixed ${screenSearch === true ? `top-0` : `top-100`} container py-3 px-4`}>
            <div className="mobile-search-container d-flex py-2 align-items-center">
                <div className="close-search">
                    <button className="btn p-0 m-0 border-0 d-flex" onClick={() => setScreenSearch(false)}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
                <div className="mobile-search col-11 d-flex justify-content-start">
                    <input ref={searchInput} className="bg-white border-0 w-100 mx-3 d-flex align-items-center"
                           type="text"
                           placeholder="جستجو..."/>
                </div>
                <div className="clear-search">
                    <span role="button" onClick={() => searchInput.current.value = ''}>
                    <i className="fa-solid fa-circle-xmark"></i>
                    </span>
                </div>
            </div>

            <div className="search-options-container">
                <div className="recently-searched d-flex gap-3 justify-content-start align-items-center my-3">
                    <i className="fa-solid fa-clock-rotate-left "></i>
                    <span className="col-11"> آخرین جستجوهای شما</span>
                </div>
                <div className="recently-searched-items d-flex overflow-y-hidden overflow-x-auto hide-scrollbar">
                    <a href="" className="recently-searched-item d-flex align-items-center mx-1"> ساعت
                        رومیزی <i
                            className="fa-solid fa-angle-left mx-1"></i></a>
                    <a href="" className="recently-searched-item d-flex align-items-center mx-1"> ساعت
                        رومیزی <i
                            className="fa-solid fa-angle-left mx-1"></i></a>
                    <a href="" className="recently-searched-item d-flex align-items-center mx-1"> ساعت
                        رومیزی <i
                            className="fa-solid fa-angle-left mx-1"></i></a>
                    <a href="" className="recently-searched-item d-flex align-items-center mx-1"> ساعت
                        رومیزی <i
                            className="fa-solid fa-angle-left mx-1"></i></a>
                    <a href="" className="recently-searched-item d-flex align-items-center mx-1"> ساعت
                        رومیزی <i
                            className="fa-solid fa-angle-left mx-1"></i></a>
                    <a href="" className="recently-searched-item d-flex align-items-center mx-1"> ساعت
                        رومیزی <i
                            className="fa-solid fa-angle-left mx-1"></i></a>
                </div>

                <div className="popular-searches d-flex gap-3 justify-content-start align-items-center my-3">
                    <i className="fa-solid fa-fire-flame-curved "></i>
                    <span className="col-10">جستجوهای پرطرفدار</span>
                </div>
                <div
                    className="poplar-searches-items d-flex gap flex-nowrap overflow-x-auto overflow-y-hidden hide-scrollbar">
                    <a href="" className="recently-searched-item d-flex align-items-center mx-1">گوی موزیکال<i
                        className="fa-solid fa-angle-left mx-1"></i></a> <a href=""
                                                                            className="recently-searched-item d-flex align-items-center mx-1">گوی
                    موزیکال<i
                        className="fa-solid fa-angle-left mx-1"></i></a> <a href=""
                                                                            className="recently-searched-item d-flex align-items-center mx-1">گوی
                    موزیکال<i
                        className="fa-solid fa-angle-left mx-1"></i></a> <a href=""
                                                                            className="recently-searched-item d-flex align-items-center mx-1">گوی
                    موزیکال<i
                        className="fa-solid fa-angle-left mx-1"></i></a> <a href=""
                                                                            className="recently-searched-item d-flex align-items-center mx-1">گوی
                    موزیکال<i
                        className="fa-solid fa-angle-left mx-1"></i></a> <a href=""
                                                                            className="recently-searched-item d-flex align-items-center mx-1">گوی
                    موزیکال<i
                        className="fa-solid fa-angle-left mx-1"></i></a> <a href=""
                                                                            className="recently-searched-item d-flex align-items-center mx-1">گوی
                    موزیکال<i
                        className="fa-solid fa-angle-left mx-1"></i></a> <a href=""
                                                                            className="recently-searched-item d-flex align-items-center mx-1">گوی
                    موزیکال<i
                        className="fa-solid fa-angle-left mx-1"></i></a> <a href=""
                                                                            className="recently-searched-item d-flex align-items-center mx-1">گوی
                    موزیکال<i
                        className="fa-solid fa-angle-left mx-1"></i></a> <a href=""
                                                                            className="recently-searched-item d-flex align-items-center mx-1">گوی
                    موزیکال<i
                        className="fa-solid fa-angle-left mx-1"></i></a>
                </div>
            </div>
        </div>
    )
}

export default MobileSearchScreen;