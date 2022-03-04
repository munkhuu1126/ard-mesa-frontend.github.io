import React from 'react'
import player1 from '../img/plr1.png'
import player2 from '../img/plr2.png'
import player3 from '../img/plr3.png'
import player4 from '../img/plr4.png'
import player5 from '../img/plr5.png'
import { nanoid } from 'nanoid'
import player6 from '../img/plr6.png'

export default function Players() {
    const collection = [player1, player2, player3, player4, player5, player6]
    const players = collection.map((player)=> {
        return(
        
            <img src={player} alt="" key={nanoid()} className="inline" width="300" />
        
        )
    }) 
  return (
    <div>
        {players}
    </div>
  )
}
