import { Avatar, Button, Paper, Typography } from "@mui/material";
import React from "react";
import '../styles/navBar.css'
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

function NavBar({setCurrentUser, currentUser}){
    const history = useHistory();
    
    function logOut(){
        fetch(`/login`, {
            method: "DELETE", 
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(currentUser)})
        .then((r) => console.log(r))
        setCurrentUser('')
        history.push('/login')
    }

    return (
        <Paper elevation={3} sx={{width: '18.35%', height:'100vh', position:'absolute', top:'0vh', left:'0vw', bgcolor:'#DCC48E'}}>
            <div id="user" style={{borderBottom: '2px solid black'}}>
                <Avatar id="userAvatar">{currentUser.username[0]}</Avatar>
                <Typography id="userName" variant="h4">{currentUser.username}</Typography>
            </div>
            <div id="links" style={{borderBottom: '2px solid black', height:'75%'}}>
                <Link to='/home'>
                    <Typography variant="h4" className="navBtn" sx={{marginTop:'4vh'}}>
                        Explore Discussions
                    </Typography>
                </Link>

                <Link to='/new_post'>
                    <Typography variant="h4" className="navBtn" sx={{marginTop:'4vh'}}>
                        Start A Discussion
                    </Typography>
                </Link>

                <Link to='/responses'>
                    <Typography variant="h4" className="navBtn" sx={{marginTop:'4vh'}}>
                        My Responses
                    </Typography>
                </Link>
            </div>
            <Button onClick={logOut}>
            <Typography id="logout" variant="h4">Log-out</Typography>
            </Button>
        </Paper>
    )
}

export default NavBar;