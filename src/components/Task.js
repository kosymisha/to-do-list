import React, { useEffect, useState } from 'react'
import Estimation from './Estimation'
import Excitement from './Excitement'
import TextInput from './TextInput'
import { excitementTitles } from '../constants/index'

function Task({ task, updateTasks, deleteTask }) {
  const [isEditing, setEditing] = useState(false)
  const [dueDate, setDueDate] = useState('')
  const [estimation, setEstimation] = useState({ hr: 0, min: 0 })
  const [excitement, setExcitement] = useState(0)
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    setDueDate(task.dueDate)
    setEstimation(task.estimation)
    setExcitement(task.excitement)
    setCompleted(task.completed)
  }, [])

  useEffect(() => {
    setCompleted(task.completed)
  }, [task])

  const onEdit = () => {
    setEditing(true)
  }

  const onDelete = () => {
    deleteTask(task.id)
  }

  const onSave = () => {
    setEditing(false)
    updateTasks({ ...task, dueDate, completed, estimation, excitement })
  }

  const onComplete = () => {
    updateTasks({ ...task, completed: !completed })
    setCompleted(!completed)
  }

  const onCancel = () => {
    setEditing(false)
  }

  return <li className='task-container'>
    {isEditing
      ? <div className='task-edit'>
        <div className='form-wrapper'>
          <div className='task-title'>
            <input type="checkbox" id="scales" checked={completed} onChange={onComplete} />
            {task.title}
          </div>
          <TextInput
            label='Due Date'
            id='due-date'
            type='date'
            value={dueDate}
            onChange={({ target }) => setDueDate(target.value)}
          />
          <Estimation estimation={estimation} setEstimation={setEstimation} />
          <Excitement excitement={excitement} setExcitement={setExcitement} />
        </div>
        <div className='button-wrapper'>
          <button onClick={onSave}>save</button>
          <button onClick={onCancel}>cancel</button>
        </div>
      </div>
      : <div className='task-show'>
        <div className='info-wrapper'>
          <div className='task-title'>
            <input type="checkbox" id="scales" checked={completed} onChange={onComplete} />
            {task.title}
          </div>
          <div>Excitement Level: {excitementTitles[excitement]}</div>
          {task.dueDate && <div>Due date: {task.dueDate}</div>}
          {task.estimation && <div>{`Time to complete: ${task.estimation.hr} hr ${task.estimation.min} min`}</div>}
          {task.dependencies && <div>Dependencies: {task.dependencies}</div>}
        </div>
        <div className='button-wrapper'>
          <button onClick={onEdit}>edit</button>
          <button onClick={onDelete}>delete</button>
        </div>
      </div>}
  </li>
}

export default Task
