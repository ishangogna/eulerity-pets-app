import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PhotoCard from '../components/card';
import { Photos, UpperRow } from './home.styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Masonry from 'react-masonry-css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import companyLogo from '../utils/images/logoEulerity.png';
import { useDispatch,useSelector } from 'react-redux';
import { addContact, deleteContact } from '../store/contactSlice'
import fileDownload from 'js-file-download'



export default function Home()  {

    const dispatch = useDispatch()

    const contacts = useSelector((state) => state.contacts.contacts)

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
    const handleDownload = () => {
        contacts.map(contact => {
            axios.get(contact, {
                responseType: 'blob',
              })
              .then((res) => {
                fileDownload(res.data, "image.png")
              })
            
        })
    }
    return (
        <div>
            <UpperRow>
                <div>
                    <img src={companyLogo} alt="BigCo Inc. logo" style = {{height : "70px"}}/>
                </div>
                <div style = {{display : 'flex', flexDirection : 'row'}}>
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
                    <Stack direction="row" spacing={2}>
                        <Button onClick = {()=> data.map(pet => dispatch(addContact(pet.url)))}>Select All</Button>
                        <Button onClick = {()=> data.map(pet => dispatch(deleteContact(pet.url)))}>Unselect All</Button>
                        <Button onClick = {()=> handleDownload()}>Download</Button>
                        
                    </Stack>
                </div>
            </UpperRow>
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