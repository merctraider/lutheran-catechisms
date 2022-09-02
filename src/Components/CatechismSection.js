import React from 'react'
import { Interweave } from 'interweave'

export default function CatechismSection(props) {
    if(props.additionalHeading != undefined){
        return (
        <div class="container my-5 verse" id={props.id}>
            <h2 className='h5'> {props.additionalHeading} </h2>
            <h3><Interweave content={props.mainHeading}/></h3>
            <p>{props.children}</p>
        </div>
        );
    }
  return (
    <div class="container my-5 verse" id={props.id}>
        <h3>{props.mainHeading}</h3>
        <p>{props.children}</p>
        
    </div>
  )
}
