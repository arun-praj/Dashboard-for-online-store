import React, { useState } from "react";

import Titlebar from "./components/ui/Titlebar/TitleBar";
import Login from "./components/routes/Login/Login";

import "./App.scss";

function App() {
   const [auth, setAuth] = useState(false);
   return (
      <div className='App'>
         <Titlebar />
         {auth ? "Home page" : <Login />}
      </div>
   );
}

export default App;
