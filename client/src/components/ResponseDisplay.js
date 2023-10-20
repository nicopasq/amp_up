import React, { useContext, useState } from 'react'
import '../styles/responseDisplay.css'
import { Button, Typography } from '@mui/material'
import { UserContext } from './UserContext'
import UpdateForm from './UpdateForm';
import { PostContext } from './PostContext';

function ResponseDisplay({response}){
    const {allPosts, setAllPosts} = useContext(PostContext)
    const [updateFormVisibility ,setUpdateFormVisibility] = useState({visibility:'hidden'})
    const {currentUser} = useContext(UserContext)
    const buttonSx = {
        visibility: 'hidden'
    }

    if (currentUser.id === response.user.id){
        buttonSx.visibility = {visibility: 'block'}
    }

    function deleteResposne(response){
        fetch(`/responses`, {
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({user_id: currentUser.id, response_id: response.id})
        })
        .then(() => {
            const filteredResponses = [...allPosts].filter(p => {
                if(p.id === response.post.id){
                    const filtered = p.responses.filter(resp => resp.id !== response.id)
                    p.responses = filtered
                    return p
                }
                return p
            })
            setAllPosts(filteredResponses)
        })
    }

    function updateResponse(response){
        setUpdateFormVisibility({visibility:'block'})
    }
    
    return (
        <li className='responseContainer' key={response.id}>
            <UpdateForm visibility={updateFormVisibility} response={response}/>
            <Typography variant='h5'><u>{response.user.username}</u></Typography>
            <div className='actionBtns'>
                <Button variant='text' sx={buttonSx} onClick={() => updateResponse(response)}>✏️</Button>
                <Button variant='text' sx={buttonSx} onClick={() => deleteResposne(response)}>🗑️</Button>
            </div>
            <Typography variant='h6'>{response.body}</Typography>
        </li>
    )
}

export default ResponseDisplay;