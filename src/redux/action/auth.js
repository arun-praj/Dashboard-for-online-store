import axios from "axios"
import { trackPromise } from "react-promise-tracker"

//redux
import { AUTH_FAILED, AUTH_SUCCESS, USER_LOADED } from "./types"
import setAuthToken from "../utils/setAuthToken"

const { ipcRenderer } = window.require("electron")

export const login = ({ email, password }) => async (dispatch) => {
   const config = {
      headers: {
         "Content-Type": "application/json",
      },
   }
   trackPromise(
      axios
         .post(
            `${process.env.REACT_APP_PROXY}/api/auth/login`,
            { email, password },
            config
         )
         .then((res) => {
            setAuthToken(res.data.token)
            console.log(res.data)
            dispatch({
               type: AUTH_SUCCESS,
               payload: res.data,
            })
         })
         .catch((e) => {
            console.log(e)
         })
   )
}

export const loadUser = () => async (dispatch) => {
   ipcRenderer.send("get-token", "Gimee")
   ipcRenderer.on("token-reply", async (event, arg) => {
      if (arg !== undefined) {
         console.log("arg", arg)
         try {
            const config = {
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${arg}`,
               },
            }
            const res = await axios.get(
               `${process.env.REACT_APP_PROXY}/api/auth/me`,
               config
            )
            if (res.data.data) {
               dispatch({
                  type: USER_LOADED,
                  payload: res.data,
               })
            } else {
               dispatch({
                  type: AUTH_FAILED,
               })
            }
         } catch (e) {
            dispatch({
               type: AUTH_FAILED,
            })
         }
      } else {
         dispatch({
            type: AUTH_FAILED,
         })
      }
   })
}
