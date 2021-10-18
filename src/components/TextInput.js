import React from 'react'

const TextInput = ({ type, id, label, isTextarea, value, onChange }) => {
  return <>
    <label htmlFor={id}>
      {label}
    </label>
    {isTextarea ? <textarea
      id={id}
      value={value}
      onChange={onChange}
    /> : <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
    />}
  </>
}

export default TextInput
