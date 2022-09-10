import React from 'react'
import { Interweave } from 'interweave'
import CatechismExplanation from './CatechismExplanation'
import { useState } from 'react'
import { CloseButton, Collapse } from 'react-bootstrap'


export default function CatechismSectionHeading({ title, subtitle, partID }) {
  const [showExplanation, setShowExplanation] = useState(false);

  function getContainerClasses(){
    let classes = 'container my-5 verse';
    if(showExplanation){
      classes += ' selected'; 
    }
    return classes; 
  }

  return (
    <div className={getContainerClasses()} onClick={(e) => { if (!showExplanation) setShowExplanation(true) }}>
      <h1 >{title} </h1>
      <p className="lead"><Interweave content={subtitle} /></p>
      <Collapse in={showExplanation}>
        <div className='container'>
          <div className='row explanation'>
            <div className='col-11 my-2'><CatechismExplanation partID={partID} id="heading" display={showExplanation} /></div>
            <div className='col-1 my-2'>

              <CloseButton onClick={(e) => { setShowExplanation(false) }} />

            </div>
          </div>
        </div>
      </Collapse>





    </div>
  )
}
