import React, { useContext, useState } from 'react'
import '../styles/responseDisplay.css'
import { Button, Typography } from '@mui/material'
import { UserContext } from './UserContext'

function ResponseDisplay({r}){
    const { currentUser } = useContext(UserContext)
    const visibility = {
        visibility:"hidden"
    }
    const [btnDisplay, setBtnDisplay] = useState(visibility)

    if (currentUser.id === r.user.id){
        visibility.visibility = "block"
    }
return (
    <div className='responseContainer'>
        <Typography variant='h5'><u>{r.user.username}</u></Typography>
        <div className='actionBtns' style={btnDisplay}>
            <Button variant='text'>✏️</Button>
            <Button variant='text'>🗑️</Button>
        </div>
        <Typography variant='h6'>{r.body}</Typography>
    </div>
)
}

export default ResponseDisplay;