import { combineReducers } from "redux";
import cats from "./cats";
import cat from "./cat";
export default combineReducers({
  imageCats: cats,
  imageCat: cat
});
