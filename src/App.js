import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {ContactUs, GiftShopMag, Homepage, Store, Cart, Profile, ArticlePage} from "./components";
import {getAllCategories, getAllSliders} from "./services/apiServices/getRows";
import {AppContext} from "./Context/AppContext";

function App() {
    const [loading, setLoading] = useState(false);
    const [isOverflowHidden, setIsOverflowHidden] = useState(false);
    const [categories, setCategories] = useState({})
    const [sliders, setSliders] = useState({});
    const [topProducts, setTopProducts] = useState({});

    useEffect(() => {
        const fetchCatsData = async () => {
            try {
                setLoading(true)
                const {data: categoriesData, status: categoriesStatus} = await getAllCategories();
                const {rows: categoriesRows} = categoriesData.data;
                if (categoriesStatus === 200) {
                    setLoading(false)
                    setCategories(categoriesRows.filter(item => item.tags).map(item => item.tags)[0])
                }
            } catch (err) {
                setLoading(false)
                console.log(err.message)
            }
        }
        fetchCatsData();
    }, [])

    function stopBodyScrolling() {
        setIsOverflowHidden((prev) => !prev);
    }

    useEffect(() => {
        const body = document.body;
        if (isOverflowHidden) {
            body.classList.add('p-right');
            body.classList.add('overflow-y-hidden');
        } else {
            body.classList.remove('overflow-y-hidden');
            body.classList.remove('p-right');
        }

        return () => {
            body.classList.remove('overflow-y-hidden');
            body.classList.remove('p-right');
        };
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const {data: slidersData, status: slidersStatus} = await getAllSliders()
                const {rows: slidersRows} = slidersData.data;
                if (slidersStatus === 200) {
                    setLoading(false)
                    setSliders(slidersRows.filter(item => item.sliders).map(item => item.sliders)[0])
                }
            } catch (err) {
                setLoading(false)
                console.log(err.message)
            }
        }
        fetchData();
    }, [])


    return (
        <AppContext.Provider
            value={{
                loading,
                setLoading,
                categories,
                setCategories,
                isOverflowHidden,
                setIsOverflowHidden,
                sliders,
                setSliders,
                topProducts,
                stopBodyScrolling,
            }}>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/contact-us" element={<ContactUs/>}/>
                    <Route path="/store" element={<Store/>}/>
                    <Route path="/giftshop-mag" element={<GiftShopMag/>}/>
                    <Route path="/article-page" element={<ArticlePage/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;