import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, Header } from 'semantic-ui-react'
import Task from './components/Task'
import { toggleTask, removeTask } from '../actions'

const UnompletedTasksView = ({tasks, toggleTask, removeTask}) => {
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
      if(!e.complete) {
        return (
          <li key={i} className={e.complete ? 'completed' : ''}>
            <Task handleCheckboxCheck={handleCheckboxCheck} handleTaskRemoval={handleTaskRemoval} id={e.id} taskValue={e.value} />
          </li>
        )
      }
      return null
    })
  }

  return (
    <div id="container">
      <h2>Uncompleted Tasks</h2>
      <List>
        {renderTaskList()}
      </List>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    tasks: Object.values(state.tasks)
  }
}

export default connect(mapStateToProps, { toggleTask, removeTask })(UnompletedTasksView)
