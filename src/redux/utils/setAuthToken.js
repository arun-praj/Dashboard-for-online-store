import axios from "axios";
export const setAuthToken = (token) => {
   console.log("token from set auth token", token);

   if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
   } else {
      delete axios.defaults.headers.common["Authorization"];
   }
   // x-auth-token
};
export default setAuthToken;
