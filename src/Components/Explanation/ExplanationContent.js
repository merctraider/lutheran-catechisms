import React from 'react'
import { Interweave } from 'interweave';
import ExplanationQnA from './ExplanationQnA';

export default function ExplanationContent({ content }) {
    console.log(content);
    return (content.map(
        element => {
            if (element.type == 'html') {
                return (<div>
                    <h4>{element.heading}</h4>
                    <Interweave content={element.content}></Interweave>
                </div>)
            }

            if (element.type == 'qna') {
                return (
                    <div>
                        <h4>{element.heading}</h4>
                        <div className=''>
                            <ExplanationQnA cards={element.content} />
                        </div>

                    </div>
                )
            }
        }
    ));
}
