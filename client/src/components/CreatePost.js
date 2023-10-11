import { Alert, Button, Container, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "../styles/createPost.css"


function CreatePost({currentUser, setAllPosts}){
    const [question, setQuestion] = useState('')
    const [postErrors, setPostErrors] = useState([])
    const [postErrorSx, setPostErrorSx] = useState({
        visibility:'hidden'
    })
    function handleSubmit(e){
        e.preventDefault()

        fetch(`/posts`, {
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({question, currentUser:currentUser.id})
        })
        .then(r => {
            if (r.ok){
                r.json().then(data => console.log(data))
            }
        })
        // .then(data => console.log(data))
        // .then(data => {
        //     if (data.errors){
        //         setPostErrors(data.errors)
        //         setPostErrorSx({visibility:"block"})
        //     } else{
        //         setAllPosts((posts) => [...posts, data])
        //     }
        // })
    }
    return (
        <Container id="createPostContainer">
            <div className="pageHead">
                <Alert severity="error" sx={postErrorSx}>
                    {postErrors}
                    <Button variant="standard" onClick={e => setPostErrorSx({visibility:"hidden"})}>X</Button>
                </Alert>
                <Typography variant="h1"><u>Start A Discussion</u></Typography>
            </div>
            <Paper elevation={3} id="createContent" sx={{bgcolor:'#DCC48E'}}>
                <form 
                onSubmit={handleSubmit}
                id="createPostForm">
                    <Typography variant="h3"><u>Enter a Discussion Question</u></Typography>
                    <TextField
                        id="filled-multiline-static"
                        label="Discussion Question"
                        multiline
                        sx={{bgcolor:"white", width:'80%', marginLeft:'3vw', borderRadius:'10px'}}
                        rows={3}
                        defaultValue={question}
                        onChange={e => setQuestion(e.target.value)}/>
                    <Button type="Submit" variant="contained">Post Discussion</Button>
                </form>
            </Paper>
        </Container>
    )
}

export default CreatePost;