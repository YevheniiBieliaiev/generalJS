import { createStore } from "redux";
import colorReducer from "./reducer/changeColor";

const store = createStore(colorReducer);

export default store;