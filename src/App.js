import React, {useEffect, useState} from 'react';
import {Main, Header, Footer, MobileToolbar} from "./components";
import {getAllCategories, getAllSliders, getTopProducts} from "./services/apiServices/getRows";
import {AppContext} from "./Context/AppContext";

function App() {
    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState({})
    const [sliders, setSliders] = useState({})
    const [topProducts, setTopProducts] = useState({})
    const [isOverflowHidden, setIsOverflowHidden] = useState(false);

    useEffect(() => {
        const fetchCatsData = async () => {
            try {
                setLoading((prevLoading => !prevLoading))
                stopBodyScrolling()
                const {data: categoriesData, status: categoriesStatus} = await getAllCategories();
                const {rows: categoriesRows} = categoriesData.data;
                const {data: slidersData, status: slidersStatus} = await getAllSliders()
                const {rows: slidersRows} = slidersData.data;
                // const {data, status} = await getTopProducts()
                console.log(`in try loading:${loading} overflow:${isOverflowHidden}`)
                if (categoriesStatus && slidersStatus === 200) {
                    console.log(`in if loading:${loading} overflow:${isOverflowHidden}`)
                    stopBodyScrolling()
                    setLoading((prevLoading => !prevLoading))
                    setCategories(categoriesRows.filter(item => item.tags).map(item => item.tags)[0])
                    setSliders(slidersRows.filter(item => item.sliders).map(item => item.sliders)[0])
                }
            } catch (err) {
                console.log(`in error loading:${loading} overflow:${isOverflowHidden}`)
                setLoading((prevLoading => !prevLoading))
                console.log(err.message)
            }
        }

        fetchCatsData();
    }, [])

    const stopBodyScrolling = () => {
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


    return (
        <AppContext.Provider
            value={{
                loading,
                setLoading,
                isOverflowHidden,
                setIsOverflowHidden,
                categories,
                setCategories,
                sliders,
                setSliders,
                topProducts,
                stopBodyScrolling,
            }}>
            <div className="App">
                <div className="body-container">
                    <MobileToolbar/>
                    <Header/>
                    <Main/>
                    <Footer/>
                </div>
            </div>
        </AppContext.Provider>
    );
}

export default App;
