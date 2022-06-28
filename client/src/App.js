import React from 'react';
import { connect } from 'react-redux'
import CreatetaskView from './task/CreatetaskView'
import CompletedTasksView from './task/CompletedTasksView'
import UncompletedTasksView from './task/UncompletedTasksView'
import Nav from './components/Nav'
import { toggleTask } from './actions'


const App = ({visibilityFilter}) => {

  return (
    <div>
      <Nav />
      {visibilityFilter === 'SHOW_ALL' && <CreatetaskView visibilityFilter={visibilityFilter} />}
      {visibilityFilter === 'SHOW_COMPLETE' && <CompletedTasksView />}
      {visibilityFilter === 'SHOW_UNCOMPLETE' && <UncompletedTasksView />}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    visibilityFilter: state.visibilityFilter
  }
}

export default connect(mapStateToProps, {toggleTask})(App)
