import React from 'react'
import CatechismSectionHeading from './CatechismSectionHeading'
import CatechismSectionIndex from './CatechismSectionIndex';
export default function CatechismChiefPart({id, translation}) {
    const heading = translation.heading; 

  return (
    <div id={id} className="section">
        <CatechismSectionHeading title={heading.title} subtitle={heading.subtitle}/>
        <CatechismSectionIndex sections={translation.sections}/>
    </div>
  )
}
