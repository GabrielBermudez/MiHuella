import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';

export default function ItemCount({stocks, initial, onAdd}) {

    const [itemCount, setItemCount] = useState(initial);
    const [stock, setStock] = useState(stocks)

    const addItem = (e) => {
        e.preventDefault();
        console.log(itemCount < stock);
        if(itemCount < stock)
            setItemCount(itemCount + 1);
    }

    const decresedItem = (e) => {
        e.preventDefault();
        if(itemCount > 0)
            setItemCount(itemCount -1);
    }

  return (
    
    <Card sx={{ maxWidth: 345 }} style={{backgroundColor: 'whitesmoke'}} >
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Stock: {stock}
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                    <Button variant="outlined" onClick={decresedItem} style={{textDecoration: 'none'}}>-</Button>
                    </Grid>
                    <Grid item xs={4}>
                    <h2>{itemCount}</h2>
                    </Grid>
                    <Grid item xs={4}>
                    <Button variant="outlined" onClick={addItem} style={{textDecoration: 'none'}}>+</Button>
                    </Grid>
                </Grid>
            </Box>
            <Button variant="contained" style={{textDecoration: 'none'}} onClick={(e) => onAdd(e, itemCount)}>Agregar al Carrito</Button>
        </CardContent>
    </Card>
  );
}