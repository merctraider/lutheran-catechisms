import React from 'react'
import CatechismSection from './CatechismSection'
import { Interweave } from 'interweave'

export default function CatechismSectionIndex({sections, partID}) {
  return (
    sections.map(section =>{
        return(
            <CatechismSection mainHeading={section.mainHeading} additionalHeading={section.additionalHeading} key={section.id} id={section.id} partID={partID}>
              <Interweave content={section.content}/>
            </CatechismSection>
        )
    })
  )
}
