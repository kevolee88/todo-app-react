import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Menu } from 'semantic-ui-react'
import { activeNav } from '../actions'

class Nav extends Component {
  constructor(props) {
    super(props)

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.props.activeNav(name)
  }



  render() {
    return (
      <>
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            content='All Tasks'
            name='SHOW_ALL'
            active={this.props.visibilityFilter === 'SHOW_ALL'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            content='Uncompleted'
            name='SHOW_UNCOMPLETE'
            active={this.props.visibilityFilter === 'SHOW_UNCOMPLETE'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            content='Completed'
            name='SHOW_COMPLETE'
            active={this.props.visibilityFilter === 'SHOW_COMPLETE'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
      </>
    )
  }
}

const setStateToProps = (state) => {
  return {
    tasks: state.tasks,
    visibilityFilter: state.visibilityFilter
  }
}

export default connect(setStateToProps, { activeNav })(Nav)
