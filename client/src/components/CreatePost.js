import { Button, Container, Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "../styles/page.css"
import "../styles/createPost.css"

function CreatePost(){
    const [dq, setDq] = useState('')

    function handleSubmit(e){
        e.preventDefault();
        // fetch(`/posts`, {
        //     method:"POST",
        //     headers:{
        //         "Content-Type":"application/json"
        //     },
        //     body: JSON.stringify(dq)
        // })
    }

    return (
        <Container sx={{overflow:'hidden'}}>
            <div className="pageHead">
                <Typography variant="h1">Start A Discussion</Typography>
            </div>
            <Paper elevation={3} id="createContent" sx={{bgcolor:'#DCC48E'}}>
                <form 
                onSubmit={handleSubmit}
                id="createPostForm">
                    <Typography variant="h3"><u>Enter a Discussion Question</u></Typography>
                    <TextField
                        id="filled-multiline-static"
                        name="DQ"
                        label="Discussion Question"
                        multiline
                        sx={{bgcolor:"white", width:'80%', marginLeft:'3vw', borderRadius:'10px'}}
                        rows={3}
                        defaultValue={dq}
                        onChange={e => setDq(e.target.value)}/>
                    <Button type="Submit" variant="contained">Post Discussion</Button>
                </form>
            </Paper>
        </Container>
    )
}

export default CreatePost;