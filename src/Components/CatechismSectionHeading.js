import React from 'react'
import { Interweave } from 'interweave'
import CatechismExplanation from './CatechismExplanation'
import { useState} from 'react'
import { CloseButton } from 'react-bootstrap'


export default function CatechismSectionHeading({title, subtitle, partID}) {
  const [showExplanation, setShowExplanation] = useState(false); 
  return (
    <div className="container my-5 verse">
          <h1 >{title} </h1>
          <p className="lead"><Interweave content={subtitle}/></p>
          <CloseButton onClick={(e) => {setShowExplanation(!showExplanation)}}/> 
            <CatechismExplanation partID={partID} id="heading" display={showExplanation}/>
          
          
    </div>
  )
}
