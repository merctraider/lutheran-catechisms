import React from 'react'

//Commentaries
import Stump from '../Commentaries/stump.json'; 
import JCDietrich from '../Commentaries/dietrich.json'; 
import Loehe from '../Commentaries/loehe.json'; 
import ExplanationDisplay from './ExplanationDisplay';

export default function ExplanationIndex({partID, id}) {
  return (
    <div>
        {id}
        <ExplanationDisplay commentaryName={Stump.display} commentaryData={Stump[partID]} id={id}></ExplanationDisplay>
    </div>
  )
}
