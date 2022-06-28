import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Button } from 'semantic-ui-react'
import AllTasks from './components/AllTasks'
import CompletedTasksView from './CompletedTasksView'
import './CreatetaskView.css'
import { addTask, fetchTasks } from '../actions'

class CreatetaskView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.updateInputValue = this.updateInputValue.bind(this);
    this.handleNewTask = this.handleNewTask.bind(this);
  }

  componentDidMount() {
    this.props.fetchTasks()
  }

  updateInputValue(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleNewTask() {
    if(this.state.value.length) this.props.addTask(this.state.value)
    this.setState({
      value: ''
    })
  }

  render() {
    const allTasks = this.props.tasks
    return (
      <>
      <div id="container">
        <h2>Add Task</h2>
        <Input onChange={evt => this.updateInputValue(evt)} placeholder="What do you want to do?" value={this.state.value} />
        <Button onClick={() => this.handleNewTask()} color="teal" fluid={true} content="Add Task" />
        {allTasks.length > 0 && <AllTasks tasks={allTasks} />}
      </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: Object.values(state.tasks),
    visibilityFilter: state.visibilityFilter
  }
}

export default connect(mapStateToProps, { addTask, fetchTasks })(CreatetaskView)
