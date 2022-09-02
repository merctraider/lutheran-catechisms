import React from 'react'
import { Interweave } from 'interweave'
export default function ExplanationContentArrayHandler({ array }) {
    return(
        array.map(section =>{
            return(<div>{section.heading}
            <Interweave content={section.content}/>
            </div>)
        })
    )
}
