import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import '../styles/profileResponseCard.css'

function MyProfileResponses({responseObj}){
    const {post, response} = responseObj
    return (
        <Grid item xs={6}>
            <Card className="myResponseCard">
                <CardContent className="cardContent">
                    <div className="cardHeader">
                        <Typography variant="h4">{post}</Typography>
                    </div>
                    <Typography variant="h5">{response.body}</Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default MyProfileResponses;