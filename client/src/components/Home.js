import { Container, Typography } from "@mui/material";
import React from "react";
import NavBar from "./NavBar";
import DiscussionPost from "./DiscussionPost";

function Home(){
    return (
        <>
        <Container id="homeContainer" sx={{borderBottom: "2px solid black", height:'15.35vh', position: 'relative', right:'1.75vw'}}>
            <div id="pageName">
                <Typography variant="h1">Explore Discussions</Typography>
            </div>
            <div id="displayDiscussions">
             <DiscussionPost/>
            </div>
        </Container>
        </>
    )
}


export default Home;