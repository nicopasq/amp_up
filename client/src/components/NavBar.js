import { Avatar, Paper, Typography } from "@mui/material";
import React from "react";
import '../styles/navBar.css'

function NavBar(){

    return (
        <Paper elevation={3} sx={{width: '17%', height:'100vh', position:'absolute', top:'0vh', left:'0vw', bgcolor:'#DCC48E'}}>
            <div id="user" style={{borderBottom: '2px solid black'}}>
                <Avatar id="userAvatar">N</Avatar>
                <Typography id="userName" variant="h4">UserName</Typography>
            </div>
            <div id="links" style={{borderBottom: '2px solid black', height:'75%'}}>
                <h1 className="navBtn" >Explore Discussions</h1>
                <h1 className="navBtn" >Account Search</h1>
                <h1 className="navBtn">My Responses</h1>
            </div>
            <Typography variant="h4" className="navBtn">Log-out</Typography>
        </Paper>
    )
}

export default NavBar;