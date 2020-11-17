import React from "react"
import { Switch, Route } from "react-router-dom"
import UserList from "./components/routes/User/UserList"
import Products from "./components/routes/Product"
import Dashboard from "./components/routes/Dashboard"

const routes = () => {
   return (
      <div>
         <Switch>
            <Route exact path='/users' component={UserList} />
            <Route exact path='/products' component={Products} />
            <Route exact path='/dashboard' component={Dashboard} />
         </Switch>
      </div>
   )
}

export default routes
