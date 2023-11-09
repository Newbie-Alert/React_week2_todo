// Action Value
const CLOSE = "modal/CLOSE";
const OPEN = "modal/OPEN"

// Action creator
export const closeState = () => {
  return { type: CLOSE }
}

export const openState = () => {
  return { type: OPEN }
}


// InitValue
const initialValue = false;


// Reducer
export const modalSwitch = (state = initialValue, action) => {
  switch (action.type) {
    case CLOSE:
      return state = false;
    case OPEN:
      return state = true;
    default:
      return state;
  }
}


export default modalSwitch