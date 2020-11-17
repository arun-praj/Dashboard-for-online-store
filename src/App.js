import React, { useEffect, useLayoutEffect } from "react";

//redux
import store from "./redux/store";
import { loadUser } from "./redux/action/auth";
import { loadCustomers } from "./redux/action/customer";
import { loadProducts } from "./redux/action/product";

import { connect } from "react-redux";

//component
import Titlebar from "./components/ui/Titlebar/TitleBar";
import Login from "./components/routes/Login/Login";
import Spinner from "./components/ui/Spinner/Spinner";
import SideNav from "./components/ui/SideNav/SideNav";
import Routes from "./routes";

//css
import "./scss/App.scss";
import "./scss/utils.scss";

const App = (props) => {
   useLayoutEffect(() => {
      store.dispatch(loadUser());
      store.dispatch(loadCustomers());
      store.dispatch(loadProducts());
   }, []);

   return (
      <div className='App'>
         <Titlebar />
         {props.authLoading ? (
            <Spinner />
         ) : props.authenticated ? (
            <>
               <SideNav />
               <Routes />
            </>
         ) : (
            <Login />
         )}
      </div>
   );
};
const mapStateToProp = (state) => ({
   authLoading: state.auth.loading,
   authenticated: state.auth.authenticated,
   user: state.auth.user,
});

export default connect(mapStateToProp, null)(App);
