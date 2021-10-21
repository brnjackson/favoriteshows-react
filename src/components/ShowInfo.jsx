import React from 'react'
import { useParams } from 'react-router-dom'
import favShows from '../favShows'




const ShowInfo = () => {
    const { id, network } = useParams()
    const show = favShows.streamingService.find(service => service.name === network).shows.find(show => show.id.toString() === id)
    
    console.log(show)
    
    const pic = show.img
    
    return(
        <div className="showinfo">
            <img alt ="" src={pic} width="400px"/><br />
            <p>Title</p><span>{show.title}<br /><br /></span>
            <p>Number of Episodes</p><span>{show.numberofEps}</span><br /><br />
            <p>Starring</p><span>{show.starring}</span><br /><br />
            <p>My Favorite Character</p><span>{show.favCharacter}</span>
        </div>)
}

export default ShowInfo