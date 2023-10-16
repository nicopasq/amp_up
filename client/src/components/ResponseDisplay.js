import React, { useContext, useState } from 'react'
import '../styles/responseDisplay.css'
import { Button, Typography } from '@mui/material'
import { UserContext } from './UserContext'

function ResponseDisplay({r, deleteResponses}){
    const { currentUser } = useContext(UserContext)
    const visibility = {
        visibility:"hidden"
    }

    if (currentUser.id === r.user.id){
        visibility.visibility = "block"
    }

    function deleteResponse(response){
        console.log('clicked:', response)
        // fetch(`/responses`, {
        //     method:"DELETE",
        //     headers:{"Content-Type":"application/json"},
        //     body:JSON.stringify({user_id: response.user.id, response_id: response.id})
        // })
        // .then(r => {
        //     if (r.ok){
        //         deleteResponses(response)
        //     }
        // })
    }
return (
    <div className='responseContainer'>
        <Typography variant='h5'><u>{r.user.username}</u></Typography>
        <div className='actionBtns' >
            <Button variant='text'>✏️</Button>
            <Button variant='text' onClick={()=> deleteResponse(r)}>🗑️</Button>
        </div>
        <Typography variant='h6'>{r.body}</Typography>
    </div>
)
}

export default ResponseDisplay;