import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PhotoCard from '../components/card';
import { Photos } from './home.styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Masonry from 'react-masonry-css'



export default function Home()  {
    const [data, setData] = useState([])
    useEffect(()=>{
        var url = "https://eulerity-hackathon.appspot.com/pets"
        axios.get(url)
            .then((response) => setData(response.data))
            .then(()=> console.log(data))
        },[]);
    
    //responsive breakpoints for photo grid.
    const breakpoints = {
        default : 4,
        1100 : 2,
        700 : 1
    }
    return (
        <div>
            <div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField id="outlined-basic" label="Search" variant="outlined" />
                </Box>
            </div>
            <Photos>
                <Masonry
                    breakpointCols={breakpoints}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                                    {
                                        data.map(pet => <PhotoCard title = {pet.title} description = {pet.description} url = {pet.url}/>)
                                    }
                </Masonry>
            </Photos>
        </div>
    )
  }