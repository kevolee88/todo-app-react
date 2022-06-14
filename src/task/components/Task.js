import React from 'react'
import { Checkbox } from 'semantic-ui-react'
import './Task.css'

const Task = ({id, taskValue, handleCheckboxCheck}) => {
  return (
    <>
      <Checkbox onClick={(e) => handleCheckboxCheck(e)} name={id} label={taskValue} />
    </>
  )
}

export default Task
