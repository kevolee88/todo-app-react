import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, Header } from 'semantic-ui-react'
import Task from './Task'
import { toggleTask } from '../../actions'
import './AllTasks.css'

const AllTasks = ({tasks, toggleTask}) => {

  const handleCheckboxCheck = (e) => {
    const id = e.currentTarget.children[0].name
    toggleTask(id)
  }
  const taskList = tasks.map((e,i) => {
    return (
      <li key={i} className={e.complete ? 'completed' : ''}><Task handleCheckboxCheck={handleCheckboxCheck} id={e.id} taskValue={e.value} /></li>
    )
  })

  return (
    <>
      <h2>All Tasks</h2>
      <List>
        {taskList}
      </List>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps, { toggleTask })(AllTasks)
