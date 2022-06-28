import React from 'react'
import { connect } from 'react-redux'
import './Task.css'

const Task = ({id, taskValue, handleCheckboxCheck, handleTaskRemoval, editMode}) => {
  return (
    <div className="ui checkbox">
      <input className="hidden" name={id} type="checkbox" value="" />
      <label htmlFor={id} onClick={(e) => handleCheckboxCheck(e)}>
        {taskValue}
      </label>
      {editMode && <button id="remove" name={id} onClick={e => handleTaskRemoval(e)}>Remove</button>}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    editMode: state.editMode
  }
}

export default connect(mapStateToProps, null)(Task)
