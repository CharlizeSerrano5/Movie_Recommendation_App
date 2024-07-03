import { Card, CardContent, CardMedia, Input, TextField } from '@mui/material';
import './FavoriteMovie.css'
import StarSlider from './StarSlider';
import StarIcon from '@mui/icons-material/Star';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function FavoriteMovie(){
    return(
        <div className='Favorite-Movie'>
            <Card variant='outlined' 
            style={{backgroundColor: 'rgba(105, 147, 188, 0.05)', color: 'white', padding: '10px'}} >
                {/* <TextField variant='standard' label='text'> </TextField> */}
                <input className='Input' placeholder='Add Movie Title'></input>
                <StarSlider className='StarIcon'></StarSlider>
                <MoreVertIcon></MoreVertIcon>
            </Card>
        </div>
    )
}

export default FavoriteMovie;