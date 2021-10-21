import React from 'react'
import { NavLink } from 'react-router-dom'
import './all.css'



const ShowList = (props) => {

  const { shows, network} = props

 return (
    <div>
      <ul>{shows.map((show => <li>{show.title} <NavLink to={`/shows/${network}/${show.id}`}>more info</NavLink></li>))}</ul>
    </div>
  )
    }

export default ShowList