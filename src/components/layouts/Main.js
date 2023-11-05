import React from "react";

function Main() {
    return (
        <main>
            <section className="special-offers-container">
                <div className="more-special-offers"></div>
                <div className="special-offers-list"></div>
            </section>

            <section className="gift-types-container">
                <div className="gift-types-header">
                    <h4>هدیه چی بدم؟!</h4>
                </div>
                <div className="gift-types-slider-container">
                    <div className="gift-types-slider">
                        <div className="gift-types-slide"></div>
                    </div>
                </div>
            </section>

            <section className="special-offers-container">
                <div className="special-offers-header">
                    <h3>آفروز | پیشنهادات دیجی شاپ</h3>
                </div>
                <div className="special-offers-tabs">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="special-offers-slider-container">
                    <div className="special-offers-slider">
                        <div className="special-offers-slide"></div>
                    </div>
                </div>
            </section>

            <section className="ads-container">
                <div className="ad-1"></div>
                <div className="ad-2"></div>
                <div className="ad-3"></div>
            </section>

            <section className="top-sellers-container">
                <div className="top-sellers-header">
                    <h3>پر فروش ترین محصولات</h3>
                </div>
                <div className="top-sellers-slider-container">
                    <div className="top-sellers-slider">
                        <div className="top-sellers-slide"></div>
                    </div>
                </div>
            </section>

            <section className="popular-products-container">
                <div className="popular-products-header">
                    <h3>پر بازدید ترین محصولات</h3>
                </div>
                <div className="popular-products-slider-container">
                    <div className="popular-products-slider">
                        <div className="popular-products-slide"></div>
                    </div>
                </div>
            </section>

            <section className="gift-shop-mag-container">
                <div className="gift-shop-mag-header">
                    <h4>مجله خبری</h4>
                    <p>تمامی مقالات بروز ما در این بخش نمایش داده میشود.</p>
                </div>
                <div className="gift-shop-mag-articles">
                    <div className="mag-article"></div>
                    <div className="mag-article"></div>
                    <div className="mag-article"></div>
                </div>
            </section>

            <section className="subscribe-container">
                <div className="subscribe-info">
                    <h4>خبرنامه</h4>
                    <p>همیشه اولین نفر باشید! برای اطلاع از آخرین تخفیف‌ها و جدیدترین کالاها در خبرنامه ثبت‌نام
                        کنید.
                    </p>
                </div>
                <div className="subscribe-input-container">
                    <button type="submit">عضویت</button>
                    <input type="email" placeholder="آدرس ایمیل خود را وارد کنید..."/>
                </div>
            </section>

        </main>

    )
}

export default Main;