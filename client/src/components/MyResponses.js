import { Container, Grid, Typography, unstable_ClassNameGenerator } from "@mui/material";
import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import MyResponseCard from "./MyResponseCard";
import '../styles/myResponses.css'

function MyResponses(){
    const { currentUser } = useContext(UserContext)

    const responseCardDisplay = currentUser.responses.map(r => (
        <MyResponseCard response={r}/>
    ))

    return (
        <Container id="responseCardContainer">
            <Typography variant="h1">My Responses Page</Typography>
            <Grid container spacing={2}>
                {responseCardDisplay}
            </Grid>
        </Container>
    )
}


export default MyResponses;