import React, {useEffect, useState} from 'react';
import {Main, Header, Footer, MobileToolbar, Navbar} from "./components";
import {getAllSliders} from "./services/apiServices/getRows";
import {AppContext} from "./Context/AppContext";

function App() {
    const [loading, setLoading] = useState(false)
    const [sliders, setSliders] = useState({})
    const [topProducts, setTopProducts] = useState({})
    const [isOverflowHidden, setIsOverflowHidden] = useState(false);

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
                isOverflowHidden,
                setIsOverflowHidden,
                sliders,
                setSliders,
                topProducts,
                stopBodyScrolling,
            }}>
            <div className="App">
                <MobileToolbar/>
                <Navbar/>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </AppContext.Provider>
    );
}

export default App;
