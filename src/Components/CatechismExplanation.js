import React from 'react'
import { Collapse, CloseButton } from 'react-bootstrap';
import ExplanationIndex from './ExplanationIndex';
import { ExplanationHandler } from '../lib/ExplanationHandler';
import {useState} from 'react';     


export default function CatechismExplanation({ partID, id, display}) {
    const handler = new ExplanationHandler(partID, id); 
    
    console.log(handler.explanations); 
    return (
        <Collapse in={display}>
            <div>
                
                <div className='explanation'>
                    <div className='container my-2'>
                    <h5> Explanations</h5>
                    
                    
                    </div>
                    
                </div>
            </div>

        </Collapse>
    )
}
