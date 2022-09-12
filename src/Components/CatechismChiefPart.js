import React from 'react'
import { Helmet } from 'react-helmet';
import CatechismSectionHeading from './CatechismSectionHeading'
import CatechismSectionIndex from './CatechismSectionIndex';
import NavigationArrows from './NavigationArrows';
export default function CatechismChiefPart({id, translation}) {

    if(translation == null){
      return("Translation not found")
    }

    const heading = translation.heading; 

  return (
    <div id={id} className="section">
        <Helmet>
          <title>{heading.title} — Luther's Small Catechesim</title>
          <meta name="description" content={heading.subtitle} />
          <meta name="keywords" content="christian instruction book, the small catechism, luther's small catechism, luthers small catechism, small catechism online, free small catechism, enchiridion"></meta>
        </Helmet>
        <NavigationArrows/>
        <CatechismSectionHeading title={heading.title} subtitle={heading.subtitle} partID={id}/>
        <CatechismSectionIndex sections={translation.sections} partID={id}/>
        <NavigationArrows/>
    </div>
  )
}
