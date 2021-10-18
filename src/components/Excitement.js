import React from 'react'
import { excitementTitles } from '../constants/index'

const Excitement = ({ excitement, setExcitement }) => {
  return <>
    <label>
      Excitement Level: {excitementTitles[excitement]}
    </label>
    <div className='estimation-input-wrapper'>
      <input
        type='range'
        className='range-input'
        value={excitement}
        onChange={({ target }) => setExcitement(target.value)}
        min='0'
        max='2'
      />
    </div>
  </>
}

export default Excitement
