import { combineReducers, legacy_createStore as createStore } from "redux";
import todos from "../modules/todo";
import modalSwitch from "../modules/modal";
import selected from "../modules/selected";

// ROOT REDUCER
const rootReducer = combineReducers({
  todos,
  modalSwitch,
  selected
})

// STORE
const store = createStore(rootReducer);


export default store