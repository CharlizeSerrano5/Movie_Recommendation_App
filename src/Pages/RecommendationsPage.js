import React from "react";
import { Container, Grid } from "@mui/material";
import SmallTopBar from "../Components/SmallTopBar";
import MovieCard from "../Components/MovieCard";
import GrayNavButton from '../Components/GrayNavButton'
function Recommendations(){
    return(
        <div>
            <Container>
                <SmallTopBar></SmallTopBar>
                <Grid container spacing={1} style={{}}>
                    <Grid item xs={6}> 
                        <MovieCard></MovieCard>
                    </Grid>
                    <Grid item xs={6}>
                        <MovieCard></MovieCard>
                    </Grid>
                    <Grid item xs={6}>
                        <MovieCard></MovieCard>
                    </Grid>
                    <Grid item xs={6}>
                        <MovieCard></MovieCard>
                    </Grid>
                    <Grid item xs={6}>
                        <MovieCard></MovieCard>
                    </Grid>

                </Grid>
                <GrayNavButton></GrayNavButton>
            </Container>
        </div>
    )
}

export default Recommendations;