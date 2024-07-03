import React from "react";
import FavoriteMovie from "../Components/FavoriteMovie";
import SmallTopBar from "../Components/SmallTopBar";
import GrayNavButton from "../Components/GrayNavButton";
import { Grid, Container, Stack } from "@mui/material";
function Home(){
    return(
        <div className="Home">
                <SmallTopBar></SmallTopBar>
                <h3 className="Title">My Favorites</h3>
                
                <Stack spacing={2}>
                    <FavoriteMovie className='Favorite'></FavoriteMovie>
                    <FavoriteMovie className='Favorite'></FavoriteMovie>
                    <FavoriteMovie className='Favorite'></FavoriteMovie>
                    <FavoriteMovie className='Favorite'></FavoriteMovie>
                    <FavoriteMovie className='Favorite'></FavoriteMovie>
                </Stack>
                <GrayNavButton></GrayNavButton>
            
            

        </div>
    )
}

export default Home;