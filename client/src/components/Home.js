import { Container, Typography } from "@mui/material";
import React from "react";
import DiscussionPost from "./DiscussionPost";
import '../styles/home.css'


function Home(){
    return (
        <Container id="homeContainer">
            <div id="pageHead">
                <Typography variant="h1"><u>Explore Discussions</u></Typography>
            </div>
            <div id="homeContent">
             <DiscussionPost/>
            </div>
        </Container>
    )
}


export default Home;