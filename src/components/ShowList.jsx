import React, {useState} from 'react'
import favShows from '../favShows'
import ShowInfo from './ShowInfo'


const ShowList = (props) => {


      const doSomething = (props) => {
          return <h2>{props.word}hi!</h2>
      }

 return (
    <div>
      <ul>{props.shows.map((show => <button onClick={doSomething(word)}>{show}</button>))}
      </ul>
    </div>
  )
    }

export default ShowList