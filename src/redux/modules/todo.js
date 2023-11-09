// Action Value
const CHANGE_STATUS = "todo/CHANGE_STATUS"
const ADD_TASK = "todo/ADD_TASK"
const DELETE_TASK = "todo/DELETE_TASK"

// Action creator
export const addTask = (payload) => {
  return { type: ADD_TASK, payload }
}
export const changeStatus = (payload) => {
  return { type: CHANGE_STATUS, id: payload }
}
export const deleteTask = (payload) => {
  return { type: DELETE_TASK, id: payload }
}

// state (초기값)
const initialValue = []

// reducer
const todos = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload]
    case CHANGE_STATUS:
      let found = state.find(el => el.id === action.id)
      found.isDone = !found.isDone;
      return [...state, { found }]
    case DELETE_TASK:
      let filtered = state.filter(el => el.id !== action.id)
      return state = [...filtered]
    default:
      return state
  }
}

export default todos