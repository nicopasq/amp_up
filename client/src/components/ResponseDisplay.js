import React from 'react'
import '../styles/responseDisplay.css'
import { Typography } from '@mui/material'

function ResponseDisplay({r}){
console.log('response from ResponseDisplay', r.body)
// console.log(r.user.id)

if (r.user){
    const username = r.user.username
    const body = r.body

    return (
        <div className='responseContainer'>
            <Typography variant='h5'>{username}</Typography>
            <Typography variant='h6'>{body}</Typography>
        </div>
    )
    
}
}

export default ResponseDisplay;