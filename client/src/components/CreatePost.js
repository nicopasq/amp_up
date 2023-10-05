import { Button, Container, Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import React from "react";
import "../styles/page.css"
import "../styles/createPost.css"

function CreatePost(){
    return (
        <Container>
            <div className="pageHead">
                <Typography variant="h1">Start A Discussion</Typography>
            </div>
            <Paper elevation={24} id="createContent" sx={{bgcolor:"grey"}}>
                <form id="createPostForm">
                    <Typography variant="h3"><u>Enter a Discussion Question</u></Typography>
                    <TextField
                        id="filled-multiline-static"
                        label="Discussion Question"
                        multiline
                        sx={{bgcolor:"white", width:'80%', marginLeft:'3vw'}}
                        rows={3}
                        defaultValue=""
                        variant="filled"/>
                        
                    <Typography variant="h4">Follow Post?</Typography>
                    <div id="followPostRadio">
                            <Typography variant="h6">Yes</Typography>
                        <input type="radio" value="follow" name="followPost" className="followPost"/>
                            <Typography variant="h6">No</Typography>
                        <input type="radio" value="follow" name="followPost" className="followPost"/>
                    </div>
                    <Button type="Submit" variant="contained">Post Discussion</Button>
                </form>
            </Paper>
        </Container>
    )
}

export default CreatePost;