import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";

function App(){
return (
    <Switch>
        <Route exact path = "/">
            <Login/>
        </Route>
    </Switch>
);
}

export default App;