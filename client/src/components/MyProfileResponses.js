import { Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import '../styles/profileResponseCard.css'
import { UserContext } from "./UserContext";

function MyProfileResponses({responseObj}){
    const {post, responses} = responseObj
    const {currentUser} = useContext(UserContext)

    const myResponses = responses.map(response => {
        if (response.user_id === currentUser.id){
            return response
        } 
    }).filter(r => r !== undefined)

    const renderResponses = myResponses.map( response => (
        <li className="myResponseLi" key={response.id}>
            <Typography variant="h5">{response.body}</Typography>
        </li>
    ))

    return (
        <Grid item xs={6}>
            <Card>
                <CardContent className="cardContent">
                    <Typography variant="h4" className="cardHeader">{post}</Typography>
                    <ul className="myResponsesUl">
                        {renderResponses}
                    </ul>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default MyProfileResponses;