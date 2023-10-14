import { Container, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import MyResponseCard from "./MyResponseCard";

function MyResponses(){
    const { currentUser } = useContext(UserContext)

    const responseCardDisplay = currentUser.responses.map((r) =>(
        <MyResponseCard response ={r}/>
    ))
    return (
        <Container>
            <Typography variant="h1">My Responses Page</Typography>
            <Grid container spacing={2} id="responseCardContainer">
                {responseCardDisplay}
            </Grid>
        </Container>
    )
}


export default MyResponses;