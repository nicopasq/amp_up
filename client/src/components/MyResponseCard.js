import { Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

function MyResponseCard({response}){
    // console.log(response)
    return (
            <Grid item xs={6}>
                    <Card>
                        <CardContent>
                            <div id="cardHead">
                                <Typography variant="h5">
                                    {response.post.question}
                                </Typography>
                            </div>
                            <div id="cardBody" style={{overflowWrap:'break-word'}}>
                                {response.body}
                            </div>
                        </CardContent>
                    </Card>
            </Grid>
    )
}


export default MyResponseCard;