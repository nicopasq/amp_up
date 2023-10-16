import { Paper, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import '../styles/discussionPost.css'
import CreateResponseForm from "./CreateResponseForm";
import ResponseDisplay from "./ResponseDisplay";
import { ResponseContext } from "./ResponseContext";

function DiscussionPost({post}){
    const {allResponses} = useContext(ResponseContext)

    const [renderResponses, setRenderResponses] = useState([]) 
    
    useEffect(()=> {
        const postResponses = post.responses.map(r => {
            return (
            <li key={r.id}>
                <ResponseDisplay r={r} deleteResponses={deleteResponses}/>
            </li>
            )
        })
        setRenderResponses(postResponses)
    }, [])

    function addResponse(response){
        const responseEl = (
            <li key={response.id}>
                <ResponseDisplay r={response} deleteResponses={deleteResponses}/>
            </li>
            )

        setRenderResponses(renderResponses => [...renderResponses, responseEl])
    }
    
    // const newResponses = allResponses.map(r => {
    //     if (r.post.id === post.id){
    //         return (
    //         <li key={r.id}>
    //             <ResponseDisplay r={r} deleteResponses={deleteResponses}/>
    //         </li>
    //     )}
    // })
    // renderResponses.push(newResponses[newResponses.length-1])


    function deleteResponses(response){
        const responseEl = (
            <li key={response.id}>
                <ResponseDisplay r={response} deleteResponses={deleteResponses}/>
            </li>
        )
        setRenderResponses(renderResponses => [...renderResponses].filter(r => r.key !== responseEl.key))
        // const currentResponses = [...post.responses]
        // const newResponseList = currentResponses.filter(r => r.id !== response.id)
        // const newResponseElements = newResponseList.map(r => (
        //         <li key={r.id}>
        //             <ResponseDisplay r={r} deleteResponses={deleteResponses}/>
        //         </li>
        //         )
        //     )
        // setRenderResponses(newResponseElements)
    //     const newRenderResponses = [...renderResponses].filter(r => {
    //         if(parseInt(r.key) !== parseInt(response.id)){
    //             return r
    //         }
    //     })
    //     console.log(newRenderResponses)
    //     setRenderResponses(newRenderResponses)
    }

    return (
        <div className="discussionContainer">
            <Paper elevation={3} sx={{height:'fit-content'}} >
                <Typography variant="h3" sx={{borderBottom:'1px solid black'}}>{post.question}</Typography>
                
                <div className="responses">
                    <Typography variant="h3"><u>Responses</u></Typography>
                    
                    <ul className="responseList">
                        {renderResponses}
                    </ul>
                </div>

                <CreateResponseForm post={post} addResponse={addResponse} />

            </Paper>
        </div>
    )

}
export default DiscussionPost;