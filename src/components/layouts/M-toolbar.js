import React from "react";
import {Link, useLocation} from "react-router-dom";
import {insertRialComma, numberToPersian} from "../../services/numberToPersian";

function MobileToolbar() {

    return (
        <div className="mobile-toolbar-menu box-shadow d-flex justify-content-between px-1 overflow-x-auto">
            <div className="mobile-toolbar-menu-item col">
                <Link to="/store" className={`${useLocation().pathname === "/store" ? `active-page` : ``}`}>
                    <i className={`${useLocation().pathname === "/store" ? `active-page` : ``} fa-solid fa-shop d-block text-center mobile-toolbar-menu-icons`}></i>
                    فروشگاه
                </Link>
            </div>
            <div className="mobile-toolbar-menu-item col">
                <a href="" className={`${useLocation().pathname === "/favorites" ? `active-page` : ``}`}>
                    <i className={`${useLocation().pathname === "/favorites" ? `active-page` : ``} fa-solid fa-heart d-block text-center mobile-toolbar-menu-icons position-relative`}><span className="badge-icon">{insertRialComma(numberToPersian(0))}</span></i>
                    علاقه مندی
                </a>
            </div>
            <div className="mobile-toolbar-menu-item col">
                <Link to={"/cart"} className={`${useLocation().pathname === "/cart" ? `active-page` : ``}`}>
                    <i className={`${useLocation().pathname === "/cart" ? `active-page` : ``} fa-solid fa-cart-shopping d-block text-center mobile-toolbar-menu-icons position-relative`}><span className="badge-icon">{insertRialComma(numberToPersian(8))}</span></i>
                    سبد خرید
                </Link>
            </div>
            <div className="mobile-toolbar-menu-item col">
                <Link to={"/profile"} className={`${useLocation().pathname === "/profile" ? `active-page` : ``}`}>
                    <i className={`${useLocation().pathname === "/profile" ? `active-page` : ``} fa-solid fa-user d-block text-center mobile-toolbar-menu-icons`}></i>
                    حساب کاربری من
                </Link>
            </div>
        </div>
    );
}

export default MobileToolbar;
