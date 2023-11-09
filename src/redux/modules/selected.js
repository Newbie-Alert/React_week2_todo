// Action Value
const SELECT = "selected/SELECT"

// Action creator
export const setSelected = (payload) => {
  return { type: SELECT, id: payload }
}

// InitValue
const initialValue = null;

// Reducer
const selected = (state = initialValue, action) => {
  switch (action.type) {
    case SELECT:
      return state = action.id
    default:
      return state
  }
}


export default selected