import React from 'react'
import { Interweave } from 'interweave'
export default function CatechismSectionHeading({title, subtitle}) {
  return (
    <div className="container my-5" >
            <h1 >{title}</h1>
          <p className="lead"><Interweave content={subtitle}/></p>
    </div>
  )
}
