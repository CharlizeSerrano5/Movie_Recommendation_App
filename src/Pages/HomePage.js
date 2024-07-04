import React from "react";
import FavoriteMovie from "../Components/FavoriteMovie";
import SmallTopBar from "../Components/SmallTopBar";
import GrayNavButton from "../Components/GrayNavButton";
import { Grid, Container, Stack } from "@mui/material";
import LoginButton from "../Components/LoginButton";
import { Link } from "react-router-dom";
function Home(){
    return(
        <div className="Home">
                <SmallTopBar Name="NOW SHOWING"></SmallTopBar>
                <h3 className="Title">My Favorites</h3>
                
                <Stack spacing={2}>
                    <FavoriteMovie className='Favorite'></FavoriteMovie>
                    <FavoriteMovie className='Favorite'></FavoriteMovie>
                    <FavoriteMovie className='Favorite'></FavoriteMovie>
                    <FavoriteMovie className='Favorite'></FavoriteMovie>
                    <FavoriteMovie className='Favorite'></FavoriteMovie>
                </Stack>
                <Link to="/Recommendations"><GrayNavButton Label='Get Recommendations'></GrayNavButton></Link>
                <LoginButton>    
                </LoginButton>
        </div>
    )
}

export default Home;