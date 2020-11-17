import { AUTH_SUCCESS, AUTH_FAILED, USER_LOADED } from "../action/types";

const { ipcRenderer } = window.require("electron");

const initialState = {
   authenticated: false,
   loading: true,
   user: null,
};

const authReducer = (state = initialState, action) => {
   const { payload, type } = action;
   switch (type) {
      case AUTH_SUCCESS:
         ipcRenderer.send("set-token", payload.token);
         return {
            ...state,
            authenticated: true,
            loading: false,
            user: payload.data,
         };
      case AUTH_FAILED:
         ipcRenderer.send("remove-token", "hey you");
         return {
            ...state,
            authenticated: false,
            loading: false,
            user: null,
         };
      case USER_LOADED:
         return {
            ...state,
            authenticated: true,
            loading: false,
            user: payload.data,
         };
      default:
         return state;
   }
};

export default authReducer;
