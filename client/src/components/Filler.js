import { Paper } from "@mui/material";
import React from "react";

function Filler(){
    return (
        <Paper 
        elevation={3} 
        sx={{
            width: '19%', 
            height:'100vh', 
            position:'absolute', 
            top:'0vh', 
            left:'81vw', 
            bgcolor:'#DCC48E'
        }}></Paper>
    )
}

export default Filler;