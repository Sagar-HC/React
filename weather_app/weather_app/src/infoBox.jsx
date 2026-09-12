import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'; 

import Typography from '@mui/material/Typography';
import "./infoBox.css";

export default function InfoBox({info}){
    const image_url="https://images.unsplash.com/photo-1606141836992-bfcb00c776c2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const cold_url="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const rainy_url="https://images.unsplash.com/photo-1509635022432-0220ac12960b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnklMjB3aW5kb3d8ZW58MHx8MHx8fDA%3D";

    return(
        <div className="infoBox">
            <h1>temp:{info.temp}</h1>
            <br /><br />


    <div className="cardBox">
            <Card sx={{ width: '100%',maxWidth: 745 }}>
                   <CardMedia
                     sx={{ height: 340 }}
                     image={info.humidity>80?rainy_url:info.temp>15?image_url:cold_url}
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