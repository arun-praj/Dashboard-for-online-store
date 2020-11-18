import {
   PRODUCT_LOAD_SUCCESS,
   PRODUCT_LOAD_FAILED,
   PRODUCT_ADD_SUCCESS,
   PRODUCT_ADD_FAILED,
   PRODUCT_DELETE_FAILED,
   PRODUCT_DELETE_SUCCESS,
} from "../action/types"

const initialState = {
   loading: true,
   products: null,
   count: 0,
}

const productReducer = (state = initialState, action) => {
   const { payload, type } = action
   switch (type) {
      case PRODUCT_LOAD_SUCCESS:
         return {
            ...state,
            loading: false,
            products: payload.data,
            count: payload.count,
         }
      case PRODUCT_LOAD_FAILED:
         return {
            ...state,
            loading: false,
            products: null,
         }
      case PRODUCT_DELETE_SUCCESS:
         return {
            ...state,
         }
      case PRODUCT_DELETE_FAILED:
         return {
            ...state,
         }
      case PRODUCT_ADD_SUCCESS:
         return {
            ...state,
         }

      case PRODUCT_ADD_FAILED:
         return {
            ...state,
         }

      default:
         return state
   }
}

export { productReducer }
