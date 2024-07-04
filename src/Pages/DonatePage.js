import React from "react";
import Popcorn from '../Assets/Popcorn.png'
import { Grid } from "@mui/material";
import GrayNavButton from "../Components/GrayNavButton";

function DonatePage(){
    return(
        <div className="DonatePage">
            <Grid container spacing={1} style={{width: '80%'}}>
                <Grid item xs={4}>
                    <img src={Popcorn}></img>
                </Grid>
                <Grid item xs={4}>
                    <img src={Popcorn}></img>
                </Grid>
                <Grid item xs={4}>
                    <img src={Popcorn}></img>
                </Grid>
            </Grid>

            <GrayNavButton Label='Donate'></GrayNavButton>
        </div>
    )
}

export default DonatePage;