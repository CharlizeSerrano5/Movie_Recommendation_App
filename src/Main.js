import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home'
import MovieDetails from './Pages/MovieDetails'
import Recommendations from './Pages/Recommendations'
function Main(){
    return(
        <div className="Main">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/Home" element={<Home></Home>}></Route>
                    <Route path="/MovieDetails" element={<MovieDetails></MovieDetails>}></Route>
                    <Route path="/Recommendation" element={<Recommendations></Recommendations>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Main;