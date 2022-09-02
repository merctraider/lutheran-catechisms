import React from 'react'
import { Collapse, Card } from 'react-bootstrap';
import ExplanationIndex from './ExplanationIndex';

export default function CatechismExplanation({ partID, id, display }) {
    return (
        <Collapse in={display}>
            <div>
                <div className='explanation'>
                    <div className='container my-2'>
                    <h5>Explanations</h5>
                    <ExplanationIndex partID={partID} id={id}></ExplanationIndex>
                    </div>
                    
                </div>
            </div>

        </Collapse>
    )
}
