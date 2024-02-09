import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import App from './App';
import './index.css';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "./media-queries.css"
import {ContactUs, GiftShopMag, Profile, Store} from "./components";
import ArticlePage from "./components/ArticlePage";
import Cart from "./components/Cart";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="/contact-us" element={<ContactUs/>}/>
                    <Route path="/store" element={<Store/>}/>
                    <Route path="/giftshop-mag" element={<GiftShopMag/>}/>
                    <Route path="/article-page" element={<ArticlePage/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Route>
                <Route path="*" element={
                    <main className="container m-auto">
                        <div className="container w-auto d-flex flex-column gap-5 align-items-center">
                            <div className="w-25">
                                <img className="w-100" src={require("./assets/images/download.png")}
                                     alt="404 error"/>
                            </div>
                            <div className="fs-5 text-404">این راه به جایی نمی‌رسه!</div>
                            <div>
                                <p className="text-404 text-center">به نظر آدرس را اشتباه وارد کرده‌اید.</p>
                                <p className="text-404 text-center">برای پیدا کردن مسیر درست می‌توانید <Link
                                    className="active-page fw-bolder" to={"/"}>به خانه بازگردید</Link>.</p>
                            </div>
                        </div>
                    </main>
                }/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);