import React from 'react'
import { Collapse, CloseButton } from 'react-bootstrap';
import ExplanationIndex from './ExplanationIndex';
import { ExplanationHandler } from '../../lib/ExplanationHandler';
import { useState } from 'react';


export default function CatechismExplanation({ partID, id, display }) {
    const handler = new ExplanationHandler(partID, id);

    console.log(handler.explanations);

    return (
        <div className='container'>
                <h5> Explanations</h5>
                <ExplanationIndex array={handler.explanations}/>

        </div>
    )
}
