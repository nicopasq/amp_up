import { Paper, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import '../styles/discussionPost.css'
import CreateResponseForm from "./CreateResponseForm";
import ResponseDisplay from "./ResponseDisplay";
import { PostContext } from "./PostContext";
import { ResponseContext } from "./ResponseContext";

function DiscussionPost({post}){
    const [allResponses, setAllResponses] = useState([])

    const renderResponses = post.responses.map(r => {
        return (
            <li key={r.id}>
                <ResponseDisplay r={r}/>
            </li>
             )
        })

    const addResponse = allResponses.map(r => {
        if (r.post.id === post.id){
            return (
                <li key={r.id}>
                    <ResponseDisplay r={r}/>
                </li>
            )
        }
    })
console.log(post.id)

    function handleNewResponse(resposne){
        setAllResponses(allResponses => [...allResponses, resposne])
    }
    if (addResponse.length > 0){
        addResponse.map(r => renderResponses.push(r))
    }

    return (
        <div className="discussionContainer">
            <Paper elevation={3} sx={{height:'43vh'}} >
                <Typography variant="h3" sx={{borderBottom:'1px solid black'}}>{post.question}</Typography>
                
                <div className="responses">
                    <Typography variant="h3"><u>Responses</u></Typography>
                    
                    <ul className="responseList">
                        {renderResponses}
                    </ul>
                </div>

                <CreateResponseForm post={post} setAllResponses={handleNewResponse}/>

            </Paper>
        </div>
    )

}
export default DiscussionPost;