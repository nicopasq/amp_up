import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function Signup(){
    const [usernameVal, setUsernameVal] = useState('')
    const [passwordVal, setPasswordVal] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')


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

    return (
        <Container>
            <Box sx={boxSX}>
            <Typography sx={{
                position: 'relative',
                left: '40%'}}
                variant="h4">Sign Up</Typography>

            <form id="loginForm" style={loginFormStyle}>
                    <Grid item xs={4} sx={inputStyle}>
                        <TextField
                        sx={{scale:"1.3"}} 
                        variant="standard"
                        placeholder="Username"
                        onChange={(e) => setUsernameVal(e.target.value)}
                        value={usernameVal}/>
                    </Grid>
                    <Grid item xs={4} sx={inputStyle}>
                        <TextField 
                        sx={{scale:"1.3"}} 
                        variant="standard" 
                        placeholder="Password"
                        onChange={(e) => setPasswordVal(e.target.value)}
                        value={passwordVal}/>
                    </Grid>
                    <Grid item xs={4} sx={inputStyle}>
                        <TextField
                        sx={{scale:"1.3"}}
                        variant="standard"
                        placeholder="Confirm Password"
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        value={passwordConfirmation}/>
                    </Grid>
                <Button 
                sx={submitBtnStyle} 
                variant="contained"
                onClick={() => console.log(`create user: username: ${usernameVal}, password: ${passwordVal} confirm: ${passwordConfirmation}`) }>Sign Up!</Button>
            </form>
            <Typography sx={{position:'relative', left:'12.25vw'}} variant="button">Back to Login</Typography>

            </Box>
        </Container>
    )
}

export default Signup;