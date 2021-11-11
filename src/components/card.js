import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function PhotoCard({title, description, url}) {
    const [selected, setSelected] = useState([])
  return (
    <Card sx={{ width: 345}}>
      <CardActionArea>
        <CardMedia
          component="img"
        //   height="140"
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