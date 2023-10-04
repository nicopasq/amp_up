import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Login({setCurrentUser, setErrors, setErrorSx}){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
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

function loginUser(e){
    e.preventDefault();

    fetch(`/login`,{
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({username, password})
    })
    .then((r) => r.json())
    .then(data => {
        if(data.error){
            setErrors(data.error.login);
            setErrorSx({visibility:"block"});
        } else {
            history.push('/home')
            setCurrentUser(data)
        }
    })
} 

    return (
        <Container>
            <Box sx={boxSX}>
            <Typography sx={{
                position: 'relative',
                left: '43%'}}
                variant="h4">Login</Typography>

            <form 
            id="loginForm" 
            onSubmit={loginUser}
            style={loginFormStyle}>
                    <Grid item xs={4} sx={inputStyle}>
                        <TextField
                        sx={{scale:"1.3"}} 
                        variant="standard"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}/>
                    </Grid>
                    <Grid item xs={4} sx={inputStyle}>
                        <TextField 
                        sx={{scale:"1.3"}} 
                        variant="standard" 
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}/>
                    </Grid>

                    <Button 
                        sx={submitBtnStyle}
                        type="Submit" 
                        variant="contained">
                            Login!
                    </Button>

            </form>
            <Typography sx={{position:'relative', left:'10.65vw'}} variant="body1">Don't Have an Account?</Typography>
            <Link to = '/signup'>
            <Typography sx={{
                position: 'relative',
                left: '40%'}} 
                onClick={() => setErrorSx({visibility:"hidden"})}
                variant="h4">Sign Up</Typography>
            </Link>

            </Box>
        </Container>
    )
}


export default Login;