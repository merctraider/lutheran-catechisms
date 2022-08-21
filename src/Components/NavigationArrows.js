import React from 'react'
import { Interweave } from 'interweave'
export default function NavigationArrows() {
    const order = [
        {
            id: 'preface', 
            display:'Preface'
        }
        , 
        {
            id: 'ten-commandments', 
            display: 'The Ten Commandments'
        }, 
        {
            id:'creed',
            display: 'The Creed'
        }, 
        {
            id:'lords-prayer', 
            display: 'The Lord’s Prayer' 
        }, 
        {
            id:'baptism', 
            display: 'Sacrament of Holy Baptism'
        }
        , 
        {
            id:'confession', 
            display: 'Confession'
        }, 
        {
            id:'lords-supper', 
            display: 'Sacrament of the Altar'
        }, 
        {
            id:'prayers', 
            display: 'Prayers'
        }, 
        {
            id:'table-of-duties', 
            display:'Table of Duties'
        }
    ]

    let pathname = window.location.pathname.replace(/\//g, '');

    let i = order.findIndex(element => element.id == pathname); 
    
    let output = ''; 

    //Previous arrow
    if(i > 0){
        output += '<span class="p-1"><a class="btn-sm btn btn-outline-secondary" href=/' + order[i-1].id + window.location.hash +'>←' + order[i-1].display + '</a></span>';
    }

     //Next arrow
     if(i < order.length - 1){
        output += '<span class="p-1"><a class="btn-sm btn btn-outline-secondary" href=/' + order[i+1].id + window.location.hash + '>' + order[i+1].display + '→</a></span>';
    }

    return (
        <div className='part-transition-container text-muted d-flex flex-row'>
            <Interweave content={output}/>
        </div>
    )
}
