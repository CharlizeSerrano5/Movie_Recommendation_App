import {Card, Grid, Stack} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import StarIcon from '@mui/icons-material/Star';
import CenterImage from '../Assets/SpidermanPoster.png'
import { Link } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function MovieCard(){
    return(
        <div>
            <Link to='/MovieDetails'>
                <Card variant='outlined' 
                style={{backgroundColor: 'rgba(105, 147, 188, 0.05)', color: 'white', padding: '10px'}} >
                    <Grid container spacing={1}>
                        <Grid item xs= {12}>
                            Already watched
                            <MoreHorizIcon></MoreHorizIcon>
                        </Grid>
                        <Grid item xs= {12}>
                            <img src={CenterImage}></img>
                        </Grid>
                        <Grid item xs={12}>
                            <p>Spiderman: No Way Home</p>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <Stack direction='row'>
                                        <span><p>1h 47m</p></span>
                                    
                                        <span><StarIcon></StarIcon></span>                

                                    </Stack>

                                </Grid>
                                
                                <Grid item xs={6}>
                                    <p>6.4/10 IMDb</p>
                                </Grid>
                            </Grid>
                            
                        </Grid>        
                    </Grid>
                </Card>
            </Link>

        </div>
    )
}

export default MovieCard;