import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";

function App(){
return (
    <>
        <div>
            <Header/>
            <Switch>
            <Route exact path="/my_home">
                <h1>Welcome to my house!</h1>
            </Route>
            </Switch>
            
        </div>
    </>
);
}

export default App;