import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, Header } from 'semantic-ui-react'
import Task from './Task'
import { toggleTask, removeTask } from '../../actions'
import './AllTasks.css'

const AllTasks = ({ tasks, toggleTask, removeTask }) => {

  const handleCheckboxCheck = (e) => {
    const id = e.target.htmlFor
    toggleTask(id)
  }

  const handleTaskRemoval = (e) => {
    const id = e.target.name
    removeTask(id)
  }

  const renderTaskList = () => {
    return tasks.map((e,i) => {
      return (
        <li key={i} className={e.complete ? 'completed' : ''}>
          <Task handleCheckboxCheck={handleCheckboxCheck} handleTaskRemoval={handleTaskRemoval} id={e.id} taskValue={e.value} />
        </li>
      )
    })
  }

  return (
    <>
      <h2>All Tasks</h2>
      <List>
        {renderTaskList()}
      </List>
    </>
  )
}

export default connect(null, { toggleTask, removeTask })(AllTasks)
