import axios from "axios"
import { trackPromise } from "react-promise-tracker"

import {
   PRODUCT_LOAD_FAILED,
   PRODUCT_LOAD_SUCCESS,
   PRODUCT_ADD_SUCCESS,
   PRODUCT_ADD_FAILED,
   PRODUCT_DELETE_SUCCESS,
   PRODUCT_DELETE_FAILED,
} from "./types"
import store from "../store"

const { ipcRenderer } = window.require("electron")

export const loadProducts = () => async (dispatch) => {
   try {
      const products = await axios.get(
         `${process.env.REACT_APP_PROXY}/api/products`
      )
      dispatch({
         type: PRODUCT_LOAD_SUCCESS,
         payload: products.data,
      })
   } catch (e) {
      dispatch({
         type: PRODUCT_LOAD_FAILED,
      })
   }
}
export const deleteProduct = (id) => async (dispatch) => {
   ipcRenderer.send("get-token", "Gimee")
   ipcRenderer.on("token-reply", async (event, arg) => {
      if (arg !== undefined) {
         try {
            const products = await axios.delete(
               `${process.env.REACT_APP_PROXY}/api/products/${id}`
            )
            dispatch({
               type: PRODUCT_DELETE_SUCCESS,
            })
         } catch (e) {
            dispatch({
               type: PRODUCT_DELETE_FAILED,
            })
         }
      }
   })
}

export const addProduct = (products, productImg) => async (dispatch) => {
   ipcRenderer.send("get-token", "Gimee")
   ipcRenderer.on("token-reply", async (event, arg) => {
      if (arg !== undefined) {
         const { stock, description, price, name, category } = products

         const config = {
            headers: {
               Authorization: `Bearer ${arg}`,
               "Content-Type": "application/json",
            },
         }
         const body = {
            stock,
            description,
            price,
            name,
            category,
            size: [3, 4, 5],
            photo: "",
         }
         console.log(products, productImg)
         trackPromise(
            axios
               .post(
                  `${process.env.REACT_APP_PROXY}/api/products`,
                  body,
                  config
               )
               .then((res) => {
                  console.log("Product ID", res.data.data.value._id)
                  const formData = new FormData()
                  formData.append("file", productImg)
                  axios
                     .put(
                        `${process.env.REACT_APP_PROXY}/api/products/${res.data.data.value._id}`,
                        formData,
                        {
                           headers: {
                              Authorization: `Bearer ${arg}`,
                              "Content-Type": "multipart/form-data",
                              "Access-Control-Allow-Origin": "*",
                           },
                        }
                     )
                     .then((res) => {
                        console.log(res)
                     })
                  dispatch({
                     type: PRODUCT_ADD_SUCCESS,
                     payload: res.data,
                  })
                  store.dispatch(loadProducts())
               })
               .catch((e) => {
                  console.log(e)
                  dispatch({
                     type: PRODUCT_ADD_FAILED,
                  })
               }),
            "add-product-area"
         )
      }
   })
}
