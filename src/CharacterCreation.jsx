import { useCallback, useEffect, useState } from 'react'
import StatInput from './StatInput'
import './CharacterCreation.sass'

function CharacterCreation({createCallback, changeStats, player}) {

  return (
      <div className='stats-block'>
        <div className='name-input-block'>
            <span>Your name: </span>
            <input onChange={(e) => changeStats('name', e.target.value)} value={player.name}/>
        </div>
        <StatInput 
            statName='Strength'
            value={player.strength} 
            callback={(value) => changeStats('strength', value)} 
        />
        <StatInput 
            statName='agility'
            value={player.agility} 
            callback={(value) => changeStats('agility', value)} 
        />
        <StatInput 
            statName='intelligence'
            value={player.intelligence} 
            callback={(value) => changeStats('intelligence', value)} 
        />
        <StatInput 
            statName='charisma'
            value={player.charisma} 
            callback={(value) => changeStats('charisma', value)} 
        />
        <button className='submit-btn' onClick={createCallback}>Create character</button>
      </div>
  )
}

export default CharacterCreation