import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { UserContext } from "./UserContext";

function Signup({setErrors, setErrorSx}){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setCurrentUser} = useContext(UserContext)
    const history = useHistory();

    
const boxSX = {
    width: '50%',
    position: 'relative',
    top: '20vh',
    left: '22%',
    // border: '1px solid black'
}

const loginFormStyle= {
    // border: '1px solid orange',
    width: 'fit-content',
    position: 'relative',
    left: '11vw'
}

const inputStyle = {
    marginTop: '2vh',
    
}

const submitBtnStyle = {
    margin: "2vw", 
    width:'100%', 
    position: "relative", 
    right: "2vw"
}

function createUser(e){
    e.preventDefault();

    fetch(`/users`, {
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({username, password})
    })
    .then((r) => r.json())
    .then((data) => {
        if(data.errors){
            setErrors(data.errors)
            setErrorSx({visibility:"block"})
        } else {
            setCurrentUser(data)
            history.push('/home')
        }
    })
}

    return (
        <Container sx={{height:'80vh'}}>
            <Box sx={boxSX}>
            <Typography sx={{
                position: 'relative',
                left: '40%'}}
                variant="h4">Sign Up</Typography>

            <form  
            id="loginForm"
            onSubmit={(e) => createUser(e)}
            style={loginFormStyle}>
                    <Grid item xs={4} sx={inputStyle}>
                        <TextField
                        id="username"
                        sx={{scale:"1.3"}} 
                        variant="standard"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}/>
                    </Grid>
                    <Grid item xs={4} sx={inputStyle}>
                        <TextField 
                        id="password"
                        sx={{scale:"1.3"}} 
                        variant="standard" 
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}/>
                    </Grid>
                <Button 
                sx={submitBtnStyle} 
                variant="contained"
                type="Submit">Sign Up!</Button>
            </form>
            <Link onClick={(e)=>setErrorSx({visibility:'hidden'})} to = '/login'>
                <Typography sx={{position:'relative', left:'12.25vw'}} variant="button">Back to Login</Typography>
            </Link>

            </Box>
        </Container>
    )
}

export default Signup;