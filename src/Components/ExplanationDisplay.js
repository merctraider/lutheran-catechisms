import React from 'react'
import { Collapse } from 'react-bootstrap'
import ExplanationContentArrayHandler from './Explanation/ExplanationContentArrayHandler';

export default function ExplanationDisplay({commentaryData, id, partID}) {
   const {[(id == 'heading')? id:'sections']: content, display:commentaryName} = commentaryData;
   const {[(id=='heading')? partID: id]: commentaryDataArray} = content;

  return (
    
    <div>
      <a>{commentaryName}</a>
      <ExplanationContentArrayHandler array={commentaryDataArray}></ExplanationContentArrayHandler>
      </div>
  )
}
