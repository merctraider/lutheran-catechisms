import { Interweave } from 'interweave'
import React from 'react'


export default function ExplanationIndex({array}) {

  return (
    array.map(explanation =>{
      return(
        <div>
          <h6>{explanation.display}</h6>
          
        </div>
      )
    } )
  )
}
