import React from "react"
import { Switch, Route } from "react-router-dom"
import UserList from "./components/routes/User/UserList"
import Products from "./components/routes/Product"
import Dashboard from "./components/routes/Dashboard"
import CreateProduct from "./components/routes/CreateProduct/CreateProduct"
import UpdateProduct from "./components/routes/UpdateProduct/UpdateProduct"
import Order from "./components/routes/Orders/Order"

const routes = () => {
   return (
      <div>
         <Switch>
            <Route exact path='/users' component={UserList} />
            <Route exact path='/products' component={Products} />
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/create' component={CreateProduct} />
            <Route exact path='/update/:id' component={UpdateProduct} />
            <Route exact path='/order' component={Order} />
         </Switch>
      </div>
   )
}

export default routes
