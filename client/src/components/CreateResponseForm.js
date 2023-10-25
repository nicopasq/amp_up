import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { Alert, Button, TextField, Typography, keyframes } from "@mui/material";
import '../styles/createResponseForm.css'
import { PostContext } from "./PostContext";

function CreateResponseForm({post}){
    const {currentUser, setCurrentUser} = useContext(UserContext)
    const {allPosts, setAllPosts} = useContext(PostContext)
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
                const userCopy = {...currentUser}
                const addedResponses = [...allPosts].map(p => {
                    if(p.id === post.id){
                        p.responses.push(data)
                        return p
                    }
                    return p
                })
                setAllPosts(addedResponses)

                if (!userCopy.posts.map(p => p.id).includes(data.post.id) || userCopy.posts.length === 0){
                    setCurrentUser({...currentUser, posts: [...currentUser.posts, data.post]})
                } else {   
                    const updatedPosts = userCopy.posts.map(userPost => {
                        if (userPost.id === data.post.id) {
                            return data.post
                        }
                        return userPost
                    })
                    
                    setCurrentUser({...currentUser, posts: updatedPosts})
                }
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