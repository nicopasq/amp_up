import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { Button, TextField, Typography } from "@mui/material";
import { ResponseContext } from "./ResponseContext";
import '../styles/createResponseForm.css'
function CreateResponseForm({post, addResponse}){
    const {currentUser} = useContext(UserContext)
    const {setNewResponses} = useContext(ResponseContext)
    const [responseBody, setResponseBody] = useState({
        body: '',
        post_id:post.id,
        user_id:currentUser.id
    })

    function handleChange(e){
        const newResponseBody = {
            ...responseBody, 
            body:e.target.value
        }
        setResponseBody(newResponseBody)
    }

    function postResponse(e){
        e.preventDefault();
        fetch(`/responses`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(responseBody)
        })
        .then(r => r.json())
        .then(data => {
            if(data.id){
                addResponse(data)
                setNewResponses(newResponses => [...newResponses, data])
            }
        })
    }

    return (
        <form onSubmit={postResponse} className="addResponse">
            <div className = "formBox">
            <Typography variant="h5" className="left">Add Response</Typography>
            
            <TextField
            className="responseInput" 
            variant="filled"
            value={responseBody.body}
            onChange={e => handleChange(e)}/>

            <Button className='postResponseBtn' type="submit">
                <Typography variant="h5">➜</Typography>
            </Button>
            </div>
        </form>
    )
}

export default CreateResponseForm;