import { CUSTOMER_LOAD_FAILED, CUSTOMER_LOAD_SUCCESS } from "../action/types";

const initialState = {
   loading: true,
   customers: null,
   count: 0,
   error: null,
};

const customerReducer = (state = initialState, action) => {
   const { payload, type } = action;
   switch (type) {
      case CUSTOMER_LOAD_SUCCESS:
         return {
            ...state,
            loading: false,
            customers: payload.data,
            error: null,
            count: payload.count,
         };
      case CUSTOMER_LOAD_FAILED:
         return {
            ...state,
            loading: false,
            customers: null,
            error: payload,
         };
      default:
         return state;
   }
};

export default customerReducer;
