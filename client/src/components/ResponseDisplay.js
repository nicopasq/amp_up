import React, { useContext } from 'react'
import '../styles/responseDisplay.css'
import { Button, Typography } from '@mui/material'
import { UserContext } from './UserContext'
import { ResponseContext } from "./ResponseContext";

function ResponseDisplay({response, removeResponse}){
    const {setChangeResponses} = useContext(ResponseContext)
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
        setChangeResponses(changeResponses => [...changeResponses].filter(r => r.id !== response.id))
        removeResponse(response)
    }

    return (
        <li className='responseContainer' key={response.user.id}>
            <Typography variant='h5'><u>{response.user.username}</u></Typography>
            <div className='actionBtns'>
                <Button variant='text' sx={buttonSx}>✏️</Button>
                <Button variant='text' sx={buttonSx} 
                onClick={() => deleteResposne(response)}
                >🗑️</Button>
            </div>
            <Typography variant='h6'>{response.body}</Typography>
        </li>
    )
}

export default ResponseDisplay;