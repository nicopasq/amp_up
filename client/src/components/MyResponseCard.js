import { Card, Grid } from "@mui/material";
import React from "react";

function MyResponseCard({response}){
    return (
            <Grid item xs={2}>
                    <Card>
                        <h2>{response.body}</h2>
                    </Card>
            </Grid>
    )
}


export default MyResponseCard;