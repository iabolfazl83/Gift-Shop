import React from "react";
import {toFarsiNumber} from "../../services/numberToPersian";

function MobileToolbar() {

    return (
        <div className="mobile-toolbar-menu box-shadow d-flex justify-content-between px-3 overflow-x-auto">
            <div className="mobile-toolbar-menu-item">
                <a href="">
                    <i className="fa-solid fa-shop d-block text-center mobile-toolbar-menu-icons"></i>
                    فروشگاه
                </a>
            </div>
            <div className="mobile-toolbar-menu-item">
                <a href="">
                    <i className="fa-solid fa-heart d-block text-center mobile-toolbar-menu-icons position-relative"><span className="badge-icon">{toFarsiNumber(0)}</span></i>
                    علاقه مندی
                </a>
            </div>
            <div className="mobile-toolbar-menu-item">
                <a href="">
                    <i className="fa-solid fa-cart-shopping d-block text-center mobile-toolbar-menu-icons position-relative"><span className="badge-icon">{toFarsiNumber(9)}</span></i>
                    سبد خرید
                </a>
            </div>
            <div className="mobile-toolbar-menu-item">
                <a href="">
                    <i className="fa-solid fa-user d-block text-center mobile-toolbar-menu-icons"></i>
                    حساب کاربری من
                </a>
            </div>
        </div>
    );
}

export default MobileToolbar;
