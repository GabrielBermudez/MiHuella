import React, {useState} from 'react';
import { CardActionArea, Card, CardContent, CardMedia, Typography, Box, Grid, Button } from '@mui/material';


export default function ItemListContainer({data}){
	const {id, title, description, price, stock, image} = data;

	return (
		<>
			<Card sx={{ maxWidth: '100%' }}>
			 	<CardContent>
			 		<Box sx={{ flexGrow: 1 }}>
		                <Grid container spacing={2}>
			                <Grid item xs={8}>
					        	<CardMedia
						          component="img"
						          height="400"
						          image={`./images/${image}`}
						          alt="Producto en venta"
						        />
						    </Grid>
						    <Grid item xs={4}>
						    	<div>
						    		Nombre: {title} <br />
						    		Descripción: {description} <br />
						    		Precio: ${price} <br />
						    		Stock: {stock} <br />
						    	</div>
						    	<Button variant="contained" style={{textDecoration: 'none'}}>Comprar</Button> 
						    </Grid>
						</Grid>
					</Box>
				</CardContent>
			</Card>
		</>
	);
}