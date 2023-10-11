import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import { Alert, Button } from "@mui/material";
import NavBar from "./NavBar";
import CreatePost from "./CreatePost";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Filler from "./Filler";
import MyResponses from "./MyResponses";

function App(){
    const [currentUser ,setCurrentUser] = useState('')
    const [errors, setErrors] = useState('')
    const [allPosts, setAllPosts] = useState([])
    const [displayMessage, setDisplayMessage] = useState('')
    const [errorSx, setErrorSx] = useState({
        visibility:"hidden"
    })
    const history = useHistory()
    useEffect(() => {
        fetch(`/auth`)
        .then((r) => {
            if (r.ok){
                r.json().then(data =>{
                    history.push('/home')
                    setCurrentUser(data)
                })
            }
        })
    }, [])

    useEffect(() => {
        fetch(`/posts`)
        .then(r => r.json())
        .then(data => {
            if (data.errors){
                setDisplayMessage(data.errors)
            } else {
                setAllPosts(data)
                console.log("posts from Ruby:", data)
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
                <Signup setCurrentUser={setCurrentUser} setErrors={setErrors} setErrorSx={setErrorSx}/>
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
            <Route path ='/posts/new'>
                <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser}/>
                <CreatePost currentUser={currentUser} setAllPosts={setAllPosts}/>
                <Filler/>
            </Route>
            <Route path='/my_responses'>
                <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser}/>
                <MyResponses/>
                <Filler/>
            </Route>
            <Route path ='/home'>
                <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser}/>
                <Home user={currentUser} allPosts={allPosts} displayMessage={displayMessage}/>
                <Filler/>
            </Route>
            </Switch> 
            )
            
        }
}

export default App;