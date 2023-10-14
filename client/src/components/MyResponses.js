import { Container, Grid, Typography, unstable_ClassNameGenerator } from "@mui/material";
import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import MyResponseCard from "./MyResponseCard";
import { ResponseContext } from "./ResponseContext";

function MyResponses(){
    const { currentUser } = useContext(UserContext)
    const { allResponses } = useContext(ResponseContext)
    const [uniqueDiscussions, setUniqueDiscussions] = useState({})
console.log('allResponses', allResponses)

    const responseCardDisplay = currentUser.responses.map(r => (
        <MyResponseCard response={r}/>
    ))

    if (allResponses.length > 0){
        allResponses.map(r => {
            responseCardDisplay.push(<MyResponseCard response={r}/>)
        })
    }

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