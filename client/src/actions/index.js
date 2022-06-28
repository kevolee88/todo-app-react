import { v4 as uuidv4 } from 'uuid'
import todos from '../apis/todos'

// Action Creator
export const addTask = (taskName) => async dispatch => {
  const task = {
    id: uuidv4(),
    value: taskName,
    complete: false
  }

  const res = await todos.post('/todos', task)

  dispatch({type: 'ADD_TASK', payload: res.data})
}

export const completeTask = (tasks) => {
  return {
    type: 'REMOVE_TASK',
    payload: task.value
  }
}

export const toggleTask = (id) => async (dispatch, getState) => {
  const task = getState().tasks[id]
  let updatedTask = {
    ...task,
    complete: !task.complete
  }
  const res = await todos.patch(`/todos/${id}`, { complete: updatedTask.complete})

  dispatch({type: 'TOGGLE_TASK', payload: updatedTask})
}

export const fetchTasks = () => async (dispatch) => {
  const res = await todos.get('/todos')

  dispatch({type: 'FETCH_TASKS', payload: res.data})
}

export const removeTask = (id) => async dispatch => {
  const res = await todos.delete(`/todos/${id}`)
  
  dispatch({type: 'REMOVE_TASK', payload: id})
}

export const activeNav = (menuItem) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter: menuItem
  }
}

export const toggleEditMode = () => {
  return {
    type: 'TOGGLE_EDIT_MODE'
  }
}
