import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { Alert, Button, TextField, Typography } from "@mui/material";
import '../styles/createResponseForm.css'
import { ResponseContext } from "./ResponseContext";

function CreateResponseForm({post, addResponse}){
    const {currentUser} = useContext(UserContext)
    const {changeResponses, setChangeResponses} = useContext(ResponseContext)
    const [errors, setErrors] = useState([])
    const [visibility, setVisibility] = useState({
        visibility: 'hidden',
        position:'relative'
    })
    const [responseBody, setResponseBody] = useState({
        body: '',
        post_id:post.id,
        user_id:currentUser.id
    })

    function handleChange(e){
        setResponseBody({...responseBody, body: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();

        fetch(`/responses`, {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(responseBody)
        })
        .then(r =>r.json())
        .then(data => {
            if (data.errors){
                setErrors(data.errors)
                setVisibility({visibility:'block'})
                setTimeout(() => {setVisibility({visibility:'hidden'})},'3000')
            } else {
                const addedResponses = changeResponses.map(obj => {
                    if (obj.post_id === data.post.id){
                        obj.responses.push(data)
                    }
                })
                setChangeResponses(addedResponses)
            }
        })
    }

    return (
        <>
        <Alert severity="error" className="responseAlert" sx={visibility}>{errors}</Alert>
        <form className="addResponse" onSubmit={(e) => handleSubmit(e)}>
            <Typography variant="h5" className="left">Add Response</Typography>            
            <div className = "formBox">
            <TextField
            className="responseInput" 
            variant="filled"
            name="body"
            value={responseBody.body}
            onChange={e => handleChange(e)}/>

            <Button className='postResponseBtn' type="submit">
                <Typography variant="h5">➜</Typography>
            </Button>
            </div>
        </form>
        </>
    )
}

export default CreateResponseForm;