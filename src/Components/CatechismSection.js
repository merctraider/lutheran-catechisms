import React from 'react'
import { Interweave } from 'interweave'
import CatechismExplanation from './Explanation/CatechismExplanation';
import { useState } from 'react';
import { Collapse, CloseButton } from 'react-bootstrap';

export default function CatechismSection(props) {
  const [showExplanation, setShowExplanation] = useState(false);
  const { partID, id } = props;

  function getContainerClasses(){
    let classes = 'container my-5 verse';
    if(showExplanation){
      classes += ' selected'; 
    }
    return classes; 
  }

  if (props.additionalHeading != undefined) {
    return (
      <div class={getContainerClasses()} id={props.id} onClick={(e) => { if (!showExplanation) setShowExplanation(true) }}>
        <h2 className='h5'> {props.additionalHeading} </h2>
        <h3><Interweave content={props.mainHeading} /></h3>
        <p>{props.children}</p>
        <Collapse in={showExplanation}>
          <div className='container'>
            <div className='row explanation'>
              <div className='col-11 my-2'><CatechismExplanation partID={partID} id={id} display={showExplanation} /></div>
              <div className='col-1 my-2'>

                <CloseButton onClick={(e) => { setShowExplanation(false) }} />

              </div>
            </div>
          </div>
        </Collapse>
      </div>
    );
  }
  return (
    <div class={getContainerClasses()} id={props.id} onClick={(e) => { if (!showExplanation) setShowExplanation(true) }}>
      <h3>{props.mainHeading}</h3>
      <p>{props.children}</p>
      <Collapse in={showExplanation}>
        <div className='container'>
          <div className='row explanation'>
            <div className='col-11 my-2'><CatechismExplanation partID={partID} id={id} display={showExplanation} /></div>
            <div className='col-1 my-2'>

              <CloseButton onClick={(e) => { setShowExplanation(false) }} />

            </div>
          </div>
        </div>
      </Collapse>
    </div>
  )
}
