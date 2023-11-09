const CLOSE = "CLOSE";
const OPEN = "OPEN"

export const closeState = () => {
  return { type: CLOSE }
}

export const openState = () => {
  return { type: OPEN }
}


const initialValue = false;


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