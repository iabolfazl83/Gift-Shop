import React, {useEffect, useState} from 'react';
import {Main, Header, Footer, MobileToolbar} from "./components";
import {getAllCategories, getAllSliders} from "./services/apiServices/getRows";

function App() {
    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState({})
    const [sliders, setSliders] = useState({})

    useEffect(() => {
        const fetchCatsData = async () => {
            try {
                setLoading((prevLoading => !prevLoading))
                const {data, status} = await getAllCategories();
                const {rows} = data.data;
                const {data: data2, status: status2} = await getAllSliders()
                const {rows: rows2} = data2.data;

                if (status === 200 && status2 === 200) {
                    setLoading((prevLoading => !prevLoading))
                    setCategories(rows.filter(item => item.tags).map(item => item.tags)[0])
                    setSliders(rows2.filter(item => item.sliders).map(item => item.sliders)[0])
                }
            } catch (err) {
                setLoading((prevLoading => !prevLoading))
                console.log(err.message)
            }
        }

        fetchCatsData();
    }, [])

    return (
        <div className="App">
            <div className="body-container">
                <MobileToolbar/>
                <Header loading={loading} categories={categories} sliders={sliders}/>
                <Main/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
