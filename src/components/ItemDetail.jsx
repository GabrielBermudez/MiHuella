//imr ffc
import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import {Link, useNavigate} from 'react-router-dom';
import ItemCount from './ItemCount';
import CartContext from '../context/CartContext';

export default function ItemDetail({data}) {
  const {id, title, price, image, stock} = data;
 
  const navigate = useNavigate();

  const {addProductToCart} = useContext(CartContext);

  const addToCart = (e, itemCount) => {
    e.preventDefault();
    addProductToCart(data, itemCount);
  }

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
                        <ItemCount stocks={stock} initial={0} addToCart={addToCart} />
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    </>
  );
}