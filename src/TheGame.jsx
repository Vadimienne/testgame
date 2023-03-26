import { useCallback, useEffect, useState } from 'react'
import CharacterCreation from './CharacterCreation'
import { encounters } from './encounters'

import './TheGame.sass'

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function TheGame({changeStats, player}) {

  // random game events

  let randomizeEncounter = () => {
    return encounters[getRandomInt(encounters.length)]
  }

  let processEncounter = () => {
    let encounter = randomizeEncounter()

    let {statAffected, effect} = encounter

    window.alert(encounter.text)
    changeStats(statAffected, player[statAffected] + effect)
  }


  if(player.vitality <= 0) {
    return(
      <div className='death-screen'>
        ВЫ УМЕРЛИ
      </div>
    )
  }

  return (
    <div className="TheGame">
        <div className='statlist'>
        {Object.keys(player).filter(el => el != 'isCharacterCreated').map(el => {
            return (
                <div className='statlist-el' key={'stat'+el}>
                    <span className='stat-name'>{el}</span>
                    <span className='stat-value'>{player[el]}</span>
                </div>
            )
        })}
        </div>
        <button onClick={processEncounter}>Навстречу приключениям!</button>
    </div>
  )
}

export default TheGame