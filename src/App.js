import React, {useState} from 'react';
import Header from "./components/layouts/Header";
import Main from "./components/layouts/Main";
import Footer from "./components/layouts/Footer";
import MobileToolbar from "./components/layouts/M-toolbar";

function App() {
    return (
        <div className="App">
            <div className="body-container">
                <MobileToolbar/>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
