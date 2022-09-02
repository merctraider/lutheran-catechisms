import React from 'react'
import { Collapse, Card } from 'react-bootstrap';

export default function CatechismExplanation({ sectionID, id, display }) {

    return (
        <Collapse in={display}>
            <div>Explanation</div>

        </Collapse>
    )
}
