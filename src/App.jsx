import { useEffect, useState } from 'react'
import CharacterCreation from './CharacterCreation'
import TheGame from './TheGame'
import './App.sass'
import ImportExport from './ImportExport'

const skillMaxValue = 10
const skillMinValue = 1

let playerDefault = {
  name: 'John Doe',
  strength: skillMinValue,
  agility: skillMinValue, 
  intelligence: skillMinValue, 
  charisma: skillMinValue,
  isCharacterCreated: false
}



function App() {
  const [player, setPlayer] = useState(playerDefault)
  const [saveFileURL, setSaveFileURL] = useState()


  // stats change handler

  let changeStats = (statName, value) => {

    let valueCopy = value

    if (['strength', 'agility', 'intelligece', 'charisma'].includes(statName)){
      if (valueCopy > skillMaxValue){
        valueCopy = skillMaxValue
      }
      if (valueCopy < skillMinValue){
        valueCopy = skillMinValue
      }
    }

    if (['attack'].includes(statName)){
      if (valueCopy > player.strength){
        valueCopy = player.strength
      }
      if (valueCopy < skillMinValue){
        valueCopy = skillMinValue
      }
    }

    if (['stealth', 'archery'].includes(statName)){
      if (valueCopy > player.agility){
        valueCopy = player.agility
      }
      if (valueCopy < skillMinValue){
        valueCopy = skillMinValue
      }
    }

    if (['learnability', 'survival', 'medicine'].includes(statName)){
      if (valueCopy > player.intelligence){
        valueCopy = player.intelligence
      }
      if (valueCopy < skillMinValue){
        valueCopy = skillMinValue
      }
    }

    if (['intimidation', 'insight', 'appearance', 'manipulation'].includes(statName)){
      if (valueCopy > player.charisma){
        valueCopy = player.charisma
      }
      if (valueCopy < skillMinValue){
        valueCopy = skillMinValue
      }
    }

    setPlayer({
      ...player,
      [statName]: valueCopy
    })
  }

  let submitCharacterCreation = () => {

    let {agility, strength, intelligence, charisma} = player

    let newPlayer = {
      ...player,
      vitality: 3 + strength,
      dodge: 10 + agility,
      energy: agility + intelligence,

      // strengthSkills
      attack: 1,
  
      // agilitySkills
      stealth: 1,
      archery: 1,
      
      // intelligenceSkills
      learnability: 1,
      survival: 1,
      medicine: 1,
      
      // charismaSkills
      intimidation: 1,
      insight: 1,
      appearance: 1, 
      manipulation: 1,
      
      isCharacterCreated: true
    }

    setPlayer(newPlayer)
  }


  // save file reader
  function readFile(input) {
    let file = input.target.files[0];

    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function() {
      setPlayer(JSON.parse(reader.result))
      console.log(reader.result);
    };

    reader.onerror = function() {
      console.log(reader.error);
    };
  }

  // update save file for export
  useEffect(() => {
    setSaveFileURL(window.URL.createObjectURL(new Blob([JSON.stringify(player)])))
  }, [player])

  return (
    <div className="App">
      {!player.isCharacterCreated && 
        <CharacterCreation 
          createCallback={submitCharacterCreation} 
          changeStats={changeStats} 
          player={player}
        />
      }
      {player.isCharacterCreated &&
        <TheGame 
          changeStats={changeStats} 
          player={player}
        />
      }
        <ImportExport 
          player={player} 
          readFile={readFile} 
          saveFileURL={saveFileURL} 
        />
    </div>
  )
}

export default App
