import { Button, Container, Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "../styles/page.css"
import "../styles/createPost.css"

function CreatePost(){
    const [postData, setPostData] = useState({
        DQ: '',
        following: ''
    })

    function handleInput(e){
        setPostData({...postData, [e.target.name] : e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(postData)
        // fetch(`/posts`, {
        //     method:"POST",
        //     headers:{
        //         "Content-Type":"application/json"
        //     },
        //     body: JSON.stringify(postData)
        // })
    }

    return (
        <Container>
            <div className="pageHead">
                <Typography variant="h1">Start A Discussion</Typography>
            </div>
            <Paper elevation={24} id="createContent" sx={{bgcolor:"grey"}}>
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
                        defaultValue={postData.DQ}
                        onChange={e => handleInput(e)}/>
                    <Typography variant="h4">Follow Post?</Typography>
                    <div id="followPostRadio">
                            <Typography variant="h6">Yes</Typography>
                        <input type="radio" value="true" name="following" className="followPost" onClick={e => handleInput(e)}/>
                            <Typography variant="h6">No</Typography>
                        <input type="radio" value="false" name="following" className="followPost" onClick={e => handleInput(e)}/>
                    </div>
                    <Button type="Submit" variant="contained">Post Discussion</Button>
                </form>
            </Paper>
        </Container>
    )
}

export default CreatePost;