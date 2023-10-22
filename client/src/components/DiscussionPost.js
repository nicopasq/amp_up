import { Paper, Typography} from "@mui/material";
import React from "react";
import '../styles/discussionPost.css'
import CreateResponseForm from "./CreateResponseForm";
import ResponseDisplay from "./ResponseDisplay";

function DiscussionPost({post}){
    const sorted = post.responses.sort((a, b) => (a.id > b.id) ? 1 : -1)
    const renderResponses = sorted.map(r => <ResponseDisplay response={r} key={r.id}/>)

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