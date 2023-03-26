import { useEffect, useState } from 'react'
import './StatInput.sass'

function StatInput({statName, value, callback}) {

  return (
    <div className="stat-input">
        <span>{statName}: </span>
        <div className='stat-change-block'>
          <button onClick={() => callback(value - 1)}>-</button>
          <span>{value}</span>
          <button onClick={() => callback(value + 1)}>+</button>
        </div>
    </div>
  )
}

export default StatInput