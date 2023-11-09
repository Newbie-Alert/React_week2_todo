const SELECT = "selected/SELECT"

const initialValue = null;

export const setSelected = (payload) => {
  return { type: SELECT, id: payload }
}

const selected = (state = initialValue, action) => {
  switch (action.type) {
    case SELECT:
      return state = action.id
    default:
      return state
  }
}


export default selected