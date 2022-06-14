// Action Creator
export const addTask = (task) => {
  return {
    type: 'ADD_TASK',
    payload: task
  }
}

export const completeTask = (tasks) => {
  return {
    type: 'REMOVE_TASK',
    payload: task.value
  }
}

export const toggleTask = (id) => {
  return {
    type: 'TOGGLE_TASKS',
    payload: id
  }
}

export const activeNav = (menuItem) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter: menuItem
  }
}
