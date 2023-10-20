import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import '../styles/updateForm.css'

function UpdateForm({response, display, setFormDisplay}){
    function handleSubmit(e){
        e.preventDefault()
        setFormDisplay({display:'none'})
    }
    return (
        <form className="updateResponse" onSubmit={e => handleSubmit(e)} style={display}>
            <TextField variant="filled" placeholder={response.body} className="updateBody"/>
            <Button type="submit" className="submitUpdateForm">Change Response</Button>
        </form>
    )
}

export default UpdateForm;