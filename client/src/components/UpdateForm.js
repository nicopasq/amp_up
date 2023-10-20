import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import '../styles/updateForm.css'

function UpdateForm({response, visibility}){

    function handleSubmit(e){
        e.preventDefault()
    }
    return (
        <form className="updateResponse" onSubmit={e => handleSubmit(e)} style={visibility}>
            <TextField variant="filled" placeholder={response.body} className="updateBody"/>
            <Button type="submit" className="submitResponsePatch">Change Response</Button>
        </form>
    )
}

export default UpdateForm;