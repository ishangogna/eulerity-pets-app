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
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';



export default function Home()  {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const contacts = useSelector((state) => state.contacts.contacts)

    const [data, setData] = useState([])
    const [text, setText] = useState('')

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

    const handleTextChange = (event) => {
        setText(event.target.value)
        
    }
    return (
        <div>
            <UpperRow>
                <div>
                    <img src={companyLogo} alt="Eulerity logo" style = {{height : "70px"}}/>
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
                        <TextField id="outlined-basic" label="Search" variant="outlined" onChange = {(event)=> handleTextChange(event)}/>
                    </Box>
                    <Stack direction="row" spacing={2}>
                        <Button onClick = {()=> data.map(pet => dispatch(addContact(pet.url)))}>Select All</Button>
                        <Button onClick = {()=> data.map(pet => dispatch(deleteContact(pet.url)))}>Unselect All</Button>
                        <Button onClick = {()=> handleDownload()}><FileDownloadIcon /></Button>
                        <Button onClick = {() => navigate("/about")}><InfoIcon /></Button>  
                    </Stack>
                </div>
            </UpperRow>
            <Photos>
                <Masonry
                    breakpointCols={breakpoints}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                                    {
                                        text == "" ? data.map(pet => <PhotoCard title = {pet.title} description = {pet.description} url = {pet.url}/>)
                                        : 
                                        data.filter(pet => pet.title.includes(text) || pet.description.includes(text)).map(filteredPet => <PhotoCard title = {filteredPet.title} description = {filteredPet.description} url = {filteredPet.url} />)
                                        
                                    }
                </Masonry>
            </Photos>
        </div>
    )
  }