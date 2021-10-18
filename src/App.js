import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Task from './components/Task'
import AddForm from './components/AddForm'
import { initialTasks } from './constants'
import './App.css'

function App() {
  const [tasks, setTasks] = useState(initialTasks)

  const createTask = (task) => {
    const newTask = {
      id: uuidv4(),
      ...task
    }
    setTasks([ ...tasks, newTask ])
  }

  const deleteTask = id => {
    const filteredTasks = tasks.filter(task => id !== task.id);
    setTasks(filteredTasks);
  }

  const updateTasks = newTask => {
    const updatedTasks = tasks.map(task => {
      if (newTask.id === task.id) {
        return { ...newTask }
      }
      return task
    })
    setTasks(updatedTasks)
  }

  return (<div className="container">
    <AddForm createTask={createTask}/>
      <ul className='tasks-wrapper'>
        {tasks
          .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
          .map(task => <Task
            key={task.id}
            task={task}
            updateTasks={updateTasks}
            deleteTask={deleteTask}
          />)}
      </ul>
    </div>)
}

export default App
