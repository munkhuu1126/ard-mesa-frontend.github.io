import React, { useEffect, useState } from 'react'
import player1 from '../img/plr2.png'
import player2 from '../img/plr3.png'
import player3 from '../img/plr4.png'
import player4 from '../img/plr5.png'
import player5 from '../img/plr6.png'
import { nanoid } from 'nanoid'
import player6 from '../img/plr1.png'
import axios from 'axios';
import Swal from 'sweetalert2'


export default function Players() {

  let [players, setPlayers] = useState([]);
  
  players.sort((a,b)=>{
    return a.id - b.id
  })



  const [selectedPlayer, setSelectedPlayer] = useState({});
  

  const sendVote = (id) => {
    setSelectedPlayer(players.filter(player => player.id === id)[0]);
    

  }
  

  useEffect(async () => {
    await axios.get('https://strapi.monnom.mn/mesas')
      .then(res => {
        
        setPlayers(res.data.map(player =>{ 
          return ({
          id: player.id,
          plr: player.image.url,
          score: player.vote,
          name: player.name
        })}))
      })
      .catch(() => console.log("error occured during initialization"))
  }, [])


  useEffect(() => {
    console.log(selectedPlayer)
    if (selectedPlayer !== null) {
      setPlayers(prevPlayers => prevPlayers.map(player => {
        if (player.id === selectedPlayer.id) {
    
          return {
            ...selectedPlayer,
            score: selectedPlayer.score,
          }
        } else {
      
          return player;
        }
      }))
    }
    
    
  }, [selectedPlayer])

  
  const onSubmit = async () => {
    await axios.put(`https://strapi.monnom.mn/mesas/${selectedPlayer.id}`, { vote: selectedPlayer.score + 1  })
      .then( res => {
        console.log(res.data)
      }).catch(err => {console.log(err)})
      window.location.reload();
      
      
  }


  return (

    <div className="">
      <div className="flex justify-evenly">
        {
          players.map((player, index) => {
            return (
              <div className="" key={index}>
                <button onClick={() => sendVote(player.id)} className={`text-white focus:opacity-25 transition ease-in duration-100  py-2 px-6  align-middle`} >
                <img src={player.plr} alt="" key={nanoid()} className= {` h-auto`} />
                </button>
                <p className="text-white text-4xl custom-font ">{player.name}</p>
                <p className='text-white text-4xl'>{player.score}</p>
                

              </div>
            )
          })
        }
      </div>
      <div className="flex justify-center mt-5">

        <button className={`bg-red-500 flex p-2 px-8 text-4xl text-center transition ease-in duration-100 rounded-md hover:opacity-50 text-white`} onClick={() => onSubmit()}>Санал өгөх</button>
      </div>

    </div>
  )
}
