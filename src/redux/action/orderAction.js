import {
   ORDER_DETAILS_SUCCESS,
   ORDER_DETAILS_REQUEST,
   ORDER_DETAILS_FAILED,
   MY_ORDER_DETAILS_FAILED,
   MY_ORDER_DETAILS_REQUEST,
   MY_ORDER_DETAILS_SUCCESS,
   MODIFY_ORDER_REQUEST,
   MODIFY_ORDER_FAILED,
   MODIFY_ORDER_SUCCESS,
} from "./types"
import axios from "axios"
import { trackPromise } from "react-promise-tracker"
const { ipcRenderer } = window.require("electron")

export const modifyOrderStatus = (id, status) => async (dispatch) => {
   ipcRenderer.send("get-token", "Gimee")
   ipcRenderer.on("token-reply", async (event, arg) => {
      if (arg !== undefined) {
         try {
            dispatch({
               type: MODIFY_ORDER_REQUEST,
            })
            const config = {
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${arg}`,
               },
            }

            const body = JSON.stringify({
               id,
               status,
            })

            const res = await axios.put("api/order", body, config)
            dispatch({
               type: MODIFY_ORDER_SUCCESS,
               payload: res.data.data,
            })
         } catch (e) {
            dispatch({
               type: MODIFY_ORDER_FAILED,
               payload:
                  e.message && e.response.data.message
                     ? e.response.data.message
                     : "Server didnt response",
            })
         }
      }
   })
}

export const getOrderDetails = (sort) => async (dispatch) => {
   ipcRenderer.send("get-token", "Gimee")
   ipcRenderer.on("token-reply", async (event, arg) => {
      if (arg !== undefined) {
         try {
            dispatch({
               type: ORDER_DETAILS_REQUEST,
            })
            const config = {
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${arg}`,
               },
            }
            trackPromise(
               axios
                  // `/api/products`
                  .get(
                     `${process.env.REACT_APP_PROXY}/api/order/delivery/${sort}`,
                     config
                  )
                  .then((res) => {
                     dispatch({
                        type: ORDER_DETAILS_SUCCESS,
                        payload: res.data.data,
                     })
                  })
                  .catch((e) => {
                     dispatch({
                        type: ORDER_DETAILS_FAILED,
                        payload:
                           e.message && e.response.data.message
                              ? e.response.data.message
                              : "Server didnt respond",
                     })
                  })
            )
         } catch (e) {
            dispatch({
               type: ORDER_DETAILS_FAILED,
               payload:
                  e.message && e.response.data.message
                     ? e.response.data.message
                     : "Server didnt response",
            })
         }
      }
   })
}

export const getMyOrders = () => async (dispatch) => {
   try {
      dispatch({
         type: MY_ORDER_DETAILS_REQUEST,
      })
      const token = localStorage.getItem("token")
      if (token) {
         axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
      } else {
         delete axios.defaults.headers.common["Authorization"]
      }
      const res = await axios.get("/api/order/my/orders")
      console.log(res)
      dispatch({
         type: MY_ORDER_DETAILS_SUCCESS,
         payload: res.data.data,
      })
   } catch (e) {
      dispatch({
         type: MY_ORDER_DETAILS_FAILED,
         payload:
            e.message && e.response.data.message
               ? e.response.data.message
               : "Server didnt response",
      })
   }
}
