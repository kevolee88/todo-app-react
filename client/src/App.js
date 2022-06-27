import React from 'react';
import { connect } from 'react-redux'
import CreatetaskView from './task/CreatetaskView'
import CompletedTasks from './task/CompletedTasks'
import UncompletedTasks from './task/UncompletedTasks'
import Nav from './components/Nav'
import { toggleTask } from './actions'


const App = ({tasks, visibilityFilter}) => {

  const handleCheckboxCheck = (e) => {
    const id = e.currentTarget.children[0].name
    console.log(id)
    toggleTask(id)
  }

  return (
    <div>
      <Nav />
      {visibilityFilter === 'SHOW_ALL' && <CreatetaskView tasks={tasks} handleCheckboxCheck={handleCheckboxCheck} visibilityFilter={visibilityFilter} />}
      {visibilityFilter === 'SHOW_COMPLETE' && <CompletedTasks tasks={tasks} handleCheckboxCheck={handleCheckboxCheck} />}
      {visibilityFilter === 'SHOW_UNCOMPLETE' && <UncompletedTasks tasks={tasks} handleCheckboxCheck={handleCheckboxCheck} />}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    visibilityFilter: state.visibilityFilter
  }
}

export default connect(mapStateToProps, {toggleTask})(App)
