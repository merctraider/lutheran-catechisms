import React from 'react'
import { Interweave } from 'interweave'
import CatechismExplanation from './CatechismExplanation';
import { useState } from 'react';

export default function CatechismSection(props) {
  const [showExplanation, setShowExplanation] = useState(false); 
    if(props.additionalHeading != undefined){
        return (
        <div class="container my-5 verse" id={props.id} onClick={(e) => {setShowExplanation(!showExplanation)}}>
            <h2 className='h5'> {props.additionalHeading} </h2>
            <h3><Interweave content={props.mainHeading}/></h3>
            <p>{props.children}</p>
            <CatechismExplanation partID={props.partID} id={props.id} display={showExplanation}/>
        </div>
        );
    }
  return (
    <div class="container my-5 verse" id={props.id} onClick={(e) => {setShowExplanation(!showExplanation)}}>
        <h3>{props.mainHeading}</h3>
        <p>{props.children}</p>
        <CatechismExplanation partID={props.partID} id={props.id} display={showExplanation}/>
    </div>
  )
}
