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
import MyProfile from "./MyProfile";
import { UserContext } from "./UserContext";
import { ResponseContext } from "./ResponseContext";

function App(){
    const [allPosts, setAllPosts] = useState([])
    const [changeResponses, setChangeResponses] = useState([])
    const [currentUser ,setCurrentUser] = useState('')
    const [errors, setErrors] = useState('')
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

        fetch(`/posts`)
        .then(r => r.json())
        .then(data => {
            if (data.errors){
                setDisplayMessage(data.errors)
            } else {
                setAllPosts(data)
                setChangeResponses(data.map(post => {
                    return {post_id: post.id, responses: post.responses}
                }))
            }
        })
    }, [])

    
function setPosts(data){
    setAllPosts(allPosts => [...allPosts, data])
}

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
            <UserContext.Provider value={{currentUser, setCurrentUser}}>
            <Route path = "/signup">
                <Signup setErrors={setErrors} setErrorSx={setErrorSx}/>
            </Route>
            <Route path = '/'>
                <Login setErrors={setErrors} setErrorSx={setErrorSx}/>
            </Route>
            </UserContext.Provider>
        </Switch>
        </>
    )
} else {
        return (
            <Switch>
                <UserContext.Provider value={{currentUser, setCurrentUser}}>
                    <Route path ='/posts/new'>
                        <NavBar/>
                        <CreatePost setPosts={setPosts}/>
                        <Filler/>
                    </Route>
                    <ResponseContext.Provider value={{changeResponses, setChangeResponses}}>
                    <Route path ='/home'>
                        <NavBar/>
                        <Home allPosts={allPosts} displayMessage={displayMessage}/>
                        <Filler/>
                    </Route>
                    <Route path='/profile'>
                        <NavBar/>
                        <MyProfile/>
                        <Filler/>
                    </Route>
                    </ResponseContext.Provider>
                </UserContext.Provider>
            </Switch> 
            )
            
        }
}

export default App;