import { combineReducers } from "redux";
import auth from "./auth";
import customers from "./customer";
import products from "./product";

export default combineReducers({
   auth,
   customers,
   products,
});
