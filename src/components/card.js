import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useDispatch,useSelector } from 'react-redux';
import { addContact, deleteContact } from '../store/contactSlice'

export default function PhotoCard({title, description, url}) {
    const dispatch = useDispatch()
    const contacts = useSelector((state) => state.contacts.contacts)
    
  return (
    <Card sx={contacts.includes(url)? {width: 345, border: '2px solid #14B7B5'}:{ width: 345}} onClick = {()=> contacts.includes(url) ? dispatch(deleteContact(url)) : dispatch(addContact(url))}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={url}
          alt="Image failed to load"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}