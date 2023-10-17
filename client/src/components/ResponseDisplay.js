import React, { useContext, useState } from 'react'
import '../styles/responseDisplay.css'
import { Button, Typography } from '@mui/material'
import { UserContext } from './UserContext'
import { ResponseContext } from './ResponseContext'

function ResponseDisplay({currentPost}){
    const { currentUser } = useContext(UserContext)
    const { allResponses } = useContext(ResponseContext)
    const [postResponses, setPostResponses] = useState(currentPost.responses)

    function deleteResponse(response){
        fetch(`/responses`, {
            method:"DELETE",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({user_id: response.user.id, response_id: response.id})
        })
        .then(r => {
            if (r.ok){
                // deleteResponses(response)
            }
        })
    }

    if (allResponses.length){
        allResponses.map(r => {
            if(r.post.id === currentPost.id && !postResponses.includes(r)){
                postResponses.push(r)
            }
        })
    }

   
    const postResponseEl =  postResponses.map(r => {
        let visibility ={visibility:'hidden'}
        if (r.user.id === currentUser.id){
            visibility = {visibility:'block'}
        }

        return (
            <div className='responseContainer' key={r.id}>
                <Typography variant='h5'><u>{r.user.username}</u></Typography>
            <div className='actionBtns' >
                <Button variant='text' sx={visibility}>✏️</Button>
                <Button variant='text' sx={visibility} onClick={()=> deleteResponse(r)}>🗑️</Button>
            </div>
                <Typography variant='h6'>{r.body}</Typography>
            </div>
        )
    })

    return [...postResponseEl].reverse()

}

export default ResponseDisplay;