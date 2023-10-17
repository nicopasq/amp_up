import { Paper, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import '../styles/discussionPost.css'
import CreateResponseForm from "./CreateResponseForm";
import ResponseDisplay from "./ResponseDisplay";
import { PostContext } from "./PostContext";

function DiscussionPost(){
   const {allPosts} = useContext(PostContext)

   return allPosts.map(post => {
       return (
           <div className="discussionContainer" key={post.id}>
            <Paper elevation={3} sx={{height:'fit-content'}} >
                <Typography variant="h3" sx={{borderBottom:'1px solid black'}}>{post.question}</Typography>
                
                <div className="responses">
                    <Typography variant="h3"><u>Responses</u></Typography>
                    
                    <ul className="responseList">
                        <ResponseDisplay currentPost = {post}/>
                    </ul>
                </div>

                <CreateResponseForm post={post}/>

            </Paper>
        </div>
    )
})
    
}
export default DiscussionPost;