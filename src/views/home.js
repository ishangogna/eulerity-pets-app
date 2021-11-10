import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PhotoCard from '../components/card';
import { Photos } from './home.styles';

export default function Home()  {
    const [data, setData] = useState([])
    useEffect(()=>{
        var url = "https://eulerity-hackathon.appspot.com/pets"
        axios.get(url)
            .then((response) => setData(response.data))
            .then(()=> console.log(data))
        },[]);
    return (
        <div style = {{padding : 30}}>
            <div>
                
            </div>
            <Photos>
                {
                    data.map(pet => <PhotoCard title = {pet.title} description = {pet.description} url = {pet.url}/>)
                }
                
            </Photos>
        </div>
    )
  }