import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import '../styles/updateForm.css'

function UpdateForm({response, display, setFormDisplay}){
    const [updatedResponseBody, setUpdatedResponseBody] = useState('')
    
    function handleSubmit(e){
        e.preventDefault()
        const updatedResponseObj = {
            response_id: response.id,
            user_id: response.user.id,
            post_id: response.post.id,
            body: updatedResponseBody
        }
        console.log('before update', response)
        console.log('updated', updatedResponseObj)

        fetch(`/responses/update`, {
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(updatedResponseObj)
        })
        .then(r => console.log(r))
        
        setFormDisplay({display:'none'})
    }
    return (
        <form className="updateResponse" onSubmit={e => handleSubmit(e)} style={display}>
            <TextField 
                variant="filled" 
                placeholder={response.body} 
                className="updateBody"
                value={updatedResponseBody}
                onChange={e => setUpdatedResponseBody(e.target.value)}
                />
            <Button type="submit" className="submitUpdateForm">Change Response</Button>
            <Button variant='text' className="cancelBtn" onClick={() => setFormDisplay({display:'none'})}>Cancel</Button>
        </form>
    )
}

export default UpdateForm;