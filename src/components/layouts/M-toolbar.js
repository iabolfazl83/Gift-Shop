import React from "react";

function MobileToolbar() {
    return (
        <div className="mobile-toolbar-menu d-flex justify-content-between p-2">
            <div className="mobile-toolbar-menu-item"><a href=""><i
                className="fa-solid fa-shop d-block text-center mobile-toolbar-menu-icons"></i>فروشگاه</a></div>
            <div className="mobile-toolbar-menu-item"><a href=""><i
                className="fa-solid fa-heart d-block text-center mobile-toolbar-menu-icons"></i>علاقه مندی</a>
            </div>
            <div className="mobile-toolbar-menu-item"><a href=""><i
                className="fa-solid fa-cart-shopping d-block text-center mobile-toolbar-menu-icons"></i>سبد خرید</a>
            </div>
            <div className="mobile-toolbar-menu-item">
                <a href=""><i
                    className="fa-solid fa-user d-block text-center mobile-toolbar-menu-icons"></i>حساب کاربری
                    من</a>
            </div>
        </div>
    )
}

export default MobileToolbar;