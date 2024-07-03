import React from "react";
import FavoriteMovie from "../Components/FavoriteMovie";
function Home(){
    return(
        <div className="Home">
            <FavoriteMovie className='Favorite'></FavoriteMovie>
        </div>
    )
}

export default Home;