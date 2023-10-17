import React from 'react'
import '../styles/responseDisplay.css'
import { Button, Typography } from '@mui/material'

function ResponseDisplay({response}){

    return (
        <li className='responseContainer' key={response.id}>
            <Typography variant='h5'><u>{response.user.username}</u></Typography>
            <div className='actionBtns'>
                <Button variant='text'>✏️</Button>
                <Button variant='text' onClick={()=> console.log('delete me')}>🗑️</Button>
            </div>
            <Typography variant='h6'>{response.body}</Typography>
        </li>
    )
}

export default ResponseDisplay;