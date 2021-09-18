


const defaultColors = {
  backgroundColor: ""
}

const colorReducer = (state = defaultColors, action) => {
  if (action.type) {
    return {
      backgroundColor: action.payload
    }
  }
  return state;
}


export default colorReducer;