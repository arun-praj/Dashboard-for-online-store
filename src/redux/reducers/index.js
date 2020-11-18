import { combineReducers } from "redux"
import auth from "./auth"
import customers from "./customer"
import { productReducer } from "./product"
import {
   orderDetailReducer,
   myOrderDetailReducer,
   modifyOrderStatus,
} from "./orderReducer"
export default combineReducers({
   auth,
   customers,
   products: productReducer,
   orderDetails: orderDetailReducer,
   myOrder: myOrderDetailReducer,
})
