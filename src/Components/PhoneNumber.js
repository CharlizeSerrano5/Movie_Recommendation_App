import { Grid, Stack } from "@mui/material";
import Popcorn from '../Assets/Popcorn.png'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import InputBar from "./InputBar";
function PhoneNumber(){
    return(
        <div className="PhoneNumber">
            <Stack spacing={4}>
                            <Grid container spacing = {1}>
                                <Grid item xs = {8}>
                                    <div className="TextContent">
                                        Buy Popcorn and Support the Cause!
                                    </div>
                                </Grid>
                                <Grid item xs = {4} textAlign={'center'} alignContent={'center'}>
                                    <img src={Popcorn} width={'19px'} height={'28px'}></img>
                                </Grid>
                            </Grid>
                            <div className="PhoneNumber">
                                <Grid container spacing = {1} alignItems={'center'}>
                                    <Grid item xs={8}>
                                        <div className="TextContent">
                                            Want new recommendation automatically sent to your phone?
                                        </div>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <ThumbUpOffAltIcon style={{color: '#76D9B6'}}></ThumbUpOffAltIcon>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <ThumbDownOffAltIcon></ThumbDownOffAltIcon>
                                    </Grid>                
                                </Grid>
                                <InputBar Label={'Enter Phone Number'}></InputBar>
                                <div>
                                    By providing your phone number your agreeing to receive notifications.
                                </div>              
                            </div>
                                
            </Stack>
        </div>
    )
}

export default PhoneNumber;