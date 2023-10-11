import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import '../styles/discussionPost.css'
import { UserContext } from "./UserContext";

function DiscussionPost({post}){
    const {currentUser} = useContext(UserContext)
    const [responseBody, setResponseBody] = useState({
        body: '',
        post_id:post.id,
        user_id:currentUser.id
    })


    function handleChange(e){
        const newResponseBody = {
            ...responseBody, 
            body:e.target.value
        }
        setResponseBody(newResponseBody)
    }

    function postResponse(e){
        e.preventDefault();
        fetch(`/responses`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(responseBody)
        })
        .then(r => r.json())
        .then(data => console.log(data))
    }

    return (
        <div id="discussionContainer">
            <Paper elevation={3} sx={{height:'40vh'}} >
                <Typography variant="h3" sx={{borderBottom:'1px solid black'}}>{post.question}</Typography>
                <Typography variant="h3" ><u>Responses</u></Typography>

                <form onSubmit={postResponse}id="addResponse">
                    <Typography variant="h5">Add Response</Typography>
                    <TextField 
                    sx={{position:"relative", top:'-3.25vh', left:'9vw'}} 
                    id="input" 
                    variant="filled"
                    value={responseBody.body}
                    onChange={e => handleChange(e)}/>
                    <Button sx={{position:"relative", top:"-4.5vh", left:'8.5vw'}}type="submit">
                        <Typography variant="h5">➜</Typography>
                    </Button>
                </form>

            </Paper>
        </div>
    )

}
export default DiscussionPost;