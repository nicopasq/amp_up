import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { Button, TextField, Typography } from "@mui/material";

function CreateResponseForm({post}){
    const {currentUser} = useContext(UserContext)
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
        .then(data => console.log(data))
    }

    return (
        <form onSubmit={postResponse} className="addResponse">
            <Typography variant="h5" sx={{position:'relative', top:'2vh', left:'1vw'}}>Add Response</Typography>
            
            <TextField
            sx={{position:"relative", top:'-3.25vh', left:'10vw'}} 
            className="input" 
            variant="filled"
            value={responseBody.body}
            onChange={e => handleChange(e)}/>

            <Button sx={{position:"relative", top:"-2vh", left:'10vw'}}type="submit">
                <Typography variant="h5">➜</Typography>
            </Button>
        </form>
    )
}

export default CreateResponseForm;