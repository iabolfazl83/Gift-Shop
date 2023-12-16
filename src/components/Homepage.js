import React from "react";
import {Footer, Header, Main, MobileToolbar, Navbar} from "./index";

function Homepage() {
    return (
        <div className="main-container">
            <Navbar/>
            <MobileToolbar/>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default Homepage;