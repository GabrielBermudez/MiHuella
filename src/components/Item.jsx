//imr ffc
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

export default function Item({data}) {
  const {id, title, price, image, stock} = data;
  return (
    <>
        <Card sx={{ maxWidth: 345 }}>
            <Link to={`/item/${id}`}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image= {`../images/${image}`}
                    alt="Producto en venta"
                    />
                    <CardContent style={{color: "black"}}>
                        <Typography gutterBottom variant="h5" component="div">
                            Nombre: {title}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            Precio: {price}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" >
                            Stock: {stock}
                        </Typography>
                        <Button variant="contained" style={{textDecoration: 'none'}} ><Link to={`/item/${id}`}>Comprar</Link></Button>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    </>
  );
}