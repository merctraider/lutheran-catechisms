import React from 'react'
import { Accordion, Button } from 'react-bootstrap'
import ExplanationContent from './ExplanationContent'


export default function ExplanationIndex({ array }) {

  return (
    array.map(explanation => {
      return (
        <div key={explanation.display}>
          <Accordion>
            <Accordion.Header>{explanation.display}</Accordion.Header>
            <Accordion.Body>
              <ExplanationContent content={explanation.content}/>
            </Accordion.Body>
          </Accordion>

        </div>
      )
    })
  )
}
