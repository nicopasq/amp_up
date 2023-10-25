import React, { useContext, useState } from 'react'
import '../styles/responseDisplay.css'
import { Button, Typography } from '@mui/material'
import { UserContext } from './UserContext'
import UpdateForm from './UpdateForm';
import { PostContext } from './PostContext';

function ResponseDisplay({response}){
    const {allPosts, setAllPosts} = useContext(PostContext)
    const [formDisplay, setFormDisplay] = useState({display:'none'})
    const {currentUser, setCurrentUser} = useContext(UserContext)
    const currentUserCopy = {...currentUser}
    const buttonSx = {
        visibility: 'hidden'
    }
    
    if (currentUser.id === response.user.id){
        buttonSx.visibility = {visibility: 'block'}
    }

    function deleteResposne(response){
        fetch(`/responses/${response.id}`, {
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({user_id: currentUser.id})
        })
        .then(() => {
            const filteredResponses = [...allPosts].filter(p => {
                if(p?.id === response.post.id){
                    const filtered = p.responses.filter(resp => resp.id !== response.id)
                    p.responses = filtered
                    return p
                }
                return p
            })
            setAllPosts(filteredResponses)

            const updatedPosts = currentUserCopy.posts.map(post => {
                if (post.id === response.post.id){
                    const updatedResponses = post.responses.filter(r => r.id !== response.id)
                    return {...post, responses: updatedResponses}
                }
                return post
            })
            setCurrentUser({...currentUser, posts: updatedPosts})
        })
    }

    return (
        <li className='responseContainer' key={response.id}>
            <UpdateForm display={formDisplay} setFormDisplay={setFormDisplay} response={response}/>
            <Typography variant='h5'><u>{response.user.username}</u></Typography>
            <div className='actionBtns'>
                <Button variant='text' sx={buttonSx} onClick={() => setFormDisplay({display:'block'})}>✏️</Button>
                <Button variant='text' sx={buttonSx} onClick={() => deleteResposne(response)}>🗑️</Button>
            </div>
            <Typography variant='h6'>{response.body}</Typography>
        </li>
    )
}

export default ResponseDisplay;