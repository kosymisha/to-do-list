import React, { useState } from 'react'
import Estimation from './Estimation'
import Excitement from './Excitement'
import TextInput from './TextInput'

function AddForm({ createTask }) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [estimation, setEstimation] = useState({ hr: '0', min: '0' })
  const [dependencies, setDependencies] = useState('')
  const [excitement, setExcitement] = useState(0)

  const onSubmit = () => {
    if (!title.trim()) return
    createTask({
      title: title.trim(),
      dueDate: date,
      estimation,
      dependencies,
      excitement,
      completed: false
    })
    setTitle('')
    setDate('')
    setExcitement(0)
    setEstimation({ hr: '0', min: '0' })
    setDependencies('')
  }

  return <div className='add-form'>
    <h4>What do you need to do?</h4>
    <div className='add-form-field'>
      <TextInput
        id='new-title'
        label='Task Title'
        value={title}
        onChange={({ target }) => setTitle(target.value)}
      />
    </div>
    {(title && title.trim()) && <>
      <div className='add-form-field'>
        <TextInput
          type='date'
          id="due-date"
          value={date}
          onChange={({ target }) => setDate(target.value)}
        />
      </div>
      <div className='add-form-field'>
        <Estimation estimation={estimation} setEstimation={setEstimation}/>
      </div>
      <div className='add-form-field'>
        <Excitement excitement={excitement} setExcitement={setExcitement}/>
      </div>
      <div className='add-form-field'>
        <TextInput
          label='Dependencies'
          id="dependencies-textarea"
          value={dependencies}
          onChange={({ target }) => setDependencies(target.value)}
          isTextarea
        />
      </div>
    </>}
    <button onClick={onSubmit} disabled={!title || !title.trim()}>
      Add
    </button>
  </div>
}

export default AddForm
