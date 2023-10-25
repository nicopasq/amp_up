import { Card, Grid, Typography } from "@mui/material";
import React from "react";

function MyProfileResponses({response}){
    console.log(response)
    return (
        <Grid item xs={4}>
            <Card>
                <Typography variant="h4">Hello, This is a users response</Typography>
            </Card>
        </Grid>
    )
}

export default MyProfileResponses;