import React from 'react'
import CatechismSectionHeading from './CatechismSectionHeading'
import CatechismSectionIndex from './CatechismSectionIndex';
import NavigationArrows from './NavigationArrows';
export default function CatechismChiefPart({id, translation}) {
    const heading = translation.heading; 

  return (
    <div id={id} className="section">
        <NavigationArrows/>
        <CatechismSectionHeading title={heading.title} subtitle={heading.subtitle}/>
        <CatechismSectionIndex sections={translation.sections}/>
        <NavigationArrows/>
    </div>
  )
}
