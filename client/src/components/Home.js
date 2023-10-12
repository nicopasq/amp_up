import { Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import DiscussionPost from "./DiscussionPost";
import '../styles/home.css'
import { PostContext } from "./PostContext";


function Home({displayMessage}){
    const {allPosts} = useContext(PostContext)
    let discussionPosts 
    if (allPosts !== undefined){
        discussionPosts = allPosts.map((p) =>(
            <li key={p.id}>
                <DiscussionPost post = {p} />
            </li>
            ))
        }

    let display = discussionPosts.length > 0 ? discussionPosts : <Typography variant="h3" sx={{color:"darkRed", textAlign:'center'}}>{displayMessage}</Typography>;
    return (
        <Container id="homeContainer">
            <div id="pageHead">
                <Typography variant="h1"><u>Explore Discussions</u></Typography>
            </div>
            <div id="homeContent">
                <ul style={{listStyle:'none'}}>
                {display}
                </ul>
            </div>
        </Container>
    )
}


export default Home;