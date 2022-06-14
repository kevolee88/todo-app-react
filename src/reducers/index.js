import { combineReducers } from 'redux'
import { v4 as uuidv4 } from 'uuid'

const tasksReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: uuidv4(),
          value: action.payload,
          complete: false
        }
      ]
    case 'TOGGLE_TASKS':
      return state.map((task) => {
            if (action.payload !== task.id) {
              return task
            }
            return {
              ...task,
              complete: !task.complete
            }
          })
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

export default combineReducers({
  tasks: tasksReducer,
  visibilityFilter
})
