import { Typography } from '@mui/material'
import React, { useContext } from 'react'
import { UserContext } from './UserContext';
import '../styles/responseDisplay.css'

function ResponseDisplay(){
    const {currentUser} = useContext(UserContext)

    const bodySx = {
        width:'10vw',
    }

    return (
        <li id='repsonseId' className='responseContainer'>
            <Typography variant='h5'><u>{currentUser.username}</u></Typography>
            <Typography variant='h6' sx={bodySx}>response body</Typography>
        </li>
    )
}

export default ResponseDisplay;