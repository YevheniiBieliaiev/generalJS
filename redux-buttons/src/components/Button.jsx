import { useDispatch, useSelector } from "react-redux";
import changeColor from "../action/change_color";
import { colorsArray } from "../ButtonsColorArray";
import gID from "../Generator";

function ButtonWrapper() {
  const backgroundColor = useSelector((state) => state.backgroundColor);
  const dispatch = useDispatch();

  const setChangeColor = (colorValue) => {
    dispatch(changeColor(colorValue));
  }

  return (
    <div className="button__wrapper">
      {colorsArray.map(color => {
        return (
          <button
            key={gID()}
            style={{ background: backgroundColor }}
            value={color.toLowerCase()}
            onClick={(e) => setChangeColor(e.target.value)}>
            {color}
          </button>
        );
      })}
    </div>
  );
}

export default ButtonWrapper;