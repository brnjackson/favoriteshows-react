import React, {useState} from 'react'
import favShows from '../favShows'
import ShowInfo from './ShowInfo'


const ShowList = (props) => {



 return (
    <div>
      <ul>{props.shows.map((show => <button onClick={doSomething}>{show}</button>))}
      </ul>
      <ShowInfo />
    </div>
  )
    }

export default ShowList