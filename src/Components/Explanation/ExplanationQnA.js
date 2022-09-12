import { Interweave } from 'interweave'
import React from 'react'

export default function ExplanationQnA({cards}) {
  return (
    cards.map(card => {
        return(
            <div className='my-4'>
                <h5>{card.question}</h5>
                <Interweave content={card.answer}></Interweave>
            </div>
        )
    })
  )
}
