import { Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import DiscussionPost from "./DiscussionPost";
import '../styles/home.css'
import { PostContext } from "./PostContext";
import { ResponseContext } from "./ResponseContext";


function Home({displayMessage}){

    return (
        <Container id="homeContainer">
            <div id="pageHead">
                <Typography variant="h1"><u>Explore Discussions</u></Typography>
            </div>
            <div id="homeContent">
                <ul style={{listStyle:'none'}}>
                    <DiscussionPost/>
                </ul>
            </div>
        </Container>
    )
}


export default Home;