import React from 'react'
import '../styles/responseDisplay.css'
import { Typography } from '@mui/material'

function ResponseDisplay({r}){
console.log(r)

return (
    <div className='responseContainer'>
        <Typography variant='h5'>{r.user.username}</Typography>
        <Typography variant='h6'>{r.body}</Typography>
    </div>
)
}

export default ResponseDisplay;