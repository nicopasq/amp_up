import { Paper, Typography} from "@mui/material";
import React, { useContext, useState } from "react";
import '../styles/discussionPost.css'
import CreateResponseForm from "./CreateResponseForm";
import ResponseDisplay from "./ResponseDisplay";
import { ResponseContext } from "./ResponseContext";

function DiscussionPost({post}){
    const {changeResponses} = useContext(ResponseContext)

    const renderResponses = changeResponses.map(obj => {
       return obj.responses.map(r => {
            if(r.post.id === post.id){
               return (
                <ResponseDisplay response={r} key={r.id} removeResponse={removeResponse}/>
               ) 
            }
        })
    })


    //  if (changeResponses.length){
    //     renderList = existingResponses.concat(changeResponses)
    // } else {
    //     renderList = existingResponses
    // }

    // const renderResponses = renderList.map(r => {
    //     if (r.post.id === post.id){
    //         return (
    //             <ResponseDisplay response={r} key={r.id} removeResponse={removeResponse}/>
    //         )
    //     }
    // })

    function removeResponse(response){
    }

    return (
         <Paper elevation={3} className="discussionContainer" >
             <Typography variant="h3" sx={{borderBottom:'1px solid black'}}>{post.question}</Typography>
             
             <div className="responses">
                 <Typography variant="h3"><u>Responses</u></Typography>
                 
                 <ul className="responseList">
                    {renderResponses}
                 </ul>
             </div>
 
             <CreateResponseForm post={post}/>
 
         </Paper>
 )
}
export default DiscussionPost;