import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import '../styles/discussionPost.css'

function DiscussionPost({post}){
    const [response, setResponse] = useState('')

    function postDiscussion(e){
        e.preventDefault();
        // fetch(`/responses`,{
        //     method:"POST",
        //     headers:{
        //         "Content-Type":"application/json"
        //     },
        //     body:JSON.stringify({response})
        // })
        // .then(r => r.json())
        // .then(data => console.log(data))
    }

    return (
        <div id="discussionContainer">
            <Paper elevation={3} sx={{height:'40vh'}} >
                <Typography variant="h3" sx={{borderBottom:'1px solid black'}}>{post.question}</Typography>
                <Typography variant="h3" ><u>Responses</u></Typography>

                <form onSubmit={postDiscussion}id="addResponse">
                    <Typography variant="h5">Add Response</Typography>
                    <TextField 
                    sx={{position:"relative", top:'-3.25vh', left:'9vw'}} 
                    id="input" 
                    variant="filled"
                    value={response}
                    onChange={e => setResponse(e.target.value)}/>
                    <Button sx={{position:"relative", top:"-4.5vh", left:'8.5vw'}}type="submit">
                        <Typography variant="h5">➜</Typography>
                    </Button>
                </form>

            </Paper>
        </div>
    )

}
export default DiscussionPost;