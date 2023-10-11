import { Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import '../styles/discussionPost.css'

function DiscussionPost({post}){

    function postDiscussion(e){
        e.preventDefault();
    }
    return (
        <div id="discussionContainer">
            <Paper elevation={3} sx={{height:'40vh'}} >
                <Typography variant="h3" sx={{borderBottom:'1px solid black'}}>{post.question}</Typography>
                <Typography variant="h3" ><u>Responses</u></Typography>
                <form onSubmit={postDiscussion}id="addResponse">
                    <Typography variant="h5">Add Response</Typography>
                    <TextField id="input" sx={{position:"relative", top:'-3.25vh', left:'9vw'}} variant="filled"/>
                    <Button sx={{position:"relative", top:"-4.5vh", left:'8.5vw'}}type="submit">
                        <Typography variant="h5">➜</Typography>
                    </Button>
                </form>
            </Paper>
        </div>
    )

}
export default DiscussionPost;