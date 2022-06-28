import { combineReducers } from 'redux'
import _ from 'lodash'

const tasksReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_TASK':
      return {...state, [action.payload.id]: action.payload}
    case 'TOGGLE_TASK':
      return {...state, [action.payload.id]: action.payload}
    case 'FETCH_TASKS':
      return { ...state, ..._.mapKeys(action.payload, 'id')}
    case 'REMOVE_TASK':
      return _.omit(state, action.payload)
    default:
      return state
  }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state;
  }
}

const editModeReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_EDIT_MODE':
      return !state
    default:
      return state
  }
}

export default combineReducers({
  tasks: tasksReducer,
  visibilityFilter,
  editMode: editModeReducer
})
