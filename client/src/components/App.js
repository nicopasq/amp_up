import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";

function App(){
return (
    <Switch>
        <Route path = "/signup">
            <Signup/>
        </Route>
        <Route path = "/home">
            <Home/>
        </Route>
        <Route path = "/">
            <Login/>
        </Route>
    </Switch>
);
}

export default App;