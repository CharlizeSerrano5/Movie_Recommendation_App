import { Card, CardContent, CardMedia, Input, TextField, Grid } from '@mui/material';
import './AddMovie.css'
import StarSlider from './StarSlider';
import StarIcon from '@mui/icons-material/Star';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function FavoriteMovie(){
    return(
        <div className='Favorite-Movie'>
            <Card variant='outlined' 
            style={{backgroundColor: 'rgba(105, 147, 188, 0.05)', color: 'white', padding: '10px'}} >
                {/* <TextField variant='standard' label='text'> </TextField> */}
                <Grid container spacing={1} alignItems={'center'}>
                    <Grid item xs={10}>
                        <input className='Input' placeholder='Add Movie Title'></input>

                    </Grid>
                    <Grid item xs={1}>
                        <StarSlider className='StarIcon'></StarSlider>
                    </Grid>
                    <Grid item xs={1}>
                        <MoreVertIcon></MoreVertIcon>
                    </Grid>
                </Grid>
                
            </Card>
        </div>
    )
}

export default FavoriteMovie;