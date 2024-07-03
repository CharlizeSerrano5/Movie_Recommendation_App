import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/HomePage'
import MovieDetails from './Pages/MovieDetailsPage'
import Recommendations from './Pages/RecommendationsPage'
import { Container } from "@mui/material";
function Main(){
    return(
        <div className="Main">
            <BrowserRouter>
            <Container maxWidth="sm"> 

                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/Home" element={<Home></Home>}></Route>
                    <Route path="/MovieDetails" element={<MovieDetails></MovieDetails>}></Route>
                    <Route path="/Recommendations" element={<Recommendations></Recommendations>}></Route>
                </Routes>
            </Container>
            </BrowserRouter>
        </div>
    )
}

export default Main;