import { Avatar, Container, Grid, Typography} from "@mui/material";
import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import '../styles/myResponses.css'
import MyProfileResponses from "./MyProfileResponses";

function MyProfile(){
    const { currentUser } = useContext(UserContext)
    const currentUserCopy = {...currentUser}
    const date = currentUser.created_at.split("T")[0]
    const unique = {}
    const uniquePosts = currentUserCopy.posts.filter(obj => !unique[obj.id] && (unique[obj.id] = true))
    
    const renderPosts = uniquePosts.map(post => {
        const userResponses = post.responses.filter(response => response.user_id === currentUser.id)
        if (userResponses.length){
            return <MyProfileResponses responseObj={{post: post.question, responses: userResponses}} key={post.id}/>
        }
    })


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
                    {renderPosts}
                </Grid>
            </div>
        </Container>
    )
}


export default MyProfile;