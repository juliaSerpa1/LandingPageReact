import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Features from './pages/Features/Features';
import Princing from './pages/Pricing/Pricing';
import About from './pages/About/About';
import './App.css';


const App = () => {
    return(
        <>
        <Router>
        <Header/>
            <Routes>
                <Route path='/features' element={ <Features/> } />
                <Route path='/princing' element={ <Princing/> } />
                <Route path='/about' element={ <About/> } />
                <Route path='*' element={ <Home /> } />
            </Routes>
        <Footer/>
    </Router>
        </>
    )
}


export default App;
