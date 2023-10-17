import React, { useContext } from 'react'
import '../styles/responseDisplay.css'
import { Button, Typography } from '@mui/material'
import { UserContext } from './UserContext'

function ResponseDisplay({response}){
    const {currentUser} = useContext(UserContext)
    const buttonSx = {
        visibility: 'hidden'
    }
    if (currentUser.id === response.user.id){
        buttonSx.visibility = {visibility: 'block'}
    }
    return (
        <li className='responseContainer' key={response.id}>
            <Typography variant='h5'><u>{response.user.username}</u></Typography>
            <div className='actionBtns'>
                <Button variant='text' sx={buttonSx}>✏️</Button>
                <Button variant='text' sx={buttonSx} onClick={()=> console.log('delete me')}>🗑️</Button>
            </div>
            <Typography variant='h6'>{response.body}</Typography>
        </li>
    )
}

export default ResponseDisplay;