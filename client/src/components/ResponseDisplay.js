import React from 'react'
import '../styles/responseDisplay.css'
import { Button, Typography } from '@mui/material'

function ResponseDisplay({r}){

return (
    <div className='responseContainer'>
        <div className='actionBtns'>
        <Typography variant='h5'><u>{r.user.username}</u></Typography>
            <Button variant='text'>✏️</Button>
            <Button variant='text'>🗑️</Button>
        </div>
        <Typography variant='h6'>{r.body}</Typography>
    </div>
)
}

export default ResponseDisplay;