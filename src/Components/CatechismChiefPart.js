import React from 'react'
import CatechismSectionHeading from './CatechismSectionHeading'
import CatechismSectionIndex from './CatechismSectionIndex';
export default function CatechismChiefPart({id, translation}) {
    const heading = translation.heading; 

  return (
    <div id={id} className="section" data-bs-spy="scroll" data-bs-target="#enchiridon-nav">
        <CatechismSectionHeading title={heading.title} subtitle={heading.subtitle}/>
        <CatechismSectionIndex sections={translation.sections}/>
    </div>
  )
}
