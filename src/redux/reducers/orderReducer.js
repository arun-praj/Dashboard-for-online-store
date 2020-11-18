import {
   ORDER_DETAILS_FAILED,
   ORDER_DETAILS_REQUEST,
   ORDER_DETAILS_SUCCESS,
   MY_ORDER_DETAILS_FAILED,
   MY_ORDER_DETAILS_REQUEST,
   MY_ORDER_DETAILS_SUCCESS,
   MODIFY_ORDER_FAILED,
   MODIFY_ORDER_REQUEST,
   MODIFY_ORDER_SUCCESS,
} from "../action/types"

const initialOrderDetailState = {
   orderItems: [],
   loading: true,
   error: null,
}
const orderDetailReducer = (state = initialOrderDetailState, action) => {
   const { payload, type } = action
   switch (type) {
      case ORDER_DETAILS_REQUEST:
         return {
            ...state,
            loading: true,
         }
      case ORDER_DETAILS_SUCCESS:
         return {
            ...state,
            loading: false,
            // shippingAddress: payload.shippingAddress,
            orders: payload,
         }
      case ORDER_DETAILS_FAILED:
         return {
            ...state,
            loading: false,
            orders: [],
            error: payload,
         }
      default:
         return {
            ...state,
         }
   }
}
const myOrderDetailReducer = (state = {}, action) => {
   const { payload, type } = action
   switch (type) {
      case MY_ORDER_DETAILS_REQUEST:
         return {
            ...state,
            loading: true,
         }
      case MY_ORDER_DETAILS_SUCCESS:
         return {
            ...state,
            loading: false,
            order: payload,
         }
      case MY_ORDER_DETAILS_FAILED:
         return {
            ...state,
            loading: false,
            order: [],
            error: payload,
         }
      default:
         return {
            ...state,
         }
   }
}
const modifyOrderStatus = (state = {}, action) => {
   const { payload, type } = action
   switch (type) {
      case MODIFY_ORDER_REQUEST:
         return {
            ...state,
            loading: true,
         }
      case MODIFY_ORDER_SUCCESS:
         return {
            ...state,
            loading: false,
            success: true,
            modifiedOrder: payload,
            error: null,
         }
      case MODIFY_ORDER_FAILED:
         return {
            ...state,
            loading: false,
            success: false,
            error: payload,
         }
      default:
         return state
   }
}
export { orderDetailReducer, myOrderDetailReducer, modifyOrderStatus }
