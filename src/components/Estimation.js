import React from 'react'

const Estimation = ({ estimation, setEstimation }) => {
  const onChange = ({ target }) => {
    setEstimation(state =>
      target.name === 'hours'
        ? { ...state, hr: target.value }
        : { ...state, min: target.value })
  }

  return <>
    <label>
      Expected time to complete:
    </label>
    <div className='estimation-input-wrapper'>
      <input
        type='number'
        name='hours'
        className='estimation-input'
        value={estimation.hr}
        onChange={onChange}
        min='0'
      /> hr
      <input
        type='number'
        name='minutes'
        className='estimation-input'
        value={estimation.min}
        onChange={onChange}
        min='0'
        max='59'
      /> min
    </div>
  </>
}

export default Estimation
