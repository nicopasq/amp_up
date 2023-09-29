import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function Login(){
    const [usernameVal, setUsernameVal] = useState('')
    const [passwordVal, setPasswordVal] = useState('')

    return (
        <Container>
            <Box>
            <Typography variant="h4">Login</Typography>

            <form id="loginForm">
                    <Grid item xs={4}>
                        <TextField 
                        variant="standard" 
                        placeholder="Username"
                        onChange={(e) => setUsernameVal(e.target.value)}
                        value={usernameVal}/>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField 
                        variant="standard" 
                        placeholder="Password"
                        onChange={(e) => setPasswordVal(e.target.value)}
                        value={passwordVal}/>
                    </Grid>
                <Button variant="contained"
                onClick={() => {
                    console.log(
                        `Log in user: 
                        username: ${usernameVal}, 
                        password: ${passwordVal}`)} 
                    }>Login!</Button>
            </form>

            <Typography variant="body1">Don't Have an Account?</Typography>
            <Typography variant="h4">Sign Up</Typography>

            </Box>
        </Container>
    )
}


export default Login;