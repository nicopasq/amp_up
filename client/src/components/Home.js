import { Container, Typography } from "@mui/material";
import React from "react";
import DiscussionPost from "./DiscussionPost";
import '../styles/page.css'


function Home(){
    return (
        <>
        <Container id="homeContainer">
            <div className="pageHead">
                <Typography variant="h1">Explore Discussions</Typography>
            </div>
            <div id="homeContent">
             <DiscussionPost/>
            </div>
        </Container>
        </>
    )
}


export default Home;