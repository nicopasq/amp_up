import { Paper, Typography} from "@mui/material";
import React, { useContext } from "react";
import '../styles/discussionPost.css'
import CreateResponseForm from "./CreateResponseForm";
import ResponseDisplay from "./ResponseDisplay";
import { ResponseContext } from "./ResponseContext";

function DiscussionPost({post}){
    const {changeResponses} = useContext(ResponseContext)
    const existingResponses = post.responses

    let renderList
    if (changeResponses.length > 0){
        renderList = existingResponses.concat(changeResponses)
    } else {
        renderList = existingResponses
    }

    const renderResponses = renderList.map(r => <ResponseDisplay response={r} key={r.id}/>)
    console.log(renderList.filter(r => r.body !== "DELETE"))
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