import { Button, TextField} from "@mui/material";
import React, { useContext, useState } from "react";
import '../styles/updateForm.css'
import { PostContext } from "./PostContext";

function UpdateForm({response, display, setFormDisplay}){
    const {allPosts, setAllPosts} = useContext(PostContext)
    const [updatedResponseBody, setUpdatedResponseBody] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        const updatedResponseObj = {
            user_id: response.user.id,
            post_id: response.post_id,
            body: updatedResponseBody
        }

        fetch(`/responses/${response.id}`, {
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(updatedResponseObj)
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            const updatedResponses = [...allPosts].map(post => {
                if (post.id === data.post.id){
                    const responseCopy = [...post.responses]
                    const updated = responseCopy.map(resp => {
                        if(resp.id === data.id){
                            resp = data
                            return resp
                        }
                        return resp
                    })
                    return {...post, responses: updated}
                }
                return post
            })
            // console.log('updatedResponses', updatedResponses)
            setAllPosts(updatedResponses)
        })
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