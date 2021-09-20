import { ACTION_CHANGE_COLOR } from "../constants";

const changeColor = (colorValue) => ({
  type: ACTION_CHANGE_COLOR,
  payload: colorValue
})

export default changeColor;