import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Menu } from 'semantic-ui-react'
import { activeNav, toggleEditMode } from '../actions'

class Nav extends Component {

  handleItemClick = (e, { name }) => {
    this.props.activeNav(name)
  }

  handleEditMode = () => {
    this.props.toggleEditMode()
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
          <Menu.Menu position='right'>
            <Menu.Item
              content={this.props.editMode ? 'Exit Edit' : 'Edit'}
              name='EDIT_MODE'
              onClick={this.handleEditMode}
            />
          </Menu.Menu>
        </Menu>
      </Segment>
      </>
    )
  }
}

const setStateToProps = (state) => {
  return {
    visibilityFilter: state.visibilityFilter,
    editMode: state.editMode
  }
}

export default connect(setStateToProps, { activeNav, toggleEditMode })(Nav)
