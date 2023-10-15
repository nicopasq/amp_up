import { Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

function MyResponseCard({response}){
    return (
            <Grid item xs={6}>
                    <Card>
                        <CardContent>
                            <div id="cardHead">
                                <Typography variant="h5">
                                    {response.post.question}
                                </Typography>
                            </div>
                            <div id="cardBody">
                                {response.body}
                            </div>
                        </CardContent>
                    </Card>
            </Grid>
    )
}


export default MyResponseCard;