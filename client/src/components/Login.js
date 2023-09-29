import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";

function Login(){
    return (
        <Container>
            <Box>
            <Typography variant="h4">Login</Typography>

            <form id="loginForm">
                    <Grid item xs={4}>
                        <TextField variant="standard" placeholder="Username"/>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField variant="standard" placeholder="Password"/>
                    </Grid>
                <Button variant="contained">Login!</Button>
            </form>

            <Typography variant="body1">Don't Have an Account?</Typography>
            <Typography variant="h4">Sign Up</Typography>

            </Box>
        </Container>
    )
}


export default Login;