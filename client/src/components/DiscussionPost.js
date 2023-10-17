import { Paper, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import '../styles/discussionPost.css'
import CreateResponseForm from "./CreateResponseForm";
import { ResponseContext } from "./ResponseContext";
import ResponseDisplay from "./ResponseDisplay";

function DiscussionPost({post}){
    const {newResponses} = useContext(ResponseContext)
    const [renderResponses, setRenderResponses] = useState([])

    useEffect(() => {
        const postResponses = post.responses.map(r => {
            return ( <ResponseDisplay response={r} key={r.id} removeResposne={removeResponse}/> ) 
        })

        const addResponse = newResponses.map(r => {
            if(r.post.id === post.id){
                return ( <ResponseDisplay response={r} key={r.id} removeResposne={removeResponse}/> )
            }
        })

        if (addResponse.length > 0){
            const renderNewResponses = postResponses.concat(addResponse)
            setRenderResponses(renderNewResponses)
        } else {
            setRenderResponses(postResponses)
        }
    },[])

    function addResponse(response){
        const newResponse = <ResponseDisplay response={response} key={response.id} removeResposne={removeResponse}/>
        setRenderResponses(renderResponses => [...renderResponses, newResponse])
    }

    function removeResponse(response){
        const filteredResponses = [...renderResponses].filter(r => r.key !== response.id)
        setRenderResponses(filteredResponses)
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
 
             <CreateResponseForm post={post} 
             addResponse={addResponse}
             />
 
         </Paper>
 )
}
export default DiscussionPost;