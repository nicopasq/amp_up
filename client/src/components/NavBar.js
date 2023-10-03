import { Avatar, Button, Paper, Typography } from "@mui/material";
import React from "react";
import '../styles/navBar.css'

function NavBar({setCurrentUser, currentUser}){

    function logOut(){
        fetch(`/login`, {
            method: "DELETE", 
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(currentUser)})
        .then((r) => console.log(r))
        setCurrentUser('')
    }

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
            <Button onClick={logOut}>
            <Typography id="logout" variant="h4">Log-out</Typography>
            </Button>
        </Paper>
    )
}

export default NavBar;