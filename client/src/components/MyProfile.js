import { Avatar, Card, Container, Grid, Typography} from "@mui/material";
import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import '../styles/myResponses.css'
import { ResponseContext } from "./ResponseContext";

function MyProfile(){
    const {changeResponses} = useContext(ResponseContext)
    const { currentUser } = useContext(UserContext)
    const date = currentUser.created_at.split("T")[0]
    const myResponses = currentUser.responses
    const newResponses = changeResponses.map(r => {
        if (r.user.id === currentUser.id){
            return r
        }
    })

    const renderList = newResponses.length ? myResponses.concat(newResponses) : myResponses

    const renderResponses = renderList.map(r => {
        return (
            <Grid item xs={4} key={r.id}>
                <Card>
                <Typography variant="h4"><u>{r.post.question}</u></Typography>
                <Typography variant="h4">{r.body}</Typography>
                </Card>
            </Grid>
            )
    })
    const noResponses = (<Typography variant="h4" sx={{color:'darkRed', marginLeft:'18vw', marginTop:'10vh'}}>Respond to a Discussion Post</Typography>)
    const render = renderList.length >0 ? renderResponses : noResponses
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
                    {render}
                </Grid>
            </div>
        </Container>
    )
}


export default MyProfile;