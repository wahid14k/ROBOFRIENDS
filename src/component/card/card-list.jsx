import React from 'react'
import './Card-list.style.css'
import {Card} from '../cardcomp/card.component'
export const CardList =props => {
    return(
        <div className='Card-List'>
             {
        props.monsters.map(monster=> (
        <Card key={monster.id} monster={monster}/>
        )
        )}
        </div> 
    )
}