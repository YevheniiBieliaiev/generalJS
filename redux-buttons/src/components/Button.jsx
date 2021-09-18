import { useDispatch, useSelector } from "react-redux";
import changeColor from "../action/change_color";

function ButtonWrapper() {
  const backgroundColor = useSelector((state) => state.backgroundColor);
  const dispatch = useDispatch();

  const setChangeColor = (colorValue) => {
    dispatch(changeColor(colorValue));
  }

  return (
    <div className="button__wrapper">
      <button
        style={{ background: backgroundColor }}
        value="green"
        onClick={(e) => setChangeColor(e.target.value)}>
        Green
      </button>

      <button
        style={{ background: backgroundColor }}
        value="red"
        onClick={(e) => setChangeColor(e.target.value)}>
        Red
      </button>

      <button
        style={{ background: backgroundColor }}
        value="blue"
        onClick={(e) => setChangeColor(e.target.value)}>
        Blue
      </button>
    </div>
  );
}

export default ButtonWrapper;