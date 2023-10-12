import { Paper, Typography } from "@mui/material";
import React from "react";
import '../styles/discussionPost.css'
import CreateResponseForm from "./CreateResponseForm";

function DiscussionPost({post}){

    return (
        <div className="discussionContainer">
            <Paper elevation={3} sx={{height:'40vh'}} >
                <Typography variant="h3" sx={{borderBottom:'1px solid black'}}>{post.question}</Typography>
                
                <div className="responses">
                    <Typography variant="h3"><u>Responses</u></Typography>
                    
                    <ul className="responseList">

                    </ul>
                </div>

                <CreateResponseForm post={post}/>

            </Paper>
        </div>
    )

}
export default DiscussionPost;