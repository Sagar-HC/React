import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'; 

import Typography from '@mui/material/Typography';
import "./infoBox.css";

export default function InfoBox({info}){
    const image_url="https://images.unsplash.com/photo-1606141836992-bfcb00c776c2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
        <div className="infoBox">
            <h1>temp:{info.temp}</h1>
            <br /><br />


    <div className="cardBox">
            <Card sx={{ width: '100%',maxWidth: 745 }}>
                   <CardMedia
                     sx={{ height: 340 }}
                     image={image_url}
                     title="weather gpt"
                   />
                   <CardContent>
                     <Typography gutterBottom variant="h5" component="div">
                       {info.city}
                     </Typography>
                     <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                         
                             <div>Min_Temperature:{info.tempMin}&deg;c</div>
                            <div> Temperature:{info.temp}&deg;c </div>
                           <div> Max_Temperature:{info.tempMax}&deg;c</div> 
                           <div>humidity:{info.humidity}&deg;c</div> 
                    <div>feelsLike:{info.feelsLike}</div>    
                       
                     </Typography>
                   </CardContent>
                 </Card>
            </div>    
        </div>
    )
}