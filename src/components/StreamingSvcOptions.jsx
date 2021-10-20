import React, {useState, useEffect} from 'react'
import { SiNetflix, SiHulu, SiStarz } from 'react-icons/si'
import favShows from '../favShows'
import ShowList from './ShowList'
import ShowInfo from './ShowInfo'




const StreamingSvcIcon = () => {
// get titles of the shows in the name 'netflix, hulu, starz' object
// display titles with click of button
//const [displayShows, setDisplayShows] = useState([favShows])

const [renderToggles, setRenderToggles] = useState({
    netflix: false,
    hulu: false,
    starz: false
  })

const [renderShowInfo, setRenderShowInfo] = useState({title: false})

const getShowsByNetwork = (serviceName) => {
    return favShows.streamingService.find(service => service.name === serviceName).shows.map(show => show.title)
  }
  
  const netflixShows = getShowsByNetwork('Netflix')
  const huluShows = getShowsByNetwork('Hulu')
  const starzShows = getShowsByNetwork('Starz')





    return(
        <>
            <SiNetflix size="150px" color="red" /><br />
            <button onClick={() => setRenderToggles({...renderToggles, netflix: !renderToggles.netflix})}>See My Favorite Netflix Shows</button><br />
            {renderToggles.netflix && <ShowList shows={netflixShows}/>}
            <SiHulu size="200px" color="#00ff7f" /><br />
            <button onClick={() => setRenderToggles({...renderToggles, hulu: !renderToggles.hulu})}>See My Favorite Hulu Shows</button><br />
            {renderToggles.hulu && <ShowList shows={huluShows}/>}
            <SiStarz size="200px" /><br />
            <button onClick={() => setRenderToggles({...renderToggles, starz: !renderToggles.starz})}>See My Favorite Starz Shows</button><br />
            {renderToggles.starz && <ShowList shows={starzShows}/>}
        
        </>
    )
}

export default StreamingSvcIcon