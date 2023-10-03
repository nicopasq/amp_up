import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import { Alert, Button } from "@mui/material";
import NavBar from "./NavBar";

function App(){
    const [currentUser ,setCurrentUser] = useState('')
    const [errors, setErrors] = useState('')
    const [errorSx, setErrorSx] = useState({
        visibility:"hidden"
    })
    useEffect(() => {
        fetch(`/auth`)
        .then((r) => {
            if (r.ok){
                r.json().then(data => setCurrentUser(data))
            }
        })
    }, [])

    if (!currentUser) {
    return (
        <>
        <Alert severity="error" sx={errorSx}>
            {errors}
            <Button 
            variant="standard"
            onClick={() => setErrorSx({visibility:"hidden"})}>X</Button>
        </Alert>
        <Switch>
            <Route path = "/signup">
                <Signup setCurrentUser={setCurrentUser}/>
            </Route>
            <Route path = '/'>
                <Login setCurrentUser={setCurrentUser} setErrors={setErrors} setErrorSx={setErrorSx}/>
            </Route>
        </Switch>
        </>
    )
    } else {
        return (
            <Switch>
            <Route to ='/home'>
                    <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser}/>
                    <Home user={currentUser}/>
            </Route>
            </Switch> 
            )
        } 
}

export default App;