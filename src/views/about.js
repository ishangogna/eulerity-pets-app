import React from 'react';
import { useNavigate } from 'react-router-dom';
import {UpperRow } from './home.styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import companyLogo from '../utils/images/logoEulerity.png';
import HomeIcon from '@mui/icons-material/Home';
import EulerityWhy from '../utils/images/EulerityWhy.png'


export default function About()  {
    const navigate = useNavigate()

    return (        
        <div>
            <UpperRow>
                <div>
                    <img src={companyLogo} alt="Eulerity logo" style = {{height : "70px"}}/>
                </div>
                <div style = {{display : 'flex', flexDirection : 'row'}}>
                    <Stack direction="row" spacing={2}>
                        <Button onClick = {() => navigate("/")}><HomeIcon /></Button>  
                    </Stack>
                </div>
            </UpperRow>
                <div style = {{display : 'flex', flexDirection : 'row', justifyContent : 'center', alignItems : 'center'}}>
                <div style = {{ maxWidth : '500px'}}>
                    <div style = {{fontSize : 40, fontWeight : 600, marginBottom : 10}}>Why are we called “Eulerity”?</div>
                    <div style = {{fontWeight : 400}}>We named the company after Leonhard Euler, one of the most eminent mathematicians of the 18th century. He made many influential discoveries and introduced much of the mathematical terminology and notation we know today, like mathematical functions.

                            We wanted to pay tribute to his contributions by alluding to our platform’s state-of-the-art technology and algorithms that allow people with no knowledge of digital marketing to run successful campaigns that drive business results.</div>
                </div>
                <img src = {EulerityWhy} style = {{width : "600px"}}/>
                </div>
        </div>
    )
  }