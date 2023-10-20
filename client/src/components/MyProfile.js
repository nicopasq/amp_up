import { Avatar, Card, Container, Grid, Typography} from "@mui/material";
import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import '../styles/myResponses.css'

function MyProfile(){
    const { currentUser } = useContext(UserContext)
    const date = currentUser.created_at.split("T")[0]

    return (
        <Container className="myProfileContainer">
            <div id="header">
                    <Typography variant="h1">Profile</Typography>
            </div>
                <Avatar id="profileAvatar">{currentUser.username[0]}</Avatar>
            <div id="userInfo">
                <Typography variant="h3">Username: {currentUser.username}</Typography>
                <Typography variant="h3">Member Since: {date}</Typography>
            </div>
            <div id="userResponses">
                <Typography variant="h2" className="myResponsesH2">My Responses</Typography>
                <Grid container spacing={3} className="responseCardContainer">
                </Grid>
            </div>
        </Container>
    )
}


export default MyProfile;