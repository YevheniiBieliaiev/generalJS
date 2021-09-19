import { ACTION_CHANGE_COLOR } from "../constants";


const defaultColors = {
  backgroundColor: ""
}

const colorReducer = (state = defaultColors, action) => {
  if (action.type === ACTION_CHANGE_COLOR) {
    return {
      backgroundColor: action.payload
    }
  }
  return state;
}


export default colorReducer;