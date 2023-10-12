import { Paper, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import '../styles/discussionPost.css'
import CreateResponseForm from "./CreateResponseForm";
import ResponseDisplay from "./ResponseDisplay";
import { PostContext } from "./PostContext";
import { ResponseContext } from "./ResponseContext";

function DiscussionPost({post}){
    // const {newResponse} = useContext(ResponseContext)
    // console.log('newResonse', newResponse)
    console.log(post.responses)
    const renderResponses = post.responses.map(r => {
    })



    // const display = <ResponseDisplay r={newResponse}/>

    return (
        <div className="discussionContainer">
            <Paper elevation={3} sx={{height:'43vh'}} >
                <Typography variant="h3" sx={{borderBottom:'1px solid black'}}>{post.question}</Typography>
                
                <div className="responses">
                    <Typography variant="h3"><u>Responses</u></Typography>
                    
                    <ul className="responseList">
                        {/* {display} */}
                    </ul>
                </div>

                <CreateResponseForm post={post}/>

            </Paper>
        </div>
    )

}
export default DiscussionPost;