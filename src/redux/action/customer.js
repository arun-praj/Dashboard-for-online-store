import axios from "axios"
// import { trackPromise } from "react-promise-tracker";

import { CUSTOMER_LOAD_SUCCESS, CUSTOMER_LOAD_FAILED } from "./types"

//electron
const { ipcRenderer } = window.require("electron")

export const loadCustomers = () => async (dispatch) => {
   ipcRenderer.send("get-token", "Gimee")
   ipcRenderer.on("token-reply", async (event, arg) => {
      if (arg !== undefined) {
         try {
            const config = {
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${arg}`,
               },
            }
            const customers = await axios.get(
               `${process.env.REACT_APP_PROXY}/api/auth/users`,
               config
            )
            console.log(customers)
            dispatch({
               type: CUSTOMER_LOAD_SUCCESS,
               payload: customers.data,
            })
         } catch (e) {
            dispatch({
               type: CUSTOMER_LOAD_FAILED,
               error: "Cannot get users from server",
            })
         }
      } else {
         dispatch({
            type: CUSTOMER_LOAD_FAILED,
            error: "Token not set/ try logging in",
         })
      }
   })
}
