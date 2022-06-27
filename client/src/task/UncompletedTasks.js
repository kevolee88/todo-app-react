import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, Header } from 'semantic-ui-react'
import Task from './components/Task'
import { toggleTask } from '../actions'
// import './AllTasks.css'

const UnompletedTasks = ({tasks, toggleTask}) => {
  const handleCheckboxCheck = (e) => {
    const id = e.currentTarget.children[0].name
    toggleTask(id)
  }
  const taskList = tasks.map((e,i) => {
    if(!e.complete) {
      return (
        <li key={i} className={e.complete ? 'completed' : ''}><Task handleCheckboxCheck={handleCheckboxCheck} id={e.id} taskValue={e.value} /></li>
      )
    }
    return null
  });

  return (
    <div id="container">
      <h2>Uncompleted Tasks</h2>
      <List>
        {taskList}
      </List>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps, { toggleTask })(UnompletedTasks)
